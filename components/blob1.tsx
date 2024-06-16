import React from "react";
import Image from "next/image";
import blob1 from "@/assets/blob1.svg";
const Blob1 = () => {
  return (
    <div
      className="fixed top-20 left-10 rotate-12 overflow-hidden opacity-50" style={{"zIndex":"-50"}}>
      <Image
        src={blob1}
        aria-hidden="true"
        width={400}
        priority
        height={400}
        alt="blob1"
      />
    </div>
  );
};

export default Blob1;
