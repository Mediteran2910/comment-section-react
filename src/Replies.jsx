import { useState } from "react";
import { useContext } from "react";
import DataProvider from "./DataProvider";
import { DataContext } from "./DataProvider";
import UserDetails from "./UserDetails";
import LikeBtn from "./LikeBtn";
import ReplyBtn from "./ReplyBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

export default function Replies({ repliesArr }) {
  const {
    data,
    setData,
    replyingTo,
    setReplyingTo,
    setDeleteId,
    setDeleteConfirmation,
  } = useContext(DataContext);

  const firstStepDelete = (id) => {
    setDeleteId(id);
    setDeleteConfirmation((prevDeleteconfirmation) => !prevDeleteconfirmation);
  };

  return (
    <div className="replies-wrapp">
      {repliesArr.map((reply, index) => (
        <div key={index} className="replies">
          <UserDetails user={reply} />
          <p className="user-content">
            {reply.replyingTo && (
              <span style={{ color: "purple" }}>@{reply.replyingTo} </span>
            )}

            {reply.content}
          </p>
          {reply.isYou ? (
            <div className="like-reply-wrapp">
              <LikeBtn user={reply} />
              <div className="edit-delete-wrapp">
                <EditBtn />
                <DeleteBtn firstStepDelete={() => firstStepDelete(reply.id)} />
              </div>
            </div>
          ) : (
            <div className="like-reply-wrapp">
              <LikeBtn user={reply} />
              <ReplyBtn />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
