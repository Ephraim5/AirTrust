import React from "react";
import { PuffLoader } from "react-spinners";

const LoadingIndicator = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "b;ue",
  };

  return (
    <div
      style={{
        display: loading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow:'hidden',
      }}
      className="bg-slate-900"
    >
      <PuffLoader
        color="#1e40af" 
        loading={loading}
        cssOverride={override}
        size={50} 
        speedMultiplier={1.8} 
      >
      </PuffLoader>
    </div>
  );
};

export default LoadingIndicator;
