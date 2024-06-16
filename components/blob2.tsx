import Image from "next/image";
import React from "react";
import blob2 from "@/assets/blob2.svg";
const Blob2 = () => {
  return (
    <div className="fixed bottom-0 right-0  overflow-hidden -z-50 opacity-50" style={{"zIndex":"-50"}}>
      <Image
        src={blob2}
        aria-hidden="true"
        width={400}
        priority
        height={400}
        alt="blob2"
      />
    </div>
  );
};

export default Blob2;
