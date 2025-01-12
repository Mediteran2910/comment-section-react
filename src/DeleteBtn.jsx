import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function DeleteBtn({ firstStepDelete }) {
  const { setDeleteConfirmation } = useContext(DataContext);

  return (
    <>
      <img
        src="images/icon-delete.svg"
        alt="delete icon - trash can"
        onClick={firstStepDelete}
      />
    </>
  );
}
