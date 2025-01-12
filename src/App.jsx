import { useState } from "react";
import DataProvider from "./DataProvider";
import OtherUsersInfo from "./OtherUsersInfo";
import FullPage from "./FullPage";
import "./App.css";

export default function App() {
  return (
    <>
      <DataProvider>
        <FullPage />
      </DataProvider>
    </>
  );
}
