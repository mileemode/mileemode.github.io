import React from "react";
import "./App.css";

export default function App() {
  return (
    <div style={{ fontFamily: "Poppins, Arial, sans-serif", backgroundColor: "#f7f9fc", color: "#333", lineHeight: "1.6" }}>
      {/* ===== Header ===== */}
      <header style={{ backgroundColor: "#023e8a", color: "#fff", textAlign: "center", padding: "30px 0", borderBottom: "4px solid #0096c7" }}>
        <h1 style={{ fontSize: "2.2em", marginBottom: "5px" }}>Ms. Milee Mode</h1>
        <p>📞 0449 966 429 | 📧 <a href="mailto:modemilee@gmail.com" style={{ color: "#fff", textDecoration: "underline" }}>modemilee@gmail.com</a></p>
        <p>💼 <a href="#" style={{ color: "#90e0ef" }} target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><em>Results-oriented PHP Developer experienced in full-stack web development using PHP, Laravel, WordPress, and MySQL.</em></p>
      </header>

      {/* ===== Main Container ===== */}
      <div style={{ width: "90%", maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        
        {/* ===== Professional Summary ===== */}
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>Professional Summary</h2>
          <p>
            Skilled in building scalable web applications, customizing CMS platforms, and optimizing database performance. 
            Proficient in MVC architecture, RESTful API integration, and Git-based version control. 
            Experienced in agile environments, debugging, and collaborating with cross-functional teams 
            to deliver secure and efficient solutions.
          </p>
        </section>

        {/* ===== Key Skills ===== */}
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>Key Skills</h2>
          <div style={skillsContainer}>
            {[
              "PHP", "Laravel", "WordPress", "HTML", "CSS", "JavaScript",
              "MySQL", "RESTful APIs", "Bootstrap", "SharePoint", "Git",
              "AWS", "Jira", "Asana"
            ].map(skill => (
              <span key={skill} style={skillStyle}>{skill}</span>
            ))}
          </div>
        </section>

        {/* ===== Professional Experience ===== */}
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>Professional Experience</h2>

          <Job
            title="Software Technician | Myfone Repairs, Australia"
            period="Mar 2025 - Present"
            points={[
              "Maintain and enhance internal WordPress website 'BigM.'",
              "Perform updates, backups, and troubleshoot technical issues.",
              "Develop automation dashboards for tracking and visibility.",
              "Provide IT support ensuring efficient digital operations."
            ]}
          />

          <Job
            title="Software Engineer | Kesar Creative, India"
            period="Aug 2018 – Feb 2023"
            points={[
              "Developed responsive web applications using PHP, Laravel, and WordPress.",
              "Created custom plugins and APIs to enhance site functionality.",
              "Optimized MySQL databases for performance and scalability.",
              "Led code reviews and mentored junior developers.",
              "Delivered scalable e-commerce and CMS platforms with strong UX."
            ]}
          />

          <Job
            title="Software Engineer Intern | Tech Mahindra, Australia"
            period="Oct 2024 – Mar 2025"
            points={[
              "Supported backend development using PHP, Laravel, and MySQL.",
              "Customized open-source CMS platforms like WordPress.",
              "Assisted in debugging and documentation of system architecture."
            ]}
          />

          <Job
            title="Junior Project Manager Intern | ONcall Language Services, Australia"
            period="Jul 2024 – Sep 2024"
            points={[
              "Led HR and policy automation projects using SharePoint and Power Automate.",
              "Developed HR policies and workflows reducing manual tasks by 30%."
            ]}
          />
        </section>

        {/* ===== Education ===== */}
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>Education</h2>
          <ul>
            <li>Master of Project Management - Central Queensland University (2024)</li>
            <li>Master of Computer Engineering - Silver Oak College of Engineering and Technology (2018)</li>
            <li>Bachelor of Computer Engineering - Ahmedabad Institute of Technology (2015)</li>
          </ul>
        </section>

        {/* ===== Key Achievements ===== */}
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>Key Achievements</h2>
          <ul>
            <li>Received appreciation letter from ONcall Language Services for workflow automation contributions (2024).</li>
            <li>Awarded Appreciation Letter from Kesar Creative for outstanding development work (2021).</li>
            <li>Won “Best Project Idea” award at Ahmedabad Institute of Technology (2014).</li>
          </ul>
        </section>
      </div>

      {/* ===== Footer ===== */}
      <footer style={{ textAlign: "center", padding: "15px 0", background: "#023e8a", color: "#fff", fontSize: "0.9em" }}>
        © 2026 Milee Mode | PHP Developer Portfolio
      </footer>
    </div>
  );
}

/* ===== Helper Components & Styles ===== */
const sectionStyle = {
  background: "#fff",
  padding: "25px",
  margin: "20px 0",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const sectionTitle = {
  color: "#0077b6",
  borderBottom: "2px solid #90e0ef",
  paddingBottom: "8px",
  marginBottom: "15px"
};

const skillsContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px"
};

const skillStyle = {
  backgroundColor: "#e0f7fa",
  color: "#00796b",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "0.9em",
  fontWeight: "500"
};

function Job({ title, period, points }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ color: "#03045e", marginBottom: "5px" }}>{title}</h3>
      <h4 style={{ fontWeight: "normal", color: "#555", margin: "0 0 10px" }}>{period}</h4>
      <ul style={{ margin: 0, paddingLeft: "20px" }}>
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
