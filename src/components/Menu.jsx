import { useState } from "react";
import { img_Url } from "../Constants";

const Menu = ({ menu }) => {
  const [expandedSection, setExpandedSection] = useState(null); // Track the currently expanded section

  const toggleSection = (index) => {
    setExpandedSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div id="menu-container">
        <div className="menu">
          {menu.map((section, sectionIndex) => (
            <>
            <div id="div1" key={sectionIndex}>
              {sectionIndex >= 2 ? (<>
                <h2
                  id="menustart"
                  onClick={() => toggleSection(sectionIndex)}
                  style={{ cursor: "pointer" }}
                >
                {section?.card?.card?.title}
                </h2></>
              ) : null}
              {expandedSection === sectionIndex && (
                <div id="div2">
                  {section?.card?.card?.itemCards?.map((item, itemIndex) => (
                    <div
                      className="menu-section"
                      key={`${sectionIndex}-${itemIndex}`}
                    >
                      <div id="left">
                        <p className="menuinfo">{item?.card?.info?.name}</p>
                        <p className="menuinfo">
                        ₹
                          {item?.card?.info?.defaultPrice/100}
                        </p>
                        <p id="description" className="menuinfo">
                          {item?.card?.info?.description}
                        </p>
                      </div>
                      <div id="right">
                        <div className="imgcontain">
                        <img
                          id="menuimg"
                          src={img_Url + item?.card?.info?.imageId}
                          alt={item?.card?.info?.name || "Menu item"}
                        />
                        <button className="overlay">Add</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
