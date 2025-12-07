import React from 'react'
import './App.css'
import profileImg from '../profile.png'
import { 
  Briefcase, MapPin, ChefHat, Users, Globe, Award, ShieldCheck, 
  UtensilsCrossed, Flame, TrendingUp, MessageCircleHeart, 
  Mail, Phone, Linkedin, CalendarDays, ScrollText
} from 'lucide-react'

const stats = [
  { label: 'Experience', value: '10+ yrs', icon: <CalendarDays size={20} /> },
  { label: 'Chefs led', value: '10', icon: <Users size={20} /> },
  { label: 'Countries worked', value: '4', icon: <Globe size={20} /> },
  { label: 'Certifications', value: '11+', icon: <Award size={20} /> },
  { label: 'HACCP compliance', value: '100%', icon: <ShieldCheck size={20} /> }
]

const experiences = [
  {
    role: 'Head Chef',
    company: 'BAO Pan Asian Restaurant',
    period: 'May 2025 - Present',
    location: 'Doha, Qatar',
    summary: 'Leading a high-volume Pan-Asian concept with full ownership of menu direction, kitchen standards, and team performance.',
    bullets: [
      'Own menu development, testing, and seasonal refreshes built on guest feedback',
      'Coach and schedule 10 culinary staff across hot, cold, grill, and pastry stations',
      'Hold food cost targets through tight prep standards, yield control, and vendor partnerships',
      'Audit HACCP, sanitation, and daily line checks to keep consistency and compliance high',
      'Build a collaborative, feedback-first culture that rewards precision and speed'
    ]
  },
  {
    role: 'Sous Chef',
    company: 'BAO Pan Asian Restaurant',
    period: 'Aug 2019 - Apr 2025',
    location: 'Doha, Qatar',
    summary: 'Second-in-command for daily operations, stepping in for the Head Chef and running service.',
    bullets: [
      'Led service passes and expo to maintain pace and plating standards',
      'Trained junior cooks on station ownership, sanitation, and knife skills',
      'Partnered with FOH to smooth pacing, specials, and VIP covers',
      'Cut waste through batch control, FIFO discipline, and smart specials',
      'Documented SOPs for sauces, marinades, and banquet prep'
    ]
  },
  {
    role: 'Line Cook (Opening Team Trainer)',
    company: 'Peri-Peri Charcoal Chicken & Sauce Bar',
    period: 'Oct 2018 - May 2019',
    location: 'Makati City, Philippines',
    summary: 'Opened new branches and trained teams on brand standards and line speed.',
    bullets: [
      'Set up stations, portioning, and line flows for multiple openings',
      'Certified trainers on recipe cards, HACCP logs, and hold times',
      'Kept launch food safety and quality targets on track'
    ]
  },
  {
    role: 'Line Cook',
    company: 'Peri-Peri Charcoal Chicken & Sauce Bar',
    period: 'Oct 2016 - Sep 2018',
    location: 'Makati City, Philippines',
    summary: 'Built speed and consistency in a fast-casual, high-volume kitchen.',
    bullets: [
      'Executed grill, fry, and salad stations during peak services',
      'Maintained product rotation and accurate portioning'
    ]
  },
  {
    role: 'Line Cook',
    company: "Chef Mo's Ribhouse",
    period: 'Aug 2015 - Oct 2016',
    location: 'Quezon City, Philippines',
    summary: 'Developed core BBQ skills across smoking, grilling, and carving.',
    bullets: [
      'Prepped and cooked smoked meats, sauces, and sides to spec',
      'Supported banquets with bulk prep and finishing'
    ]
  }
]

