/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import unityIcon from "./assets/images/icons/unity.svg"
import csIcon from "./assets/images/icons/cs.svg"
import cIcon from "./assets/images/icons/c.svg"
import cppIcon from "./assets/images/icons/cpp.svg"
import unrealIcon from "./assets/images/icons/unreal.svg"
import mongodbIcon from "./assets/images/icons/mongodb.svg"
import pythonIcon from  "./assets/images/icons/python.svg"
import blenderIcon from  "./assets/images/icons/blender.svg"
import javascriptIcon from  "./assets/images/icons/javascript.svg"

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Agnese Serafino",
  title: "Hi everybody, I'm Agnese",
  subTitle: emoji("I am a passionate game developer and VR/XR developer. I have experience using game engines like Unity and programming languages such as C, C#, C++, Java, Python"),
  resumeLink: "./assets/CV-english.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/agn-ese",
  linkedin: "https://www.linkedin.com/in/agnese-serafino/",
  gmail: "agnese1999@live.com",
  itch: "https://agn-ese.itch.io/",
  display: true // Set true to display this section, defaults to false
};



// Skills Section

const skillsSection = {
  title: "What I can do",
  subTitle: "Game developer | XR/VR developer",
  skills: [
    emoji(
      "⚡ Develop fun, interactive and efficient games"
    ),
    emoji("⚡ Always up to date with the latest news about VR technologies"),
    emoji(
      "⚡ Always bring the best attitude"
    )
  ],



  softwareSkills: [
  {

        skillName: "Unity",
        icon: unityIcon // Use imported SVG
  },
  {
        skillName: "C#",
        icon: csIcon // Use imported SVG
  },
  {
        skillName: "Blender",
        icon: blenderIcon // Use imported SVG
  },
  {
        skillName: "C++",
        icon: cppIcon // Use imported SVG
  },
  {
        skillName: "Blender",
        icon: blenderIcon // Use imported SVG
  },
  {
        skillName: "Unreal Engine",
        icon: unrealIcon // Use imported SVG
  },
  {
        skillName: "C",
        icon: cIcon // Use imported SVG
  },
  {
        skillName: "MongoDB",
        icon: mongodbIcon // Use imported SVG
  },
  {
        skillName: "Python",
        icon: pythonIcon // Use imported SVG
  },
  {
      skillName: "javascript",
      icon: javascriptIcon
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politecnico di Torino",
      logo: require("./assets/images/politecnicoditorino.png"),
      subHeader: "Master of Science in Computer Engineering with focus on graphics and multimedia",
      duration: "March 2022 - December 2024",
      descBullets: [
        "Developed a few games in Unity 3D both for VR and computer",
        "Learned programming languages like C#, C++, Python",
        "Created a simple game in ARM programming language",
        "Used MongoDB for SQL",
        "Created a mini game using openGL",
        "Created multiple 3D models and animations using Blender",
        "Learned software engineering skills and JavaScript"
      ]
    },
    {
      schoolName: "Politecnico di Torino",
      logo: require("./assets/images/politecnicoditorino.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2018 - March 2022",
      descBullets: [
          "Learned advanced programming in C and optimization algorithms and Java",
          "Introduced concepts of computer architectures",
          "Made a static website using php and javascript"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Unreal Engine",
      progressPercentage: "30%"
    },
    {
      Stack: "C, C#, C++ programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Blender",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Game developer",
      company: "LevelUpLab",
      companylogo: require("./assets/images/leveluplab.jpg"),
      date: "March 2024 – Present",
      desc: "We are a student team from the Polytechnic University of Turin with the primary goal of developing video games! Playing is no longer enough; we want to create unique experiences together and get an in-depth look at this amazing industry.We create video game prototypes, organize workshops with professionals, and offer a mentoring program, but that's not all! We also organize events dedicated to socializing, to build friendships and expand our network in the video game industry.Our dream is to build a community of video game enthusiasts, creating an inclusive and healthy learning and working environment.",
      descBullets: [
        "Built Theroon studios and developed Elemhands, a VR Game that will be presented during Milan Games Week 2024",
      ]
    },
    {
      role: "Front-End Developer intern",
      company: "Mediasoft SRL",
      companylogo: require("./assets/images/mediasoft.png"),
      date: "January 2018 – May 2018",
      desc: "I did an internship at Mediasoft where I developed the front-end of a website using JavaScript"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "This is just the beginning of what I could do, let's talk and see if I can help you achieve your goals'",
  number: "+39 3803642386",
  email_address: "agnese1999@live.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
  isHireable,
  resumeSection
};
