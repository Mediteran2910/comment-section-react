import { useState, createContext, useContext } from "react";
import { otherUsers } from "./Info";
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
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
