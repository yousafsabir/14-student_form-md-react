import react from "react";
import { useState } from "react";
import "./App.css";

// let studentArray = [];

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentArray, setStudentArray] = useState([]);
  const [theArray, setTheArray] = useState([]);

  const addStudent = () => {
    let stdata = {
      userName,
      email,
      userClass,
      rollNo,
    };
    // setStudentArray.push(stdata);
    if (userName.length == 0 || email.length == 0 || userClass.length == 0 || rollNo.length == 0) {
      alert("Please fill all the fields");
    }
    
     else {
      if (studentArray.length == 0) {
        if (email.includes("@") && email.includes(".")) {
          setStudentArray([...studentArray, stdata]);}
           else {
             alert("Invalid Email");
           }
      }
      else {
       studentArray.map((value) => {
         console.log(value);
         if (userName==value.userName ) {
          alert("UserName already exists");
        } 
        else if (email==value.email) {
          alert("Email already exists");
        }
        else {
          if (email.includes("@") && email.includes(".")) {
         setStudentArray([...studentArray, stdata]);}
          else {
            alert("Invalid Email");
          }}
    });
    }}
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
                <td key="{index + 1}">{index + 1}</td>
                <td key="{value.userName}">{value.userName}</td>
                <td key="{value.email}">{value.email}</td>
                <td key="{value.userClass}">{value.userClass}</td>
                <td key="{value.rollNo}">{value.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
