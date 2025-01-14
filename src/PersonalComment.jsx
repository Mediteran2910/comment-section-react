import { otherUsers, currentUser } from "./Info";
import UserDetails from "./UserDetails";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";

export default function PersonalComment({
  placeholder,
  reply,
  isEdit,
  setIsEdit,
}) {
  const { data, setData, replyingTo, setReplyingTo, setReplyId, replyId } =
    useContext(DataContext);

  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (isEdit) {
      data.map((item) => {
        item.replies.map((oneReply) => {
          if (oneReply.id === replyId) {
            console.log(
              "this is the one i found",
              oneReply.id,
              oneReply.content
            );
            setCommentText(oneReply.content);
            console.log(commentText);
            return;
          } else {
            console.log("didnt find it", oneReply.id, replyId);
            return;
          }
        });
      });
    }
  }, [isEdit]);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const newPersonalComment = {
      id: Math.random(),
      isYou: "you",
      content: commentText,
      createdAt: "Just now",
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };

    if (isEdit === true) {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          replies: item.replies.map((reply) =>
            reply.id === replyId ? { ...reply, content: commentText } : reply
          ),
        }))
      );
      setIsEdit(false);
      setCommentText("");
      setReplyId(Math.random());
    } else if (replyingTo < 0 || replyingTo === null) {
      console.log(newPersonalComment);
      setData((prevData) => [...prevData, newPersonalComment]);
      setCommentText("");
    } else {
      setData((prevData) =>
        prevData.map((item) => {
          if (replyingTo === item.id) {
            console.log(
              "i found one:",
              "replyingTo =",
              replyingTo,
              "itemId = ",
              item.id
            );
            console.log(item);

            return {
              ...item,
              replies: [newPersonalComment, ...item.replies],
            };
          }
          return item;
        })
      );
      setReplyingTo(null);
    }
  };

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <>
      <div className="details-personal-comment-wrapp">
        <form
          className="details-personal-comment"
          onSubmit={handleSubmitComment}
        >
          <img
            src={currentUser.image.png}
            alt="Profile picture of current user"
          />
          <textarea
            value={commentText}
            onChange={handleChange}
            placeholder={placeholder}
          ></textarea>
          <button type="submit">{isEdit ? "Save" : "Send"}</button>
        </form>
      </div>
    </>
  );
}
