import styles from "./Vendor.module.css";
import { Link } from "react-router-dom";

export type VendorType = {
  name: string;
  logo: string;
  url: string;
};

type VendorProps = {
  vendor: VendorType;
  vendorRef?: React.MutableRefObject<HTMLAnchorElement | null>;
};

export default function Vendor({ vendor, vendorRef }: VendorProps) {
  return (
    <Link
      to={`/vendor/${vendor.url}`}
      key={vendor.name}
      className={styles.vendor}
      ref={vendorRef}
    >
      <img src={vendor.logo} alt="" />
    </Link>
  );
}
