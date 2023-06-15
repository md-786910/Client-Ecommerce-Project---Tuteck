import React from "react";
import { FadeLoader } from "react-spinners";

function Loader({ loader = false }) {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(5px)",
          webkitBbackdropackdropFilter: "blur(5px)",
        }}
      >
        <FadeLoader
          color="#a6c76c"
          height={20}
          loading={loader}
          speedMultiplier={1}
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}

export default Loader;
