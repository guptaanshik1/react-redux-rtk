import React, { createContext } from "react";
import ComB from "./comB";

const BioData = createContext();

const ComA = () => {
  return (
    <BioData.Provider value={"Anshik"}>
      <ComB />
    </BioData.Provider>
  );
};

export { BioData }
export default ComA;