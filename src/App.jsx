import react from "react";
import { useState } from "react";
import "./App.css";

let studentArray = [];

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");
  const [rollNo, setRollNo] = useState("");

  const addStudent = () => {
    let stdata = {
      userName,
      email,
      userClass,
      rollNo,
    };
    studentArray.push(stdata);
    console.log(studentArray);
  };

  return (
    <div className="App">
      <h1>Students' form</h1>
      <div className="Form">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="InnerForm">
          <input
            type="text"
            placeholder="Class"
            onChange={(e) => {
              setUserClass(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Roll No."
            onChange={(e) => {
              setRollNo(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={addStudent}>
          Submit
        </button>
      </div>
      <table className="Table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No.</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {studentArray.map((value, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{value.userName}</td>
                <td>{value.email}</td>
                <td>{value.userClass}</td>
                <td>{value.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
