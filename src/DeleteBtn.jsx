import { useContext } from "react";
import { DataContext } from "./DataProvider";

export default function DeleteBtn({ handleDelete }) {
  return (
    <img
      src="images/icon-delete.svg"
      alt="delete icon - trash can"
      onClick={handleDelete}
    />
  );
}
