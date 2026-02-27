
import React from 'react'
import './App.css'

const focusAreas = [
  {
    title: 'Machine Learning & Human-Centered AI',
    description: 'Developing intelligent systems that empower humans.',
  },
  {
    title: 'Software Engineering',
    description: 'Building robust and scalable applications with modern technologies.',
  },
  {
    title: 'Data Science',
    description: 'Uncovering insights and patterns in complex datasets.',
  },
  {
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions.',
  },
]

const experiences = [
  {
    company: 'TP-Link Systems Inc.',
    location: 'Irvine, CA',
    role: 'Big Data ML Engineer',
    dates: 'May 2025–Present',
  },
  {
    company: 'Identiv',
    location: 'Santa Ana, CA',
    role: 'ML Engineer (Contract)',
    dates: 'Feb 2025–Present',
  },
  {
    company: 'Chapman University',
    location: 'Orange, CA',
    role: 'Research Assistant',
    dates: 'Aug 2023–Dec 2024',
  },
  {
    company: 'Wyzant',
    location: 'Orange, CA',
    role: 'Tutor',
    dates: 'Dec 2023–Feb 2024',
  },
]

const skills = [
  'Python',
  'Computer Vision',
  'C++',
  'Apache Hadoop',
  'R',
  'TensorFlow',
  'AWS',
  'Deep Learning',
  'SQL',
  'Apache Spark',
]

const projects = [
  {
    title: 'Video Colorization Using VGG16 Autoencoder',
    summary: 'Deep learning system for automatic video colorization.',
    tags: ['Python', 'Deep Learning', 'Computer Vision'],
  },
  {
    title: 'Image Colorization via Progressive GAN Training',
    summary: 'Generative adversarial network for photo colorization.',
    tags: ['GAN', 'NumPy', 'Machine Learning'],
  },
  {
    title: 'IoT BLE Audio Streaming System',
    summary: 'ESP32 + Arduino system for low-power audio streaming.',
    tags: ['IoT', 'BLE', 'Embedded'],
  },
  {
    title: 'Robot Dog Maze Walkthrough',
    summary: '3D maze adventure with procedural generation.',
    tags: ['OpenGL', 'Game Dev', 'Python'],
  },
]

const talks = [
  {
    title: 'The Psychology of Neural Networks',
    date: 'December 2025',
    venue: 'North OC Computer Club',
  },
  {
    title: 'Cross-Disciplinary Advantage: Build a Data Career That Stands Out',
    date: 'November 2025',
    venue: 'Data Con LA',
  },
  {
    title: 'Human-Centered AI: Enhancing Human Capabilities',
    date: 'April 2025',
    venue: 'North OC Computer Club',
  },
]

const posts = [
  {
    title: 'Between Stages: A Commencement Week Reflection',
    date: '2025-05-31',
    readTime: '4 min read',
    category: 'Personal Development',
  },
  {
    title: "Navigating the Tech Job Jungle: A New Grad's Honest Check-in",
    date: '2025-04-10',
    readTime: '5 min read',
    category: 'Personal Development',
  },
  {
    title: 'Crafting My Digital Identity: Building My Portfolio Website',
    date: '2024-11-21',
    readTime: '4 min read',
    category: 'Web Development',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Machine Learning & Business Intelligence | Researcher</p>
          <h1>Nasrin Farzana ✦</h1>
          <p className="lead">
            Hi! I&apos;m an AI researcher, economist, and engineer with a passion for using
            creativity and technology to solve complex problems. I believe technology should
            enhance human intelligence, not replace it. I&apos;m always curious and always building.
          </p>
          <div className="hero__actions">
            <a className="btn primary" href="#projects">View My Work</a>
            <a className="btn ghost" href="#blog">My Podcast</a>
            <a className="btn ghost" href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="hero__card">
          <h3>About Me</h3>
          <p>
            I&apos;m fully immersed in the worlds of artificial intelligence, software engineering,
            and economics. My journey combines academic research and hands-on development.
          </p>
          <div className="highlight">
            <h4>✨ Meet Mira! ✨</h4>
            <p>
              My coding companion and debugging expert. She reminds me to take breaks and
              carries her own backpack on our trail adventures.
            </p>
            <a className="link" href="https://devynmiller.com/mira/index.html" target="_blank" rel="noreferrer">
              Visit Mira&apos;s Page
            </a>
          </div>
        </div>
      </header>

      <section className="section" id="focus">
        <div className="section__title">
          <h2>Focus Areas</h2>
          <p>Designing systems that empower people, not replace them.</p>
        </div>
        <div className="grid">
          {focusAreas.map(area => (
            <div className="card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt" id="experience">
        <div className="section__title">
          <h2>Professional Experience</h2>
          <p>Building products, research pipelines, and data-driven systems.</p>
        </div>
        <div className="stack">
          {experiences.map(exp => (
            <div className="list-card" key={exp.company}>
              <div>
                <h3>{exp.company}</h3>
                <p className="muted">{exp.location}</p>
              </div>
              <div>
                <p className="role">{exp.role}</p>
                <p className="muted">{exp.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section__title">
          <h2>Skills</h2>
          <p>Some of the tools I use and technical skills I&apos;m developing.</p>
        </div>
        <div className="pill-grid">
          {skills.map(skill => (
            <span className="pill" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section alt" id="projects">
        <div className="section__title">
          <h2>Recent Projects</h2>
          <p>Featured work across AI, data science, and engineering.</p>
        </div>
        <div className="grid">
          {projects.map(project => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <button className="link-btn" type="button">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="talks">
        <div className="section__title">
          <h2>Speaking & Media</h2>
          <p>Presentations, workshops, and speaking engagements.</p>
        </div>
        <div className="stack">
          {talks.map(talk => (
            <div className="list-card" key={talk.title}>
              <div>
                <h3>{talk.title}</h3>
                <p className="muted">{talk.venue}</p>
              </div>
              <div>
                <p className="muted">{talk.date}</p>
                <button className="link-btn" type="button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt" id="blog">
        <div className="section__title">
          <h2>Blog</h2>
          <p>Thoughts, stories, and ideas from my journey.</p>
        </div>
        <div className="grid">
          {posts.map(post => (
            <div className="card" key={post.title}>
              <p className="muted">{post.date} · {post.readTime}</p>
              <h3>{post.title}</h3>
              <p className="muted">{post.category}</p>
              <button className="link-btn" type="button">Read More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__title">
          <h2>Get in Touch</h2>
          <p>Open to collaborations, research, and new opportunities.</p>
        </div>
        <div className="contact">
          <div className="card">
            <h3>Contact Information</h3>
            <p className="muted">nasrinfarzana@email.com</p>
            <p className="muted">California, USA</p>
          </div>
          <form
            className="card form"
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className="sr-only">
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Subject
              <input type="text" name="subject" placeholder="Project, collaboration, etc." />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="Write your message..." required />
            </label>
            <button className="btn primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Nasrin Farzana. Designed with curiosity and care.</p>
      </footer>
    </div>
  )
}

export default App
