import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">🎓 Student ID Cards</h1>

      <div className="card-container">
        <StudentCard 
          name="Mounika" 
          id="101" 
          course="B.Tech" 
          college="Bharat College"
          gender="female"
          address="Mangalpally, Telangana"
        />
        <StudentCard 
          name="Vivek" 
          id="102" 
          course="B.Tech" 
          college="Sree Dattha College"
          gender="male"
          address="Sheriguda, Telangana"
        />
      </div>
    </div>
  );
}

function StudentCard(props){
  const [name, setName] = useState(props.name);

  return (
    <div className="card">

      <div className="card-header">
        <h2>{props.college}</h2>
        <p>Student ID Card</p>
      </div>

      <div className="profile">
        <div className="avatar">
          {props.gender === "female" ? "👩‍🎓" : "👨‍🎓"}
        </div>
      </div>

      <div className="info">
        <p><strong>ID:</strong> {props.id}</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />

        <h3>{name}</h3>
        <p><strong>Course:</strong> {props.course}</p>
        <p><strong>Valid Till:</strong> 2028</p>
      </div>

      <div className="footer">
       <strong>College Address:</strong> {props.address}
      </div>

    </div>
  );
}

export default App;