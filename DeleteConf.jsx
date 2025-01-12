import { useContext } from "react";
import { DataContext } from "./src/DataProvider";

export default function DeleteConf({ confirmDelete }) {
  const { setDeleteConfirmation } = useContext(DataContext);

  const rejectDelete = () => {
    setDeleteConfirmation((prevDeleteconfirmation) => !prevDeleteconfirmation);
  };
  return (
    <>
      <div className="delete-confirmation-wrapp">
        <div className="delete-confirmation">
          <p>
            Are you sure you want to delete your reply? This will remove the
            comment and can't be undone.
          </p>
          <div className="delete-keep-wrapp">
            <button onClick={rejectDelete}>Keep reply</button>
            <button
              onClick={confirmDelete}
              style={{ backgroundColor: "rgb(176, 0, 0)" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
