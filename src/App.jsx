
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
  const sections = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => {
    sections.forEach((section) => observer.unobserve(section))
  }
}, [])
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight

    const progress = (scrollTop / documentHeight) * 100

    setScrollProgress(progress)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  return (
  <>
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    ></div>

    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>

      <nav className="navbar">
       <div className="logo">
  <img
  src="/Tulasi_logo.png"
  alt="Tulas International School"
  className="school-logo"
/>
</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#sports">Sports</a>
          <a href="#campus">Campus</a>
          <a href="#admissions">Admissions</a>
        </div>

        <button
  className="nav-button"
  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
>
  Enquire Now
</button>
        <button
  className="theme-button"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? '☀️ Light' : '🌙 Dark'}
</button>
      </nav>

      <main>
        <section className="hero">

          <div className="hero-content reveal">

            <p className="eyebrow">
              TULAS INTERNATIONAL SCHOOL
            </p>

            <h1>
              Where curiosity
              <br />
              meets possibility.
            </h1>

            <p className="hero-text">
              A modern learning environment where students
              discover their potential, build confidence,
              and grow beyond the classroom.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="primary-button">
                Explore Tulas
              </a>

              <a href="#admissions" className="secondary-button">
                Admissions
              </a>
            </div>

          </div>

        </section>
        <section id="about" className="about">
  <div className="about-content">
    <p className="eyebrow">ABOUT TULAS</p>

    <h2>
      A place where students
      <br />
      learn, explore, and grow.
    </h2>

    <p className="about-text">
      Tulas International School provides a modern learning environment
      that encourages curiosity, creativity, confidence, and lifelong
      learning.
    </p>
  </div>
</section>
<section id="academics" className="academics">
  <div className="academics-content">

    <p className="eyebrow">ACADEMICS</p>

    <h2>
      Learning that builds
      <br />
      strong foundations.
    </h2>

    <div className="academic-cards">

      <div className="academic-card">
        <h3>Primary School</h3>
        <p>
          Building strong foundations through curiosity,
          creativity, and engaging learning experiences.
        </p>
      </div>

      <div className="academic-card">
        <h3>Middle School</h3>
        <p>
          Encouraging students to explore new ideas,
          develop confidence, and think independently.
        </p>
      </div>

      <div className="academic-card">
        <h3>Senior School</h3>
        <p>
          Preparing students for higher education with
          focused academics and real-world skills.
        </p>
      </div>

    </div>

  </div>
</section>


<section id="sports" className="sports">
  <div className="sports-content">

    <p className="eyebrow">SPORTS</p>

    <h2>
      Movement that builds
      <br />
      confidence.
    </h2>

    <div className="sports-cards">

      <div className="sports-card">
        <h3>Football</h3>
        <p>
          Developing teamwork, discipline, and a passion for the game.
        </p>
      </div>

      <div className="sports-card">
        <h3>Basketball</h3>
        <p>
          Building coordination, confidence, and competitive spirit.
        </p>
      </div>

      <div className="sports-card">
        <h3>Athletics</h3>
        <p>
          Encouraging students to stay active, focused, and determined.
        </p>
      </div>

    </div>

  </div>
</section>

<section id="campus" className="campus">
  <div className="campus-content">

    <p className="eyebrow">CAMPUS</p>

    <h2>
      A campus designed
      <br />
      for discovery.
    </h2>

    <div className="campus-grid">

      <div className="campus-card">
        <h3>Modern Classrooms</h3>
        <p>
          Thoughtfully designed spaces that make learning comfortable,
          engaging, and inspiring.
        </p>
      </div>

      <div className="campus-card">
        <h3>Creative Spaces</h3>
        <p>
          Places where students can explore ideas, collaborate, and
          express their creativity.
        </p>
      </div>

      <div className="campus-card">
        <h3>Green Environment</h3>
        <p>
          Open and welcoming surroundings that encourage students to
          connect, relax, and grow.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="testimonials" className="testimonials">
  <div className="testimonials-content">

    <p className="eyebrow">WHAT OUR COMMUNITY SAYS</p>

    <h2>
      Learning that stays
      <br />
      with you.
    </h2>

    <div className="testimonial-grid">

      <div className="testimonial-card">
        <p>
          “Tulas gives students the confidence to explore their
          interests and discover what they are capable of.”
        </p>
        <h3>Parent Community</h3>
      </div>

      <div className="testimonial-card">
        <p>
          “The learning environment encourages us to think
          independently and try new things.”
        </p>
        <h3>Student Community</h3>
      </div>

      <div className="testimonial-card">
        <p>
          “A supportive environment where academic learning
          and personal growth go together.”
        </p>
        <h3>School Community</h3>
      </div>

    </div>

  </div>
</section>
<section id="admissions" className="admissions">
  <div className="admissions-content reveal">
    <p className="eyebrow">ADMISSIONS</p>

    <h2>
      Your child's journey
      <br />
      starts here.
    </h2>

    <p className="admissions-text">
      Discover a learning environment designed to help every student
      grow with confidence, curiosity, and purpose.
    </p>

    <a href="#contact" className="primary-button">
      Start Your Journey
    </a>
  </div>
</section>
<section id="contact" className="contact">
  <div className="contact-content reveal">
    <p className="eyebrow">CONTACT</p>

    <h2>
      Let's build a
      <br />
      brighter future.
    </h2>

    <p className="contact-text">
      Have questions about admissions, academics, or life at Tulas?
      We'd love to hear from you.
    </p>

    <a href="mailto:info@tis.edu.in" className="primary-button">
      Get in Touch
    </a>
  </div>
</section>
<footer className="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <img
        src="/Tulasi_logo.png"
        alt="Tulas International School"
        className="footer-logo"
      />

      <p>
        Inspiring students to learn, explore,
        and grow beyond the classroom.
      </p>
    </div>

    <div className="footer-links">
      <div>
        <h3>Explore</h3>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#sports">Sports</a>
        <a href="#campus">Campus</a>
      </div>

      <div>
        <h3>Connect</h3>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Tulas International School. All rights reserved.</p>
  </div>
</footer>
      </main>

    </div>
    </>
  )
}

export default App