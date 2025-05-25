"use client"; // wajib karena akses browser API

import dynamic from "next/dynamic";
import animate2 from "@/assets/animate2.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieAnimate() {
  return <Lottie animationData={animate2} loop={true} />;
}
