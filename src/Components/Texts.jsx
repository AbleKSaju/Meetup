import React, { useState } from "react";
import Confirmation from "./confirmation";

function Texts() {
  const [dlt, setDlt] = useState(false);

  const deleteConfirmation = () => {
    console.log("Clickkkkk");
    setDlt(true);
  };
  const cancelDlt = (status) => {
    setDlt(status);
  };
  const confirmDlt = () => {

  };
  const data = ["Hello", "Hello1", "Hello2", "Hello3", "Hello4"];
  return (
    <div className="container mt-3 pb-3 ">
      {data.map((val,index) => (
        <>
          <p className="bg-success">
            {val} &nbsp;{" "}
            <button className="bg-danger" onClick={deleteConfirmation}>
              delete
            </button>
          </p>
          <br />
        </>
      ))}
            {dlt && <Confirmation cancelDlt={cancelDlt} confirmDlt={confirmDlt} />}

    </div>
  );
}

export default Texts;
