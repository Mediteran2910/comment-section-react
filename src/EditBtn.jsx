export default function EditBtn({ showEditReplyBox }) {
  return (
    <img
      src="images/icon-edit.svg"
      alt="edit icon - icon of pencil"
      onClick={showEditReplyBox}
    />
  );
}
