import { useSearchParams } from "react-router-dom";
import styles from "./FilterHeader.module.css";
import { useState } from "react";

type FilterHeaderProps = {
  optionList: string[];
  onClickFunc?: (filter: string) => void;
};

function getHighlighterPos(filterBy: string) {
  switch (filterBy) {
    case "rice":
      return { left: 54, width: 63 };
    case "fast-food":
      return { left: 117, width: 107 };
    case "drinks":
      return { left: 224, width: 80 };
    case "steak":
      return { left: 304, width: 74 };
    case "cake":
      return { left: 378, width: 68 };
    default:
      return { left: 0, width: 53 };
  }
}

export default function FilterHeader({
  optionList,
  onClickFunc,
}: FilterHeaderProps) {
  const [searchParams] = useSearchParams();
  const filterBy: string = searchParams.get("filterBy") as string;

  const [highlighterPos, setHighlighterPos] = useState(
    filterBy ? getHighlighterPos(filterBy) : { left: 0, width: 53 }
  );

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
