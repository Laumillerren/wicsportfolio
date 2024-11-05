// import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

// function SkillsBar({ skill, value, isScrolled }) {
//   return (
//     <div style={{ width: "95%" }}>
//       <p className="lead mb-1 mt-2">{skill}</p>
//       <ProgressBar
//         className={!isScrolled ? "progress" : " progress-bar-animation"}
//         now={value}
//       />
//     </div>
//   );
// }

// export default SkillsBar;

import React from "react";
import Card from "react-bootstrap/Card";
import './SkillsBar.css'; // Optional: custom CSS for further styling

function SkillsBar({ skill }) {
  return (
    <Card className="skill-card mb-3">
      <Card.Body className="text-center">
        <p className="lead mb-0">{skill}</p>
      </Card.Body>
    </Card>
  );
}

export default SkillsBar;