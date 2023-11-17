import styles from "./FilterHeader.module.css";
import { useState } from "react";

type FilterHeaderProps = {
  optionList: string[];
  onClickFunc?: (filter: string) => void;
};

export default function FilterHeader({
  optionList,
  onClickFunc,
}: FilterHeaderProps) {
  const [highlighterPos, setHighlighterPos] = useState({
    left: 0,
    width: 53,
  });

  function changeHighlighterPos(e: React.MouseEvent) {
    const eventTarget = e.target as HTMLUListElement;

    if (onClickFunc) {
      onClickFunc(eventTarget.innerText.split(" ").join("-").toLowerCase());
    }
    setHighlighterPos({
      left: eventTarget.offsetLeft,
      width: eventTarget.clientWidth,
    });
  }

  return (
    <ul className={styles.filterHeader}>
      <li onClick={changeHighlighterPos}>All</li>
      {optionList.map((filterOption) => (
        <li onClick={changeHighlighterPos} key={filterOption}>
          {filterOption}
        </li>
      ))}
      <div
        className={styles.highlighter}
        style={{ left: highlighterPos.left, width: highlighterPos.width }}
      ></div>
    </ul>
  );
}
