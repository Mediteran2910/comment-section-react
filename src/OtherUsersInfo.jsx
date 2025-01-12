import { useContext } from "react";
import { DataContext } from "./DataProvider";
import LikeBtn from "./LikeBtn";
import ReplyBtn from "./ReplyBtn";
import UserDetails from "./UserDetails";
import Replies from "./Replies";
import PersonalComment from "./PersonalComment";
export default function OtherUsersInfo({ user, placeholder }) {
  const { replyingTo } = useContext(DataContext);
  return (
    <>
      <div className="other-users-wrapp">
        <UserDetails user={user} />
        <p className="user-content">{user.content}</p>
        <div className="like-reply-wrapp">
          <LikeBtn user={user} />
          <ReplyBtn userId={user.id} />
        </div>
      </div>
      {replyingTo === user.id && (
        <PersonalComment placeholder="Your reply..." />
      )}
    </>
  );
}
