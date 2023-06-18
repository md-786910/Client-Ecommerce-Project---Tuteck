import React from "react";
import { BeatLoader } from "react-spinners";

function BtnLoader({ loader = true }) {
  return (
    <>
      <BeatLoader
        color="#a6c76c"
        loading={loader}
        size={10}
        speedMultiplier={1}
      />
    </>
  );
}

export default BtnLoader;
