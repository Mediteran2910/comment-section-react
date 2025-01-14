import { useContext } from "react";
import Replies from "./Replies";
import OtherUsersInfo from "./OtherUsersInfo";
import { DataContext } from "./DataProvider";
import PersonalComment from "./PersonalComment";

import DeleteConf from "./DeleteConf";

export default function FullPage() {
  const {
    data,
    deleteConfirmation,
    setDeleteConfirmation,
    replyId,
    setReplyId,
    setData,
  } = useContext(DataContext);

  const confirmDelete = (id) => {
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        replies: item.replies.filter((oneReply) => oneReply.id !== id),
      }))
    );
    setDeleteConfirmation(false);
  };

  return (
    <>
      {data.map((user, index) => (
        <div key={index} className="full-page-wrapper">
          <OtherUsersInfo user={user} />

          {user.replies.length > 0 ? (
            <Replies repliesArr={user.replies} />
          ) : null}
        </div>
      ))}
      <PersonalComment placeholder="Your comment..." />
      {deleteConfirmation && (
        <DeleteConf confirmDelete={() => confirmDelete(replyId)} />
      )}
    </>
  );
}
