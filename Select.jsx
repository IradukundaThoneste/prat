import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Select() {
  const [manager, setManager] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/select")
      .then((res) => {
        setManager(res.data);
      })
      .catch((err) => {
        console.log("Fetch failed", err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2000/delete/${id}`)
      .then(() => {
        alert("User deleted");
        setManager(prev => prev.filter(user => user.id !== id)); // update UI
      })
      .catch((err) => {
        console.log("Delete failed", err);
      });
  };

  return (<>
    <Link to="/insert" className="btn btn-primary">Add New Manager</Link>
    <table border={2} className="table table-striped table-bordered">
   
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>password</th>
          <th colSpan={2}>Operation</th>
        </tr>
      </thead>
      <tbody>
        {manager.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.password}</td>
            <td>
              <button onClick={() => handleDelete(data.id)} className="btn btn-info">Delete</button>
              &nbsp;
              <Link to={`/update/${data.id}`} className="btn btn-success">Update</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Select;
