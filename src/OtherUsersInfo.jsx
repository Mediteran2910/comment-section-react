import { useContext } from "react";
import { DataContext } from "./DataProvider";
import LikeBtn from "./LikeBtn";
import ReplyBtn from "./ReplyBtn";
export default function OtherUsersInfo() {
  const otherUsersData = useContext(DataContext);
  return (
    <>
      {otherUsersData.map((user, index) => (
        <div key={index} className="other-users-wrapp">
          <div className="user-head-details">
            <img src={user.user.image.png} alt="profile picture of the user" />
            <p>{user.user.username}</p>
            <p> {user.createdAt}</p>
          </div>
          <p className="user-content">{user.content}</p>
          <div className="like-reply-wrapp">
            <LikeBtn />
            <ReplyBtn />
          </div>
        </div>
      ))}
    </>
  );
}
