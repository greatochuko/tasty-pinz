import styles from "./Vendors.module.css";
import useCarousel from "../hooks/useCarousel";
import Vendor from "./Vendor";
import vendors from "../../data/vendors.json";

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
          <Vendor
            key={vendors[0].url}
            vendor={vendors[0]}
            vendorRef={childRef}
          />
          {vendors.map((vendor) =>
            vendor !== vendors[0] ? (
              <Vendor key={vendor.url} vendor={vendor} />
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
