import { useState, useRef } from "react";

type Vendors = {
  logo?: string;
  name: string;
  url?: string;
  imageUrl?: string;
  price?: number;
}[];

export default function useCarousel(data: Vendors) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLAnchorElement | null>(null);
  const vendorWidth = (childRef.current?.clientWidth as number) + 18;
  const carouselWidth = carouselRef.current?.clientWidth as number;

  const maxNumOfVendors = Math.floor(carouselWidth / vendorWidth);
  function scrollLeft() {
    if (scrollPosition <= -data.length + maxNumOfVendors) return;
    setScrollPosition((curr) => curr - 1);
  }

  function scrollRight() {
    if (scrollPosition === 0) return;
    setScrollPosition((curr) => curr + 1);
  }
  return {
    scrollLeft,
    scrollRight,
    carouselRef,
    scrollPosition,
    childRef,
    vendorWidth,
  };
}