const skills = [
  {
    title: 'Kitchen Leadership',
    icon: <ChefHat size={24} />,
    items: [
      'Crew training & coaching',
      'Roster planning',
      'Performance management',
      'Pre-shift briefs',
      'Calm service communication'
    ]
  },
  {
    title: 'Menu & Operations',
    icon: <UtensilsCrossed size={24} />,
    items: [
      'Menu engineering',
      'Prep standards',
      'Line optimization',
      'Vendor coordination',
      'Yield & waste control',
      'Banquet planning'
    ]
  },
  {
    title: 'Food Safety',
    icon: <ShieldCheck size={24} />,
    items: [
      'HACCP programs',
      'Daily line checks',
      'Temp control and logs',
      'Allergen awareness',
      'Sanitation playbooks'
    ]
  },
  {
    title: 'Culinary Strengths',
    icon: <Flame size={24} />,
    items: [
      'Pan-Asian flavor balance',
      'Sauce and marinade builds',
      'Plating & presentation',
      'High-volume execution',
      'Recipe testing & costing'
    ]
  },
  {
    title: 'Business Acumen',
    icon: <TrendingUp size={24} />,
    items: [
      'Food cost targets',
      'Budget adherence',
      'Inventory accuracy',
      'Vendor negotiations'
    ]
  },
  {
    title: 'Soft Skills',
    icon: <MessageCircleHeart size={24} />,
    items: [
      'Guest focus',
      'Clear communication',
      'Team motivation',
      'Cross-cultural teamwork'
    ]
  }
]

const education = [
  {
    title: 'Bachelor of Science: International Hospitality Management',
    school: 'Lyceum of the Philippines University',
    location: 'Batangas, Philippines',
    period: 'Aug 2024 - In progress',
    note: 'Specialization in Culinary Arts and Kitchen Operations (online program while working full time).'
  },
  {
    title: 'Associate Degree: Hotel and Restaurant Management',
    school: 'City University of Pasay',
    location: 'Pasay City, Metro Manila, Philippines',
    period: 'Completed Apr 2012',
    note: 'Foundation in hospitality operations, service standards, and kitchen best practices.'
  }
]

const certifications = [
  'Food Handler Certification (Qatar Chamber, 2025)',
  'Train the Trainers & Coaching 101 (Foods Group Inc., 2019)',
  'Food Safety Strategies (Palm Nouveau School, 2011)',
  'Basic Occupational Safety & Health (Foods Group Inc., 2018)',
  'Food Safety Refresher (Foods Group Inc., 2018)',
  'Customer Service Excellence (Palm Nouveau School, 2011)',
  '5-in-1 Hospitality Competency (JARWEB Sights Consultancy, 2011)',
  'Dispatcher Program (Foods Group Inc., 2018)',
  'Basic Housekeeping SOP (Palm Nouveau School, 2011)',
  'Bartending Skills (Palm Nouveau School, 2011)',
  'Sequence of Service (Palm Nouveau School, 2011)'
]

