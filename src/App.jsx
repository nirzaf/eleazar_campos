import React, { useEffect, useState } from 'react'
import './App.css'
import profileImg from '../profile.png'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
  }, [isMenuOpen])
  return (
    <>
      <header>
        <nav>
          <div className="logo">👨‍🍳 Eleazar Campo</div>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(v => !v)}
          >
            ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <img src={profileImg} alt="Eleazar Campo" className="profile-photo" />
          <h1>Eleazar Campo</h1>
          <div className="title">Head Chef | Pan-Asian Culinary Expert | Kitchen Operations Leader</div>
          <p>Passionate culinary professional with 10+ years of progressive experience in high-volume kitchen operations, menu development, and culinary team leadership. Currently leading BAO Pan Asian Restaurant in Doha, Qatar.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#experience" className="btn btn-secondary">View Experience</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Culinary Excellence &amp; Leadership</h3>
              <p>I am a results-driven Head Chef with over a decade of progressive culinary experience. Currently leading all culinary operations at BAO Pan Asian Restaurant in Doha, I combine extensive technical expertise with proven leadership capabilities to drive kitchen excellence and memorable dining experiences.</p>
              <p>My journey from Line Cook to Head Chef demonstrates consistent commitment to culinary innovation, operational mastery, and professional growth. I specialize in Pan-Asian cuisine while maintaining flexibility to work with diverse international culinary traditions.</p>
              <h3 className="mt-30">Key Strengths</h3>
              <ul className="strengths">
                <li>Kitchen Operations &amp; Workflow Management</li>
                <li>Menu Development &amp; Menu Costing</li>
                <li>Food Safety, HACCP &amp; WHS Compliance</li>
                <li>Inventory, Budgeting &amp; Cost Control</li>
                <li>Leadership, Staff Training &amp; Roster Management</li>
                <li>Quality Assurance &amp; Waste Reduction</li>
                <li>Vendor Relations &amp; Procurement</li>
                <li>Cross-Cultural Team Collaboration</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10</div>
                  <div className="stat-label">Team Members Led</div>
                </div>
                <div className="stat">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Years as Sous Chef</div>
                </div>
              </div>
              <div className="stats mt-30">
                <div className="stat">
                  <div className="stat-number">11+</div>
                  <div className="stat-label">Certifications</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">HACCP Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2>Professional Experience</h2>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="job-title">Head Chef</div>
                <div className="company">BAO Pan Asian Restaurant</div>
                <div className="date-location">May 2025 - Present | Doha, Qatar</div>
              </div>
            </div>
            <p className="experience-description">Leading all culinary operations for a high-volume, specialized Pan-Asian dining concept. Overseeing kitchen operations, menu development, food cost controls, and team leadership of 10 culinary professionals.</p>
            <ul className="achievements">
              <li>Manage kitchen operations and maintain exceptional food quality standards</li>
              <li>Lead and mentor team of 10 culinary professionals across multiple stations</li>
              <li>Develop and update menus aligned with market trends and customer preferences</li>
              <li>Implement food cost controls achieving consistent budget targets</li>
              <li>Maintain strict HACCP compliance and sanitation standards</li>
              <li>Foster high-performance kitchen culture focused on consistency and innovation</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="job-title">Sous Chef</div>
                <div className="company">BAO Pan Asian Restaurant</div>
                <div className="date-location">August 2019 - April 2025 (Nearly 6 years) | Doha, Qatar</div>
              </div>
            </div>
            <p className="experience-description">Served as second-in-command, directly supporting Head Chef operations and demonstrating progressive leadership capabilities in daily kitchen management.</p>
            <ul className="achievements">
              <li>Assisted Head Chef in daily kitchen operations and menu planning</li>
              <li>Trained, supervised, and evaluated junior chefs on proper techniques</li>
              <li>Coordinated with front-of-house management for seamless service</li>
              <li>Implemented food safety and hygiene protocols</li>
              <li>Reduced food waste through improved storage and portion control</li>
              <li>Assumed Head Chef responsibilities during absence</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="job-title">Line Cook (Opening Team Trainer)</div>
                <div className="company">Peri-Peri Charcoal Chicken &amp; Sauce Bar</div>
                <div className="date-location">October 2018 - May 2019 | Makati City, Philippines</div>
              </div>
            </div>
            <p className="experience-description">Contributed to successful launch of multiple new restaurant branches through hands-on training, station setup, and operational support.</p>
            <ul className="achievements">
              <li>Supported opening and launch of multiple restaurant branches</li>
              <li>Trained opening team members on preparation techniques and standards</li>
              <li>Ensured compliance with food safety standards during launch phase</li>
              <li>Gained Train the Trainers certification for staff development</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="job-title">Line Cook</div>
                <div className="company">Peri-Peri Charcoal Chicken &amp; Sauce Bar</div>
                <div className="date-location">October 2016 - September 2018 | Makati City, Philippines</div>
              </div>
            </div>
            <p className="experience-description">Gained foundational expertise in fast-casual dining operations and high-volume food preparation in specialized cuisine concept.</p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="job-title">Line Cook</div>
                <div className="company">Chef Mo's Ribhouse</div>
                <div className="date-location">August 2015 - October 2016 | Quezon City, Philippines</div>
              </div>
            </div>
            <p className="experience-description">Built core culinary competencies in BBQ and grilled cuisine preparation, developing expertise in smoking techniques and meat handling.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>🍳 Culinary Skills</h4>
              <ul>
                <li>Pan-Asian Cuisine (Specialty)</li>
                <li>Menu Development &amp; Innovation</li>
                <li>Advanced Cooking Techniques</li>
                <li>Plating &amp; Presentation</li>
                <li>Recipe Development</li>
                <li>Food Costing &amp; Menu Engineering</li>
                <li>Diverse International Cuisines</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>⚙️ Operations</h4>
              <ul>
                <li>Kitchen Operations Management</li>
                <li>Workflow Optimization</li>
                <li>Inventory Management</li>
                <li>Food Cost Control</li>
                <li>Budget Management</li>
                <li>Supplier Coordination</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>🛡️ Food Safety</h4>
              <ul>
                <li>HACCP Implementation</li>
                <li>Food Safety Standards</li>
                <li>Sanitation &amp; Hygiene</li>
                <li>WHS Compliance</li>
                <li>Health Inspection Standards</li>
                <li>Staff Safety Training</li>
                <li>Waste Management</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>👥 Leadership</h4>
              <ul>
                <li>Kitchen Team Leadership</li>
                <li>Staff Training &amp; Development</li>
                <li>Performance Management</li>
                <li>Roster Management</li>
                <li>Team Motivation</li>
                <li>Conflict Resolution</li>
                <li>Mentoring &amp; Coaching</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>💼 Business Skills</h4>
              <ul>
                <li>Budget Planning</li>
                <li>Cost Optimization</li>
                <li>Inventory Forecasting</li>
                <li>Financial Management</li>
                <li>Strategic Planning</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>🗣️ Soft Skills</h4>
              <ul>
                <li>Written Communication</li>
                <li>Verbal Communication</li>
                <li>Active Listening</li>
                <li>Stakeholder Management</li>
                <li>Team Collaboration</li>
                <li>Customer Service</li>
                <li>Presentation Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <h2>Education &amp; Professional Development</h2>

          <div className="education-item">
            <h4>Bachelor of Science: International Hospitality Management</h4>
            <div className="school">Lyceum of the Philippines University | Batangas, Philippines</div>
            <div className="education-date">August 2024 - Expected Completion: 2026</div>
            <p><strong>Specialization:</strong> Culinary Arts and Kitchen Operations</p>
            <p>Online program allowing continuation of full-time work while advancing professional education in hospitality management.</p>
          </div>

          <div className="education-item">
            <h4>Associate Degree: Hotel and Restaurant Management</h4>
            <div className="school">City University of Pasay | Pasay City, Metro Manila, Philippines</div>
            <div className="education-date">April 2012 - Completed</div>
            <p>Strong foundational knowledge in hospitality operations, service standards, and industry best practices.</p>
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="container">
          <h2>Professional Certifications</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-title">Food Handler Certification</div>
              <div className="cert-issuer">Qatar Chamber of Commerce &amp; Industry (2025)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Train the Trainers &amp; Coaching 101</div>
              <div className="cert-issuer">Foods Group Inc. (2019)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Food Safety Strategies</div>
              <div className="cert-issuer">Palm Nouveau School of Hospitality (2011)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Basic Occupational Safety &amp; Health</div>
              <div className="cert-issuer">Foods Group Inc. (2018)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Food Safety Refresher</div>
              <div className="cert-issuer">Foods Group Inc. (2018)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Customer Service Excellence</div>
              <div className="cert-issuer">Palm Nouveau School (2011)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">5-in-1 Hospitality Competency</div>
              <div className="cert-issuer">JARWEB Sights Consultancy (2011)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Dispatcher Program</div>
              <div className="cert-issuer">Foods Group Inc. (2018)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Basic Housekeeping SOP</div>
              <div className="cert-issuer">Palm Nouveau School (2011)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Bartending Skills</div>
              <div className="cert-issuer">Palm Nouveau School (2011)</div>
            </div>
            <div className="cert-item">
              <div className="cert-title">Sequence of Service</div>
              <div className="cert-issuer">Palm Nouveau School (2011)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="lead-text">Interested in discussing culinary opportunities? Let's connect!</p>

          <div className="contact-info">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p><a href="mailto:eleazaracampo@gmail.com">eleazaracampo@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h4>📱 Phone</h4>
              <p><a href="tel:+97466526981">+974 6652 6981</a></p>
            </div>
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>Abu Hamour, Doha, Qatar</p>
            </div>
            <div className="contact-item">
              <h4>🔗 LinkedIn</h4>
              <p><a href="https://linkedin.com/in/eleazaracampo" target="_blank" rel="noreferrer">linkedin.com/in/eleazaracampo</a></p>
            </div>
          </div>

          <p className="fine-print">Available for interviews and professional opportunities in Qatar and internationally</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Eleazar Campo. All rights reserved. | Head Chef | Pan-Asian Culinary Expert</p>
        <p style={{ marginTop: 10, fontSize: 13 }}>Last Updated: December 7, 2025</p>
      </footer>
    </>
  )
}
