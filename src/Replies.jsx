import { useContext } from "react";
import { DataContext } from "./DataProvider";
import UserDetails from "./UserDetails";
import LikeBtn from "./LikeBtn";
import ReplyBtn from "./ReplyBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import React from "react";
import PersonalComment from "./PersonalComment";

export default function Replies({ repliesArr }) {
  const { setReplyId, setDeleteConfirmation, replyId, setIsEdit, isEdit } =
    useContext(DataContext);

  const firstStepDelete = (id) => {
    setReplyId(id);
    setDeleteConfirmation((prevDeleteConfirmation) => !prevDeleteConfirmation);
  };

  const showEditReplyBox = (id) => {
    setReplyId(id);
    setIsEdit(true);
    console.log("whats app", id, replyId);
  };

  return (
    <>
      {repliesArr.map((reply, index) => (
        <div className="replies-wrapp" key={index}>
          {replyId === reply.id ? (
            <PersonalComment />
          ) : (
            <div className="replies">
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
                    <EditBtn
                      showEditReplyBox={() => showEditReplyBox(reply.id)}
                    />
                    <DeleteBtn
                      firstStepDelete={() => firstStepDelete(reply.id)}
                    />
                  </div>
                </div>
              ) : (
                <div className="like-reply-wrapp">
                  <LikeBtn user={reply} />
                  <ReplyBtn />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
