import { useState, createContext, useContext } from "react";
import { otherUsers } from "./Info";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(otherUsers);

  return (
    <>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
}
