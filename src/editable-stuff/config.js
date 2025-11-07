// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff91c1, #9b59b6, #6c5ce7, #b2f5ea",
  firstName: "Lauren",
  middleName: "",
  lastName: "Miller",
  message: " Passionate about data.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Laumillerren",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lauren-miller-999263171/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/LMiller_photo.jpeg"),
  imageSize: 375,
  message:
    "I am a data professional working as a Data Engineer at Aramark Sports + Entertainment",
  resume: require("../editable-stuff/LMiller Resume 2025.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Laumillerren", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/LMiller_photo.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/LMiller_photo.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "SQL", value: 75 },
    { name: "R", value: 50 },
    { name: "Extract, Transform, Load (ETL)", value: 50 },
    { name: "Snowflake", value: 50 },
    { name: "Databricks", value: 50 },
    { name: "Data Visualizations (Tableau/PowerBI)", value: 50 },
    { name: "Jupyter Notebooks & Google Colab", value: 100 },
    { name: "Git & Github", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Leadership", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Attention to Detail", value: 100 },
  ],
};
// certifications: [
//   { name: "Microsoft Azure Fundamentals", value: 100 },
//   { name: "Microsoft Azure Data Fundamentals", value: 100 },
//   { name: "Microsoft Azure AI Fundamentals", value: 100 },
//   { name: "Databricks Lakehouse Fundamentals ", value: 100 },
// ],
// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to to email me at",
  email: "lemilleredu@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Engineer',// Here Add Company Name
      companylogo: require('../assets/img/aramarkse-logo.jpeg'),
      date: 'March 2025 – Present',
    },
    {
      role: 'Senior Data Analyst',// Here Add Company Name
      companylogo: require('../assets/img/drexel-logo.png'),
      date: 'September 2023 – March 2025',
    },
    {
      role: 'Data Engineering Intern',
      companylogo: require('../assets/img/avanade-logo.png'),
      date: 'May 2024 – July 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
