import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "./DataProvider";
export default function ReplyBtn({ userId }) {
  const { handleReplyBtn, data } = useContext(DataContext);

  return (
    <div className="reply-btn-wrapp" onClick={() => handleReplyBtn(userId)}>
      <img src="images/icon-reply.svg" alt="arrow reply icon" />
      <button>Reply</button>
    </div>
  );
}
