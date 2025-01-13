export default function DeleteBtn({ firstStepDelete }) {
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
