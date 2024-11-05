// import React from "react";
// import Col from "react-bootstrap/Col";
// import SkillsBar from "./SkillsBar";

// function SkillsSection({ skills, isScrolled }) {
//   return (
//     <>
//       {skills.map((skill, index) => (
//         <SkillsBar
//           key={`${skill}-${index}`}
//           skill={skill.name}
//           value={skill.value}
//           isScrolled={isScrolled}
//         />
//       ))}
//     </>
//   );
// }

// function SkillsTab({ skills, isScrolled }) {
//   return (
//     <>
//       <Col xs={12} md={6}>
//         <SkillsSection
//           skills={skills.slice(0, Math.floor(skills.length / 2))}
//           isScrolled={isScrolled}
//         />
//       </Col>
//       <Col xs={12} md={6}>
//         <SkillsSection
//           skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
//           isScrolled={isScrolled}
//         />
//       </Col>
//     </>
//   );
// }

// export default SkillsTab;

import React from "react";
import Col from "react-bootstrap/Col";

// Inner component: SkillsSection
function SkillsSection({ skills }) {
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <p className="lead mb-1 mt-2">{skill.name}</p>
        </div>
      ))}
    </>
  );
}

// Main component: SkillsTab
function SkillsTab({ skills }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
        />
      </Col>
    </>
  );
}

export default SkillsTab;