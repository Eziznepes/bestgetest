import React, { useEffect, useRef, useState } from "react";
import { chevronBottom } from "./SVG";

const CustomSelect = ({
  selected = null,
  list,
  key = null,
  onChange,
  type = null,
}) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item) => {
    setCurrentSelected(item);
    if (onChange) onChange(item, type);

    setActive(false);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setCurrentList(
      !currentSelected
        ? list
        : list.filter((item) => {
            let compareKey = key ?? "value";
            return item[compareKey] !== currentSelected[compareKey];
          })
    );
  }, [list, currentSelected]);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div className={`customSelect ${active ? "active " : ""}`} ref={wrapper}>
      <div className="customSelect__selected" onClick={toggleActive}>
        {currentSelected?.image && (
          <img src={currentSelected.image} alt="flag" />
        )}
        {currentSelected ? currentSelected.value : "-----"}
        {chevronBottom}
      </div>
      <div className="customSelect__options active">
        {currentList.map((item, index) => (
          <div
            className="customSelect__options-item"
            key={index}
            onClick={() => onClick(item)}
          >
            {item.image && <img src={item.image} alt="flag" />}
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
