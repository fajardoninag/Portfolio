import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const FigmaIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zM4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4zM4 4c0-2.21 1.79-4 4-4h4v8H8C5.79 8 4 6.21 4 4zM12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0zM20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
  </svg>
);

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

const EXPERIENCE = [
  {
    no: '1',
    role: 'IT Support Intern',
    company: 'Hong JKH Trading Enterprises Inc. — AORUS Concept Store',
    period: 'July — September 2025',
    location: 'Philippines',
    desc: 'Reformatted laptops and personal computers, installed operating systems and software applications, and performed computer assembly, maintenance, and troubleshooting.',
    tags: ['Hardware Troubleshooting', 'OS Installation', 'PC Assembly & Maintenance'],
  },
  {
    no: '2',
    role: 'Quality Assurance Intern',
    company: 'DOST Science Education Institute',
    period: 'July — September 2026',
    location: 'Philippines',
    desc: 'Created system design specifications and test cases, conducted system testing and validation, and assisted in software development documentation.',
    tags: ['System Design', 'Software Testing', 'Technical Documentation'],
  },
];

// NOTE: image paths point to files directly under /public/images/ (matching
// your current folder). "grad-school-research-management.png" and
// "thesis-management-tracking-system.png" don't exist in your screenshot yet —
// add those two files to /public/images/ or swap in whatever you name them.
//
// LINKS: replace the placeholder URLs below with your real GitHub / Figma links.
// Each project can have 0, 1, or 2 links (icon: 'github' or 'figma').
const PROJECTS = [
  {
    no: '3',
    title: 'DepEd Data Dashboard',
    category: 'Data Analysis',
    desc: 'Assisted in cleaning, organizing, and transforming DepEd enrollment records for analysis. Developed a comprehensive data dictionary and generated visualizations to support data-driven insights. Collaborated on an interactive dashboard using Plotly and Dash, enabling users to filter and analyze data by gender, grade level, and enrollment counts.',
    tech: ['Python', 'Pandas', 'Plotly', 'Dash'],
    image: '/images/deped.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/fajardoninag/DepEd-Enrollment-Dashboard', icon: 'github' },
    ],
  },
  {
    no: '4',
    title: 'Exploratory Data Analysis',
    category: 'Data Analysis',
    desc: 'Performed exploratory data analysis on a suicide rate dataset by conducting data inspection, identifying data types, cleaning and preparing data, and creating visualizations to uncover patterns, trends, and key insights.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: '/images/data.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/fajardoninag/Exploratory-Data-Analysis', icon: 'github' },
    ],
  },
  {
    no: '5',
    title: 'Health Center Patient Record Management System',
    category: 'UI/UX & Frontend',
    desc: 'Designed the system\u2019s user interface and user experience (UI/UX) using modern design principles. Developed frontend components and interfaces to improve usability and accessibility, and conducted quality assurance testing to identify and resolve system issues.',
    tech: ['Django', 'React.js', 'QA Testing'],
    image: '/images/espe.png',
    links: [
      { label: 'Figma', url: 'https://www.figma.com/proto/l409hkwQo86AWQExhghMYm/Healthcare-System?node-id=30-507&starting-point-node-id=30%3A507', icon: 'figma' },
      { label: 'GitHub', url: 'https://github.com/fajardoninag/Healthcare-System-', icon: 'github' },
    ],
  },
  {
    no: '6',
    title: 'Graduate School Research Management',
    category: 'UI/UX & Frontend',
    desc: 'Assisted in frontend development by implementing user interface components and pages. Collaborated with the development team to enhance system functionality and user experience, and supported testing and debugging activities to improve system performance.',
    tech: ['Laravel', 'MySQL','HTML','CSS','JavaScript'],
    image: '/images/thesis.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/fajardoninag/grad-school-research-management', icon: 'github' },
    ],
  },
  {
    no: '7',
    title: 'Thesis Management and Tracking System',
    category: 'UI/UX & Frontend',
    desc: 'Assisted in creating UI/UX designs and prototypes using Figma. Developed frontend pages and reusable components to support system functionality, and performed quality assurance testing to ensure system reliability and user satisfaction.',
    tech: ['Laravel', 'MySQL','HTML','CSS','JavaScript'],
    image: '/images/grad.png',
    links: [
     { label: 'Figma', url: 'https://www.figma.com/proto/fLB7yV631qU0gNqUaH78WI/Wireframes?node-id=4639-64834&starting-point-node-id=4639%3A64834', icon: 'figma' },
      { label: 'GitHub', url: 'https://github.com/fajardoninag/thesis-management-tracking-system', icon: 'github' },
    ],
  },
];

const stats = [
  { value: 'PUP-DOST', label: 'Scholar' },
  { value: 'CpE', label: 'Computer Engineering, Big Data Analytics' },
  { value: 'AVAILABLE', label: 'Open to Opportunies' },
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
          <Link to="/" className="nav-logo">My Portfolio</Link>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <button key={link} className="nav-link-btn" onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="about-section alt-bg">
        <div className="container">
          <div className="hero-top">
            <div className="hero-intro">
              <div className="name-row">
                <img src="/images/me.jpg" alt="Niña Fajardo" className="profile-pic" />
                <h1 className="hero-title">
                  Niña <br />
                   <em>Fajardo.</em>
                </h1>
              </div>
              <div className="eyebrow">web Designer &amp; Data Analyst — Manila, PH</div>
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
          </div>

          <div className="stats-bar">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="numbered-section">
        <div className="container">
          <div className="section-label">
            <div className="section-index">§ 01</div>
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
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="numbered-section alt-bg">
        <div className="container">
          <div className="section-label">
            <div className="section-index">§ 02</div>
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
                    <div className="project-footer-row">
                      <div className="tech-tags">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      {project.links && project.links.length > 0 && (
                        <div className="project-links">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-btn"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {link.icon === 'github' && <GithubIcon size={14} />}
                              {link.icon === 'figma' && <FigmaIcon size={14} />}
                              {link.label}
                              <ArrowUpRight size={12} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="numbered-section skills-section">
        <div className="container">
            <div className="section-index">§ 03</div>
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="section-label">
            <div className="section-index light">§ 04</div>
            <h2>Contact</h2>
          </div>
          <div>
            <p className="contact-desc">
              I'm looking for opportunities aligned with web designing and data analyzing. 
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