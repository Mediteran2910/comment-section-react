import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "./DataProvider";
export default function ReplyBtn({ userId }) {
  const { handleReplyBtn, data } = useContext(DataContext);

  return (
    <button className="reply-btn" onClick={() => handleReplyBtn(userId)}>
      Reply
    </button>
  );
}
