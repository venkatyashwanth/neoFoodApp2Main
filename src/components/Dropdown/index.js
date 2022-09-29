import "./index.css";
import { AiFillCaretDown } from "react-icons/ai";
import React, { useState } from "react";

const options = [
  {
    country: "Australia",
    flag: "./media/flagAus.png",
  },
  {
    country: "China",
    flag: "./media/flagChina.png",
  },
  {
    country: "England",
    flag: "./media/flagEng.png",
  },
  {
    country: "India",
    flag: "./media/flagIndia.png",
  },
  {
    country: "USA",
    flag: "./media/flagUSA.png",
  },
  {
    country: "UK",
    flag: "./media/flagUK.png",
  },
];

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(`Choose One`);

  const [flag, setFlag] = useState("");

  const handleDropMenu = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleDropItem = (e) => {
    setSelected(e.target.textContent);

    const flagOption = options.filter(getFlag);

    function getFlag(option) {
      return option.country === e.target.textContent;
    }

    setFlag(flagOption[0].flag);
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={handleDropMenu}>
          <div className="displayContentProp">
            {selected === "Choose One" ? (
              <>
                <p>{selected}</p>
              </>
            ) : (
              <>
                  <img src={flag} alt={selected} />
                  <p>{selected}</p>
              </>
            )}
          </div>
          <AiFillCaretDown />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {React.Children.toArray(
              options.map((option) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleDropItem(e)}
                >
                  <div className="dropDownItemStyle">
                    <img
                      src={option.flag}
                      alt="india"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <p>{option.country}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
