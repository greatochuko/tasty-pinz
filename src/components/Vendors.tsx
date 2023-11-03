import { Link } from "react-router-dom";
import styles from "./Vendors.module.css";
import useCarousel from "../hooks/useCarousel";

const vendors = [
  { logo: "/mcdonalds-logo.jpg", name: "McDonald's", url: "mcdonalds" },
  {
    logo: "/the-cheesecake-factory-logo.png",
    name: "The Cheesecake Factory",
    url: "the-cheesecake-factory",
  },
  { logo: "/olive-garden-logo.jpg", name: "Olive Garden", url: "olive-garden" },
  { logo: "/red-lobster-logo.jpg", name: "Red Lobster", url: "red-lobster" },
  {
    logo: "/chili's-grill-&-bar-logo.png",
    name: "Chili's Grill & Bar",
    url: "chili's-grill-&-bar",
  },
  {
    logo: "/applebee's-logo.png",
    name: "Applebee's",
    url: "applebee's",
  },
  {
    logo: "/outback-steakhouse-logo.jpg",
    name: "Outback Steakhouse",
    url: "outback-steakhouse",
  },
  {
    logo: "/panera-bread-logo.png",
    name: "Panera Bread",
    url: "panera-bread",
  },
  {
    logo: "/TGI-fridays-logo.jpg",
    name: "TGI Fridays",
    url: "TGI-fridays",
  },
  {
    logo: "/cracker-barrel-logo.png",
    name: "Cracker Barrel",
    url: "cracker-barrel",
  },
  {
    logo: "/the-capital-grille-logo.jpg",
    name: "The Capital Grille",
    url: "the-capital-grille",
  },
];

export default function Vendors() {
  const { carouselRef, scrollLeft, scrollPosition, scrollRight, childRef } =
    useCarousel(vendors);
  return (
    <section className={styles.vendorSection}>
      <h2 className={styles.heading}>Our Vendors</h2>
      <div className={styles.carousel} ref={carouselRef}>
        <div
          className={styles.vendorList}
          style={{
            transform: `translateX(${scrollPosition * 216}px)`,
          }}
        >
          <Link
            to={`/vendors/${vendors[0].url}`}
            key={vendors[0].name}
            className={styles.vendor}
            ref={childRef}
          >
            <img src={vendors[0].logo} alt="" />
          </Link>
          {vendors.map((vendor) =>
            vendor !== vendors[0] ? (
              <Link
                to={`/vendors/${vendor.url}`}
                key={vendor.name}
                className={styles.vendor}
              >
                <img src={vendor.logo} alt="" />
              </Link>
            ) : null
          )}
        </div>
        <div className={styles.buttons}>
          <button onClick={scrollRight}>&lt;</button>
          <button onClick={scrollLeft}>&gt;</button>
        </div>
      </div>
    </section>
  );
}
