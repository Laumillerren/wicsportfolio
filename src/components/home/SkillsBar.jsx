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

function SkillsBar({ skill }) {
  return (
    <div className="skill-item">
      <p className="lead mb-1 mt-2">{skill}</p>
    </div>
  );
}

export default SkillsBar;