const contacts = [
  { label: 'Email', value: 'eleazaracampo@gmail.com', href: 'mailto:eleazaracampo@gmail.com', icon: <Mail size={20} /> },
  { label: 'Phone', value: '+974 6652 6981', href: 'tel:+97466526981', icon: <Phone size={20} /> },
  { label: 'Location', value: 'Abu Hamour, Doha, Qatar', icon: <MapPin size={20} /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/eleazaracampo', href: 'https://linkedin.com/in/eleazaracampo', icon: <Linkedin size={20} /> }
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <p className="brand-kicker">Head Chef - Pan-Asian Specialist</p>
            <p className="brand-name">Eleazar Campo</p>
          </div>
        </div>
        <div className="top-actions">
          <a className="button ghost sm" href="#contact">
            <Mail size={16} className="btn-icon" /> Contact
          </a>
          <a className="button primary sm" href="#experience">
            <ScrollText size={16} className="btn-icon" /> Experience
          </a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-card">
            <div className="hero-meta">
              <img src={profileImg} alt="Eleazar Campo" className="avatar" width="124" height="124" />
              <div>
                <p className="eyebrow">Kitchen Operations Leader</p>
                <h1 id="hero-title">Eleazar Campo</h1>
                <p className="hero-title">Head Chef | Pan-Asian Culinary Expert</p>
                <div className="tag-row">
                  <span className="tag">
                    <MapPin size={14} className="tag-icon" /> Based in Doha, Qatar
                  </span>
                  <span className="tag">
                    <Briefcase size={14} className="tag-icon" /> Open to new roles
                  </span>
                  <span className="tag">
                    <ChefHat size={14} className="tag-icon" /> Service & operations first
                  </span>
                </div>
              </div>
            </div>
            <p className="hero-copy">
              Driven head chef with a decade of high-volume experience, leading teams, designing menus, and running kitchens that
              hit food cost, safety, and guest satisfaction targets.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <Phone size={18} className="btn-icon" /> Book a call
              </a>
              <a className="button ghost" href="#about">
                <ChefHat size={18} className="btn-icon" /> About & strengths
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="stats-title" className="section">
          <div className="section-header">
            <h2 id="stats-title">At a Glance</h2>
            <p className="section-note">Mobile-friendly overview of impact and reach.</p>
          </div>
          <div className="stat-scroll" role="list">
            {stats.map(item => (
              <div className="stat-card" key={item.label} role="listitem">
                <div className="stat-icon-wrapper">{item.icon}</div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="section">
          <div className="section-header">
            <h2 id="about-title">About & Strengths</h2>
            <p className="section-note">Leadership, consistency, and guest-first thinking.</p>
          </div>
          <div className="card stack">
            <p>
              I lead kitchens to be calm, predictable, and guest-focused. From Pan-Asian signature menus to daily line checks,
              I build systems that help cooks move fast and hit standards every service.
            </p>
            <p>
              My background spans openings, training, and running multi-station teams. I pair flavor development with sharp
              operations: clear prep standards, tight cost control, and rigorous HACCP practices.
            </p>
            <div className="pill-grid">
              {[
                'Menu development & costing',
                'Service pacing & expo',
                'Prep standards & yields',
                'Coaching & roster design',
                'Vendor partnerships',
                'Waste reduction',
                'HACCP and WHS compliance',
                'Cross-cultural team leadership'
              ].map(item => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="section">
          <div className="section-header">
            <h2 id="experience-title">Experience</h2>
            <p className="section-note">Roles, leadership scope, and operational wins.</p>
          </div>
          <div className="timeline">
            {experiences.map(exp => (
              <article className="card" key={`${exp.role}-${exp.period}`}>
                <header className="card-header">
                  <div>
                    <p className="kicker">{exp.period}</p>
                    <h3>{exp.role}</h3>
                    <p className="subhead">{exp.company}</p>
                  </div>
                  <span className="chip">{exp.location}</span>
                </header>
                <p className="card-summary">{exp.summary}</p>
                <ul className="list">
                  {exp.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="section">
          <div className="section-header">
            <h2 id="skills-title">Core Competencies</h2>
            <p className="section-note">What I bring to a kitchen day-to-day.</p>
          </div>
          <div className="grid">
            {skills.map(group => (
              <div className="card" key={group.title}>
                <div className="skill-header">
                  <div className="skill-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                </div>
                <div className="pill-grid">
                  {group.items.map(item => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" aria-labelledby="education-title" className="section">
          <div className="section-header">
            <h2 id="education-title">Education</h2>
            <p className="section-note">Continuous growth in culinary and hospitality leadership.</p>
          </div>
          <div className="stack">
            {education.map(item => (
              <div className="card" key={item.title}>
                <div className="card-header">
                  <div>
                    <p className="kicker">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="subhead">{item.school}</p>
                  </div>
                  <span className="chip">{item.location}</span>
                </div>
                <p className="card-summary">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" aria-labelledby="cert-title" className="section">
          <div className="section-header">
            <h2 id="cert-title">Certifications</h2>
            <p className="section-note">Validated safety, service, and leadership credentials.</p>
          </div>
          <div className="pill-grid">
            {certifications.map(cert => (
              <span className="pill" key={cert}>
                <Award size={14} className="pill-icon" /> {cert}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="section contact">
          <div className="section-header">
            <h2 id="contact-title">Let's Talk</h2>
            <p className="section-note">Available for culinary leadership roles and collaborations.</p>
          </div>
          <div className="card contact-card">
            <div className="contact-grid">
              {contacts.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon-wrapper">{item.icon}</div>
                  <div>
                    <p className="kicker">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:eleazaracampo@gmail.com">
                <Mail size={18} className="btn-icon" /> Email Eleazar
              </a>
              <a className="button ghost" href="tel:+97466526981">
                <Phone size={18} className="btn-icon" /> Call now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Eleazar Campo - Head Chef & Kitchen Operations Leader</p>
        <p className="kicker">Updated December 2025 - Doha, Qatar</p>
      </footer>
    </div>
  )
}
