import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Timer", path: "/timer" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        activeClassName={"font-bold border-l-4 border-blue-500 pl-2"}
        className="mb-3"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
