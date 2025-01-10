import { useState } from "react";
import DataProvider from "./DataProvider";
import OtherUsersInfo from "./OtherUsersInfo";
import "./App.css";

export default function App() {
  return (
    <>
      <DataProvider>
        <OtherUsersInfo />
      </DataProvider>
    </>
  );
}
