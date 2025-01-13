import { useState, createContext, useContext } from "react";
import { otherUsers } from "./Info";
import PersonalComment from "./PersonalComment";
export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(otherUsers);
  const [replyingTo, setReplyingTo] = useState(null);

  const handleReplyBtn = (id) => {
    setReplyingTo((prevId) => (prevId === id ? null : id));
    console.log("replying to", id);
  };

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [replyId, setReplyId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
          handleReplyBtn,
          replyingTo,
          setReplyingTo,
          deleteConfirmation,
          setDeleteConfirmation,
          replyId,
          setReplyId,
          isEdit,
          setIsEdit,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
