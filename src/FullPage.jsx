import { useContext } from "react";
import Replies from "./Replies";
import OtherUsersInfo from "./OtherUsersInfo";
import { DataContext } from "./DataProvider";
import PersonalComment from "./PersonalComment";

export default function FullPage() {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.map((user, index) => (
        <div key={index} className="full-page-wrapper">
          <OtherUsersInfo user={user} />
          {user.replies.length >= 0 ? (
            <Replies repliesArr={user.replies} />
          ) : null}
        </div>
      ))}
      <PersonalComment placeholder="Your comment..." />
    </>
  );
}
