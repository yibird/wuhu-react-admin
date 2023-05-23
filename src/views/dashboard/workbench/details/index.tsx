import React from "react";
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";
const Details: React.FC<{}> = () => {
  return (
    <div className="flex justify-between bg-white px-20 py-20 mb-10">
      <DetailsLeft />
      <DetailsRight />
    </div>
  );
};
export default Details;
