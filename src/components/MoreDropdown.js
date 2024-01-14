import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";

const MoreDropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-ellipsis-vertical"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdownMenu = ({handleEdit, handleDelete}) => {
  return (
    <Dropdown drop="left" className={styles.MoreDropdownIcon}>
      <Dropdown.Toggle as={MoreDropdownIcon} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fa-regular fa-trash-can"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
