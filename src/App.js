import React from "react";
import "./App.css";

const projects = [
  {
    title: "LLM-Powered Cosmetic Safety Validator",
    company: "Hitachi Digital Services",
    period: "Jan 2025–Present",
    tech: "React Native, FastAPI, EC2, AWS RDS, state of the art LLMs, Docker, Kubernetes, Prometheus/Grafana, OCR, Ansible, Terraform, MLOps",
    highlights: [
      "93.04% accuracy with LLM-as-a-judge methodology",
      "Mobile app with OCR for real-time safety insights",
      "CI/CD and MLOps deployment with Prometheus monitoring"
    ]
  },
  {
    title: "Enterprise ETL Pipeline for ML Forecasting",
    company: "Hitachi Digital Services",
    period: "June 2023-Jan 2025",
    tech: "Fivetran, dbt, Google BigQuery, Apache Airflow, React, Redux, Nodejs, Batch Systems, ETL pipelines",
    highlights: [
      "Auto-synced data ingestion with schema mapping",
      "Airflow workflows with monitoring and alerting", 
      "Data collected eventually used for sales forecasting via ML models"
    ]
  },
  {
    title: "VS Code Extensions for SAP DevOps",
    company: "SAP Labs",
    period: "June 2022–June 2023",
    tech: "React/Redux, Typescript, Node.js, Docker, Jenkins, MS Azure",
    highlights: [
      "Improved SAP Guided Development for 1M+ users",
      "Created tutorial discovery extension",
      "Integrated telemetry for UX insights"
    ]
  },
  {
    title: "Pacific Ocean Phosphate Analysis Platform",
    company: "San Jose State University",
    period: "2021–2022",
    tech: "WebSockets, Docker, AWS (RDS, Aurora, Lambda)",
    highlights: [
      "Sensor data collection via Raspberry Pi",
      "Dockerized RESTful backend",
      "Event-driven AWS architecture"
    ]
  },
  {
    title: "SAP Integration for Oil Industry Collaboration",
    company: "Infosys Ltd",
    period: "2019–2021",
    tech: "SAP, Microsoft Teams, ABAP",
    highlights: [
      "Boosted team throughput by 15%",
      "Reduced delays by 40%",
      "Won Infosys Ace Award"
    ]
  }
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Aakanksha Gupta</h1>
        <p>Senior Software Engineer | San Jose, CA</p>
        <p>
          <a href="mailto:gupta.aakanksha123@gmail.com">gupta.aakanksha123@gmail.com</a> |{" "}
          <a href="https://www.linkedin.com/in/eraakankshagupta" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> |{" "}
          <a href="+1 669-285-7268">
            +1 669-285-7268
          </a>
        </p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a results-driven Software Engineer with over 7 years of experience in backend development, system architecture,
          and machine learning infrastructure. My core mission is to bridge the gap between prototype and production, ensuring
          robust, scalable, and reliable software systems.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="subtitle">{project.company} • {project.period}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <ul>
              {project.highlights.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <p>You can download my resume <a target="_blank"
  rel="noopener noreferrer" href="/Aakanksha_Gupta_RESUME.pdf" download >here</a>.</p>
      </section>

      <footer className="footer">
        <p>© 2025 Aakanksha Gupta</p>
      </footer>
    </div>
  );
}

export default App;
