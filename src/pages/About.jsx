import * as React from "react";
import Avatar from "@mui/material/Avatar";
import brian from "../assets/brian.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"


const About = () => {
  return (
    <div className="about">
    <div className="about-container">
         <Avatar
          alt="Brian Kane"
          src={brian}
          sx={{height:"400px", width:"400px", boxShadow: "4px 2px 6px 2px #D8EBF2"}}
          className="profile-pic"

        />
      
      <h1>Brian Kane</h1>
      <h3>Frontend Developer</h3>
      <h3>briankane0634@gmail.com</h3>
      <div className="links">
        <a href="https://www.linkedin.com/in/arif-kilinc/"><img src={linkedin} alt="" /> Linkedln Profile</a>
        <a href="https://github.com/pathfinder3446"><img src={github} alt="" /> Github Page</a>    
      </div>
      <p>
      +2 years experienced in IT and an expert in developing front-end and back-end website architecture and designing user interactions on web pages. Dynamic Full Stack Software Developer with both front end and back end programming languages skills, developing complex solutions, processing strong creative thinking skills, highly energetic and integrated with strong troubleshooting abilities. Proficient in developing and designing front-end web architecture, application development, ensuring the responsiveness of application and working alongside graphic designers for web design features, building efficient, scalable and maintainable code and user-friendly UI/UX. Creating server and database for website functionality, ensuring cross-platform mobile optimization. Working with APIs and technical documentation. Focusing both on technical and consumer needs to bring up the final Product. Have the ability to create algorithms effectively and communicate appropriately with team members. Quick to grasp new technologies and concepts to develop innovative and creative solutions to problems. Always eager to learn various technologies, tools and libraries. Especially interested in HTML-CSS-JS, ReactJs and Django.
<br />
<h4>TECHNICAL SKILLS</h4>
HTML5 | CSS3 | JavaScript | React.js | Redux | SASS | Bootstrap | Material.UI | Python | Linux | SQL | PostgreSQL | MongoDB | Express.js | Node.js | Django | Git | GitHub | APIs | Agile | Jira | SDLC | OOP | RESTful APIs.
<br />
<h4>SOFT SKILLS</h4>
Analytical Thinking | Problem-Solving Abilities | Self-Motivated | Strong Communication | Project Management | Ability to Manage Multiple Concurrent Deadlines | Planning | Time Management | Adaptability | Continuous Learning | Collaboration & Teamwork | Coaching Mindset | Resilience | Curiosity | Emotional Intelligence | Creativity.
      </p>
    </div>
  </div>
  )
}

export default About