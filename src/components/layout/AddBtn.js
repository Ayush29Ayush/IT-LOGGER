import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 model-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
          <li>
              <a href="#tech-list-modal" className="btn-floating green modal-trigger"></a>
              <i className="material-icons">person</i>
          </li>
          <li>
              <a href="#tech-modal" className="btn-floating red modal-trigger"></a>
              <i className="material-icons">person_add</i>
          </li>
      </ul>
    </div>
  );
};

export default AddBtn;
