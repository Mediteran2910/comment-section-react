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

  return (
    <>
      <DataContext.Provider
        value={{ data, setData, handleReplyBtn, replyingTo, setReplyingTo }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
