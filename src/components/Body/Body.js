import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <h4>IMAGE</h4>
        </div>
        <div className="col-3">
          <h4 className="employeeName" onClick={props.handleSortChange}>
            NAME
          </h4>
        </div>
        <div className="col-2">
          <h4>PHONE</h4>
        </div>
        <div className="col-3">
          <h4>EMAIL</h4>
        </div>
        <div className="col-2">
          <h4>DOB</h4>
        </div>
      </div>

      <div className="employeeList">
        {props.employeeInfo.map((employee) => (
          <div className="row employeeListTest" key={employee.email}>
            <img className="col-2" src={employee.picture.thumbnail}></img>
            <div className="col-3 text-break">
              {employee.name.first} {employee.name.last}
            </div>
            <div className="col-2 text-break">{employee.phone}</div>
            <div className="col-3 text-break">{employee.email}</div>
            <div className="col-2 text-break">
              {employee.dob.date.substring(0, 10)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
