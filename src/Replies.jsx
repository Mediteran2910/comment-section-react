import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import UserDetails from "./UserDetails";
import LikeBtn from "./LikeBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import React from "react";
import PersonalComment from "./PersonalComment";

export default function Replies({ repliesArr }) {
  const { setReplyId, setDeleteConfirmation, replyId, data } =
    useContext(DataContext);

  const [isEdit, setIsEdit] = useState(false);

  const firstStepDelete = (idx) => {
    setReplyId(idx);
    setDeleteConfirmation((prevDeleteConfirmation) => !prevDeleteConfirmation);
  };

  const showEditReplyBox = (idx) => {
    setReplyId(idx);
    setIsEdit(true);
    console.log("whats app", idx, replyId);
  };

  return (
    <>
      {repliesArr.map((reply, index) => (
        <div className="replies-wrapp" key={index}>
          {replyId === reply.id ? (
            <PersonalComment isEdit={isEdit} setIsEdit={setIsEdit} />
          ) : (
            <div className="replies">
              <UserDetails user={reply} />
              <p className="user-content">{reply.content}</p>
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
                <LikeBtn user={reply} />
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
