import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      // if dropedown component has been removed
      // also remove ref to it
      if (!divEl.current) {
        return;
      }
      // if user clicks beside dropdown, it will close
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      //cleanup function,
      //if no dropdown then remove listener
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    // new value is depending on old value:
    // functional update of state
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOption = (option) => {
    setIsOpen(false);
    onChange(option); // pass which option was selected to parent component
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOption(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    // show Select... by default,
    // if selection is clicked, show it label
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
