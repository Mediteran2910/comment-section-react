import { DataContext, useContext } from "./DataProvider";
export const otherUsersData = useContext(DataContext);
export default function LikeBtn() {
  return (
    <div className="likes-wrapp">
      <button>-</button>
      <p>0</p>
      <button>+</button>
    </div>
  );
}
