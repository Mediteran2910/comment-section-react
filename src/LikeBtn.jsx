import { DataContext } from "./DataProvider";
import { useContext, useState } from "react";
import { otherUsers } from "./Info";

export default function LikeBtn({ user }) {
  const [score, setScore] = useState(user.score);

  const increment = () => {
    if (score == user.score + 1) return score;
    else setScore(score + 1);
  };

  const decrement = () => {
    if (score == user.score - 1) return score;
    else setScore(score - 1);
  };

  return (
    <div className="likes-wrapp">
      <button onClick={decrement}>-</button>
      <p>{score}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
