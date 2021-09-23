import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Vitz from "../../public/images/hilluxx.jpg";
import Rav4 from "../../public/images/viitzz.jpg";
import Q from "../../public/images/quantumm.png";
import styles from "../../styles/Carousel.module.css";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import Slider from "react-slick";
import Image from "next/image";

function carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <div></div>;
}

export default carousel;
