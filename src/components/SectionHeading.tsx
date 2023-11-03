import { Link } from "react-router-dom";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  title: string;
  linkText: string;
};

export default function SectionHeading({
  title,
  linkText,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2> <Link to={"/"}>{linkText}</Link>
    </div>
  );
}
