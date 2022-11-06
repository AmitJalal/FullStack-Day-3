import { useState } from "react";
import "./todo.css";

const Add = () => {
  return <div className="addnew-container">
   new

  </div>;
};

const AddNew = () => {
  const [addnew, setAddnew] = useState(false);
  return (
    <>
      <div className="addnew-container">
        {addnew ? (
          <Add />
        ) : (
          <button className="add-new" onClick={() => setAddnew(!addnew)}>
            AddNew
          </button>
        )}
      </div>
    </>
  );
};
export default AddNew;
