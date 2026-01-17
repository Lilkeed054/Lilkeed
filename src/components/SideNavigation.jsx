import React, { useState, useEffect } from 'react';
import { Nav, Button, Offcanvas } from 'react-bootstrap';
import myPhoto from "../assets/IMG_1029.JPG";

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'projects', icon: 'fa-briefcase', label: 'Projects' },
    { id: 'skills', icon: 'fa-code', label: 'Skills' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setShowMobileMenu(false);
    }
  };

  const socialLinks = [
    { platform: 'GitHub', icon: 'fa-github', link: 'https:/github.com/lilkeed', color: '#333' },
    { platform: 'LinkedIn', icon: 'fa-linkedin', link: 'https:/Linkedin/siraritaonshe', color: '#0077B5' },
    { platform: 'instagram', icon: 'fa-instagram', link: 'https:/www.instagram.com/lil_keed1', color: '#1DA1F2' },
    { platform: 'Facebook', icon: 'fa-facebook', link: 'https:/facebook.com/Taonashe Sirari', color: '#333' },
    { platform: 'Email', icon: 'fa-envelope', link: 'mailto:siraritaonashe@gmail.com', color: '#EA4335' },
    
  ];

  return (
    <>
      {/* Main Side Navigation - Desktop */}
      <div 
        className="position-fixed start-0 top-0 h-100 d-none d-lg-flex flex-column align-items-center justify-content-center z-3"
        style={{ 
          width: '80px',
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(13, 110, 253, 0.1)',
          boxShadow: '2px 0 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Profile Image */}
        <div className="mb-5 mt-4">
          <div 
            className="profile-image-container rounded-circle overflow-hidden"
            style={{ 
              width: '50px', 
              height: '50px',
              position: 'relative',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('home')}
          >
            <img 
              src={myPhoto}
              alt="Profile"
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.3s ease' }}
            />
            <div className="profile-overlay"></div>
          </div>
          {/* Active indicator for home */}
          {activeSection === 'home' && (
            <div className="active-indicator mx-auto mt-2"></div>
          )}
        </div>

        {/* Navigation Items */}
        <Nav className="flex-column align-items-center gap-3">
          {sections.map((item) => (
            <div key={item.id} className="position-relative">
              <button
                className={`p-0 border-0 bg-transparent position-relative nav-button ${
                  activeSection === item.id ? 'active' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
                title={item.label}
              >
                <div 
                  className={`rounded-3 d-flex align-items-center justify-content-center ${
                    activeSection === item.id 
                      ? 'nav-icon-active' 
                      : 'nav-icon'
                  }`}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                {/* Active indicator line */}
                {activeSection === item.id && (
                  <div className="active-line"></div>
                )}
                {/* Hover tooltip */}
                <div className="nav-tooltip">{item.label}</div>
              </button>
              {/* Dot indicator */}
              {activeSection === item.id && (
                <div className="active-dot"></div>
              )}
            </div>
          ))}
        </Nav>

        {/* Social Links */}
        <div className="mt-auto mb-4 d-flex flex-column gap-3">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              className="social-link d-flex align-items-center justify-content-center"
              target="_blank"
              rel="noopener noreferrer"
              title={social.tooltip}
              style={{ '--social-color': social.color }}
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>

        {/* Scroll progress indicator */}
        <div className="scroll-progress mb-3">
          <div className="progress-bar" style={{ height: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}></div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <nav 
        className={`position-fixed top-0 start-0 w-100 d-lg-none z-3 mobile-nav ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <div className="container h-100">
          <div className="d-flex align-items-center justify-content-between h-100">
            {/* Logo/Brand */}
            <div className="d-flex align-items-center">
              <div 
                className="profile-mobile rounded-circle overflow-hidden me-3"
                onClick={() => scrollToSection('home')}
              >
                <img 
                  src={myPhoto}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="brand-text">
                <span className="fw-bold text-dark">Taonashe</span>
                <span className="text-primary fw-bold">.</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="link"
              className="p-0 text-dark border-0 menu-toggle"
              onClick={() => setShowMobileMenu(true)}
            >
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Offcanvas */}
      <Offcanvas
        show={showMobileMenu}
        onHide={() => setShowMobileMenu(false)}
        placement="end"
        className="border-0 mobile-menu"
        style={{ width: '300px' }}
      >
        <Offcanvas.Header className="border-bottom pb-3">
          <Offcanvas.Title>
            <div className="d-flex align-items-center">
              <div 
                className="profile-offcanvas rounded-circle overflow-hidden me-3"
              >
                <img 
                  src={myPhoto}
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div>
                <div className="fw-bold text-dark h5 mb-1">Taonashe Sirari</div>
                <div className="text-muted small">Full Stack Developer</div>
              </div>
            </div>
          </Offcanvas.Title>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close"
          ></button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {/* Navigation */}
          <div className="list-group list-group-flush mobile-nav-items">
            {sections.map((item) => (
              <button
                key={item.id}
                className={`list-group-item list-group-item-action border-0 py-3 px-4 d-flex align-items-center ${
                  activeSection === item.id ? 'active' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <div className={`nav-icon-mobile me-3 ${
                  activeSection === item.id ? 'active' : ''
                }`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <span className="fw-medium">{item.label}</span>
                {activeSection === item.id && (
                  <div className="ms-auto">
                    <i className="fas fa-chevron-right small text-primary"></i>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="p-4 border-top mt-4">
            <div className="mb-3 small text-muted">Connect with me</div>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="social-mobile d-flex align-items-center justify-content-center rounded-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.tooltip}
                  style={{ '--social-color': social.color }}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
              <a 
                href="mailto:siraritaonashe@gmail.com"
                className="social-mobile d-flex align-items-center justify-content-center rounded-circle"
                title="Email"
                style={{ '--social-color': '#EA4335' }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-4 bg-primary bg-opacity-5 mt-4">
            <p className="text-muted small mb-3">Have a project in mind?</p>
            <Button 
              variant="primary" 
              className="w-100 fw-bold"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Get In Touch
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Floating Contact Button for Mobile */}
      <Button
        variant="primary"
        className="position-fixed bottom-4 end-4 d-lg-none z-3 contact-float shadow-lg"
        onClick={() => scrollToSection('contact')}
      >
        <i className="fas fa-paper-plane"></i>
        <span className="ms-2 d-none d-sm-inline">Contact</span>
      </Button>

      {/* Custom CSS */}
      <style jsx global>{`
        /* Desktop Navigation */
        .nav-button {
          transition: all 0.3s ease;
          outline: none;
          position: relative;
        }

        .nav-icon {
          width: 50px;
          height: 50px;
          background: rgba(13, 110, 253, 0.08);
          color: #666;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icon-active {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          color: white;
          font-size: 1.1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }

        .nav-button:hover .nav-icon {
          background: rgba(13, 110, 253, 0.15);
          color: #0d6efd;
          transform: translateY(-3px);
        }

        .active-line {
          position: absolute;
          left: -3px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: linear-gradient(to bottom, #0d6efd, #6f42c1);
          border-radius: 2px;
          animation: lineAppear 0.3s ease;
        }

        .active-dot {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #0d6efd;
          border-radius: 50%;
        }

        .nav-tooltip {
          position: absolute;
          left: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: #333;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 1000;
        }

        .nav-tooltip::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-right: 5px solid #333;
        }

        .nav-button:hover .nav-tooltip {
          opacity: 1;
          visibility: visible;
          left: 75px;
        }

        /* Social Links */
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.05);
          color: #666;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--social-color);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .social-link:hover::before {
          transform: translateY(0);
        }

        .social-link i {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .social-link:hover i {
          color: white;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* Scroll Progress */
        .scroll-progress {
          width: 2px;
          height: 60px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .scroll-progress .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, #0d6efd, #6f42c1);
          border-radius: 2px;
          transition: height 0.1s ease;
        }

        /* Profile Image */
        .profile-image-container {
          transition: all 0.3s ease;
        }

        .profile-image-container:hover {
          transform: scale(1.1);
        }

        .profile-image-container:hover img {
          transform: scale(1.1);
        }

        .profile-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .profile-image-container:hover .profile-overlay {
          opacity: 1;
        }

        .active-indicator {
          width: 20px;
          height: 2px;
          background: #0d6efd;
          border-radius: 1px;
        }

        /* Mobile Navigation */
        .mobile-nav {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(13, 110, 253, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          height: 70px;
          transition: all 0.3s ease;
        }

        .mobile-nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        }

        .profile-mobile {
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #0d6efd, #6f42c1) border-box;
          border-radius: 50%;
          padding: 2px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .profile-mobile:hover {
          transform: scale(1.1);
        }

        .profile-mobile img {
          border-radius: 50%;
        }

        .brand-text {
          font-size: 1.2rem;
        }

        .menu-toggle {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(13, 110, 253, 0.08);
          transition: all 0.3s ease;
        }

        .menu-toggle:hover {
          background: rgba(13, 110, 253, 0.15);
        }

        .hamburger {
          width: 20px;
          height: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-toggle:hover .hamburger span {
          background: #0d6efd;
        }

        /* Mobile Menu */
        .mobile-menu .offcanvas-body {
          background: #f8f9fa;
        }

        .mobile-nav-items .list-group-item {
          transition: all 0.3s ease;
          border-radius: 0 !important;
        }

        .mobile-nav-items .list-group-item:hover {
          background: rgba(13, 110, 253, 0.05);
          padding-left: 30px;
        }

        .mobile-nav-items .list-group-item.active {
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          border-left: 4px solid #0d6efd;
        }

        .nav-icon-mobile {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 110, 253, 0.08);
          color: #666;
          transition: all 0.3s ease;
        }

        .nav-icon-mobile.active {
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          color: white;
        }

        .profile-offcanvas {
          width: 50px;
          height: 50px;
          border: 3px solid transparent;
          background: linear-gradient(135deg, #0d6efd, #6f42c1) border-box;
          border-radius: 50%;
          padding: 2px;
        }

        .social-mobile {
          width: 45px;
          height: 45px;
          background: rgba(0, 0, 0, 0.05);
          color: #666;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .social-mobile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--social-color);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .social-mobile:hover::before {
          transform: translateY(0);
        }

        .social-mobile i {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .social-mobile:hover i {
          color: white;
        }

        .social-mobile:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* Floating Contact Button */
        .contact-float {
          border-radius: 50px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          border: none;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
        }

        .contact-float:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(13, 110, 253, 0.3);
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes lineAppear {
          from { opacity: 0; transform: translateY(-50%) scaleY(0); }
          to { opacity: 1; transform: translateY(-50%) scaleY(1); }
        }
      `}</style>
    </>
  );
};

export default SideNavigation;