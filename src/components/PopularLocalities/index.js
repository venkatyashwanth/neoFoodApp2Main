import "./index.css";
import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
// 

const localities = [
  {
    place: "Lower Parel",
    branches: 70,
  },
  {
    place: "Powai",
    branhes: 923,
  },
  {
    place: "Malad West",
    branches: 923,
  },
  {
    place: "Borivali West",
    branches: 1000,
  },
  {
    place: "Bandra Kural Complex",
    branches: 350,
  },
  {
    place: "Vasai",
    branches: 20,
  },
  {
    place: "Juhu",
    branches: 200,
  },
  {
    place: "Girgaon Chowpatty",
    branches: 160,
  },
];

export const PopularLocalities = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreLocalities = () => {
    setShowMore((showMore) => !showMore);
  };
  return (
    <>
      <div className="popularSection">
        <h2>
          Popular localities in and around <span>Mumbai</span>
        </h2>
        <div className="locatilyCardContainer">
          {showMore ? (
            <>
              {React.Children.toArray(
                localities.map((item) => (
                  <div className="localityCard d-flex align-items-center justify-content-between shadow-sm">
                    <div>
                      <h3>{item.place}</h3>
                      <p>{item.branches} places</p>
                    </div>
                    <div className="iconRight">
                      <GoChevronRight />
                    </div>
                  </div>
                ))
              )}
            </>
          ) : (
            <>
              {React.Children.toArray(
                localities.slice(0, 2).map((item) => (
                  <div className="localityCard d-flex align-items-center justify-content-between shadow">
                    <div>
                      <h3>{item.place}</h3>
                      <p>{item.branches} places</p>
                    </div>
                    <div className="iconRight">
                      <GoChevronRight />
                    </div>
                  </div>
                ))
              )}
            </>
          )}
          <div className="localityCard localityCard1 align-items-center shadow">
            <div onClick={showMoreLocalities} className="d-flex justify-content-center align-items-center h-100" style={{cursor: "pointer"}}>
              <h3 >
                {showMore ? "See Less" : "See More"}
              </h3>
              <div className="ms-3 pb-3">
                {showMore? <IoIosArrowUp/>: <BsChevronDown />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
