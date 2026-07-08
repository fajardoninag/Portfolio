import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

const EXPERIENCE = [
  {
    no: '01',
    role: 'IT Support Intern',
    company: 'Hong JKH Trading Enterprises Inc. — AORUS Concept Store',
    period: 'July — September 2026',
    location: 'Philippines',
    desc: 'Reformatted laptops and personal computers, installed operating systems and software applications, and performed computer assembly, maintenance, and troubleshooting.',
    tags: ['Hardware Troubleshooting', 'OS Installation', 'PC Assembly & Maintenance'],
  },
  {
    no: '02',
    role: 'Quality Assurance Intern',
    company: 'DOST Science Education Institute',
    period: 'July — September 2025',
    location: 'Philippines',
    desc: 'Created system design specifications and test cases, conducted system testing and validation, and assisted in software development documentation.',
    tags: ['System Design', 'Software Testing', 'Technical Documentation'],
  },
];

// NOTE: image paths point to files directly under /public/images/ (matching
// your current folder). "grad-school-research-management.png" and
// "thesis-management-tracking-system.png" don't exist in your screenshot yet —
// add those two files to /public/images/ or swap in whatever you name them.
const PROJECTS = [
  {
    no: '01',
    title: 'DepEd Data Dashboard',
    category: 'Data Analysis',
    desc: 'Assisted in cleaning, organizing, and transforming DepEd enrollment records for analysis. Developed a comprehensive data dictionary and generated visualizations to support data-driven insights. Collaborated on an interactive dashboard using Plotly and Dash, enabling users to filter and analyze data by gender, grade level, and enrollment counts.',
    tech: ['Python', 'Pandas', 'Plotly', 'Dash'],
    image: '/images/deped.png',
  },
  {
    no: '02',
    title: 'Exploratory Data Analysis',
    category: 'Data Analysis',
    desc: 'Performed exploratory data analysis on a suicide rate dataset by conducting data inspection, identifying data types, cleaning and preparing data, and creating visualizations to uncover patterns, trends, and key insights.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: '/images/data.png',
  },
  {
    no: '03',
    title: 'Health Center Patient Record Management System',
    category: 'UI/UX & Frontend',
    desc: 'Designed the system\u2019s user interface and user experience (UI/UX) using modern design principles. Developed frontend components and interfaces to improve usability and accessibility, and conducted quality assurance testing to identify and resolve system issues.',
    tech: ['UI/UX Design', 'Frontend Development', 'QA Testing'],
    image: '/images/espe.png',
  },
  {
    no: '04',
    title: 'Graduate School Research Management',
    category: 'UI/UX & Frontend',
    desc: 'Assisted in frontend development by implementing user interface components and pages. Collaborated with the development team to enhance system functionality and user experience, and supported testing and debugging activities to improve system performance.',
    tech: ['Frontend Development', 'Testing & Debugging'],
    image: '/images/thesis.png',
  },
  {
    no: '05',
    title: 'Thesis Management and Tracking System',
    category: 'UI/UX & Frontend',
    desc: 'Assisted in creating UI/UX designs and prototypes using Figma. Developed frontend pages and reusable components to support system functionality, and performed quality assurance testing to ensure system reliability and user satisfaction.',
    tech: ['Figma', 'UI/UX Design', 'Frontend Development'],
    image: '/images/grad.png',
  },
];

const stats = [
  { value: 'PUP-DOST', label: 'Scholar' },
  { value: 'CpE', label: 'Computer Engineering, Big Data Analytics' },
  { value: '2026', label: 'Expected graduation' },
];

const skills = {
  'Data Analytics': ['Data Cleaning', 'Data Visualization', 'Data Validation', 'Dashboard Development', 'Quality Assurance'],
  'Business Intelligence': ['Power Query', 'Tableau', 'Power BI'],
  'Tools and Libraries': ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'PySpark', 'Plotly', 'Dash'],
  'Full Stack Development': ['Laravel', 'Django', 'HTML', 'CSS', 'Python', 'JavaScript', 'React.js', 'TypeScript', 'Vite'],
  'Database Management': ['SQL', 'Excel', 'Schema Design', 'CRUD Operations'],
  'Version Control': ['Git', 'GitHub'],
};

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site">
      {/* Nav */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <button key={link} className="nav-link-btn" onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Hero / About */}
        <section id="about" className="about-section">
          <div className="hero-top">
            <div className="hero-intro">
              <div className="name-row">
                <img src="/images/profile.jpg" alt="Niña Fajardo" className="profile-pic" />
                <div>
                  <div className="eyebrow">web Designer &amp; Data Analyst — Manila, PH</div>
                  <h1 className="hero-title">
                    Niña<br />
                    <em>Fajardo.</em>
                  </h1>
                </div>
              </div>
              <p className="hero-desc">
                A computer engineering graduate seeking a challenging career with a progressive
                organization that provides an opportunity to each individual growth.
              </p>
              <div className="social-links">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ninagfajardo@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
                <a href="https://github.com/fajardoninag" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/nina-fajardo" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-side">
              <div className="status-pill">
                <span className="status-dot">
                  <span className="ping" />
                  <span className="dot" />
                </span>
                <span>Open to work</span>
              </div>
            </div>
          </div>

          <div className="stats-bar">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="numbered-section">
          <div className="section-label">
            <div className="section-index">§ 02</div>
            <h2>Internship Experience</h2>
          </div>
          <div className="section-body">
            {EXPERIENCE.map((job) => (
              <div key={job.no} className="experience-row">
                <div className="experience-header">
                  <div>
                    <div className="project-meta">{job.period} · {job.location}</div>
                    <h3 className="experience-role">{job.role}</h3>
                    <div className="experience-company">{job.company}</div>
                  </div>
                  <div className="experience-no">{job.no}</div>
                </div>
                <p className="experience-desc">{job.desc}</p>
                <div className="tech-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="numbered-section">
          <div className="section-label">
            <div className="section-index">§ 03</div>
            <h2>Major Projects</h2>
          </div>
          <div className="section-body">
            {PROJECTS.map((project) => {
              const isOpen = openProject === project.no;
              return (
                <div key={project.no} className="project-accordion-row">
                  <button
                    type="button"
                    className="project-accordion-toggle"
                    onClick={() => setOpenProject(isOpen ? null : project.no)}
                    aria-expanded={isOpen}
                  >
                    <div className="experience-header">
                      <div>
                        <div className="project-meta">{project.category}</div>
                        <h3 className={`project-accordion-title ${isOpen ? 'is-open' : ''}`}>
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className={`project-accordion-arrow ${isOpen ? 'is-open' : ''}`}
                      />
                    </div>
                    <p className="experience-desc">{project.desc}</p>
                  </button>

                  <div className={`project-accordion-panel ${isOpen ? 'is-open' : ''}`}>
                    {project.image && (
                      <div className="project-image-wrap">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div className="skill-category">{category}</div>
                <div className="tech-tags">
                  {items.map((item) => (
                    <span key={item} className="tech-tag skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="section-label">
            <div className="section-index light">§ 05</div>
            <h2>Contact</h2>
          </div>
          <div>
            <p className="contact-desc">
              I'm looking for internship and junior developer opportunities. If you're building
              something meaningful, I'd genuinely love to hear about it.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ninagfajardo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email"
            >
              ninagfajardo@gmail.com →
            </a>
            <div className="contact-links">
              <a href="https://linkedin.com/in/niña-fajardo" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
              <a href="https://github.com/fajardoninag" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Niña Fajardo</span>
          <span>Manila, PH</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;