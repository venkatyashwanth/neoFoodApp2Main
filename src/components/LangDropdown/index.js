import "./index.css";
import { AiFillCaretDown } from "react-icons/ai";
import React, { useState } from "react";

const options = [
  {
    language: "English"
  },
  {
    language: "Hindi"
  },
  {
    language: "Telugu"
  },
  {
    language: "Kannada"
  },
  {
    language: "Malayalam"
  },
  {
    language: "Tamil"
  }
];

const LanguageDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(`English`);

  const handleDropMenu = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleDropItem = (e) => {
    setSelected(e.target.textContent);
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <div className="dropdown ms-4">
        <div className="dropdown-btn" onClick={handleDropMenu}>
          <div className="displayContent">
            <img src="./media/languageImg.png" alt="lang" />
            <p>{selected}</p>
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
                    <p>{option.language}</p>
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

export default LanguageDropdown;