import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Badge } from 'react-bootstrap';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // =============== ADD YOUR PROJECTS HERE ===============
  // Replace these with your actual projects
  // Each project should have the following structure:
  
  const projects = [
    // {
    //   id: 1,
    //   title: 'Your Project Title',
    //   description: 'Brief description of your project',
    //   fullDescription: 'Detailed description of your project. Explain what the project does, what technologies you used, what problems it solves, and what you learned.',
    //   // For images: you can use local images by importing them or use online URLs
    //   // Example for local: import myProjectImage from '../assets/my-project.jpg'
    //   // Then use: image: myProjectImage
    //   // Or use online URL: image: 'https://images.unsplash.com/...'
    //   image: 'https://via.placeholder.com/800x400/0d6efd/ffffff?text=Your+Project+Image',
    //   tags: ['React', 'JavaScript', 'CSS', 'Your Tech'],
    //   category: 'web', // Choose from: 'web', 'mobile', 'fullstack', 'design'
    //   status: 'Completed', // or 'In Progress', 'Coming Soon'
    //   github: 'https://github.com/yourusername/yourproject', // or '#'
    //   demo: 'https://yourprojectdemo.com', // or '#'
    //   featured: true // Set to true for projects you want to highlight
    // },
    // {
    //   id: 2,
    //   title: 'Another Project',
    //   description: 'Brief description here',
    //   fullDescription: 'Detailed description here.',
    //   image: 'https://via.placeholder.com/800x400/6f42c1/ffffff?text=Project+2',
    //   tags: ['Node.js', 'Express', 'MongoDB'],
    //   category: 'fullstack',
    //   status: 'Completed',
    //   github: '#',
    //   demo: '#',
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: 'Mobile App Project',
    //   description: 'Mobile application description',
    //   fullDescription: 'Details about your mobile app project.',
    //   image: 'https://via.placeholder.com/800x400/20c997/ffffff?text=Mobile+App',
    //   tags: ['React Native', 'Firebase'],
    //   category: 'mobile',
    //   status: 'In Progress',
    //   github: '#',
    //   demo: '#',
    //   featured: false
    // },
    // Add more projects as needed...
    // {
    //   id: 4,
    //   title: 'Project 4',
    //   description: 'Description',
    //   fullDescription: 'Full description',
    //   image: 'image-url',
    //   tags: ['Tech1', 'Tech2'],
    //   category: 'web',
    //   status: 'Completed',
    //   github: '#',
    //   demo: '#',
    //   featured: false
    // }
  ];
  // =============== END OF PROJECTS ARRAY ===============

  const filters = [
    { id: 'all', label: 'All Projects', icon: 'fa-layer-group' },
    { id: 'web', label: 'Web Apps', icon: 'fa-globe' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'fa-mobile-alt' },
    { id: 'fullstack', label: 'Full Stack', icon: 'fa-code' },
    { id: 'featured', label: 'Featured', icon: 'fa-star' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // If no projects added yet, show placeholder
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="display-5 fw-bold mb-3">
                My <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted lead mb-4">
                Add your projects in the Projects.js file
              </p>
            </Col>
          </Row>
          <div className="text-center py-5">
            <div className="display-1 text-muted mb-3">
              <i className="fas fa-code"></i>
            </div>
            <h4 className="mb-3">No Projects Added Yet</h4>
            <p className="text-muted mb-4">
              Open the Projects.js file and add your projects to the projects array
            </p>
            <Button variant="primary" onClick={() => {
              // You can add a link to documentation or scroll to instructions
              document.querySelector('#projects-instructions')?.scrollIntoView();
            }}>
              View Instructions
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <Badge bg="primary" className="px-3 py-2 mb-3">
            <i className="fas fa-code me-2"></i>
            Portfolio
          </Badge>
          <h2 className="display-4 fw-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            A showcase of my work, highlighting technical skills, problem-solving abilities, and creative solutions
          </p>
          <div className="mx-auto mt-4" style={{ 
            width: '100px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #0d6efd, #6f42c1)' 
          }}></div>
        </div>

        {/* Filter Buttons */}
        <Row className="mb-5">
          <Col xs={12}>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? 'primary' : 'outline-primary'}
                  size="sm"
                  className="px-4 py-2 rounded-pill d-flex align-items-center"
                  onClick={() => setActiveFilter(filter.id)}
                  style={{
                    transition: 'all 0.3s ease',
                    fontWeight: activeFilter === filter.id ? '600' : '400'
                  }}
                >
                  <i className={`fas ${filter.icon} me-2`}></i>
                  {filter.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4 mb-5">
          {filteredProjects.map((project) => (
            <Col lg={6} key={project.id}>
              <Card 
                className="border-0 shadow-lg h-100 project-card"
                style={{ 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onClick={() => openProjectModal(project)}
              >
                <div className="position-relative">
                  <div className="project-image-overlay"></div>
                  <Card.Img 
                    variant="top" 
                    src={project.image}
                    style={{ 
                      height: '220px', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="project-image"
                  />
                  <div className="position-absolute top-0 start-0 p-3">
                    <Badge 
                      bg={project.status === 'Completed' ? 'success' : 
                          project.status === 'In Progress' ? 'warning' : 'secondary'}
                      className="mb-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {project.featured && (
                    <div className="position-absolute top-0 end-0 p-3">
                      <Badge bg="warning" className="featured-badge">
                        <i className="fas fa-star me-1"></i> Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">{project.title}</h5>
                  <p className="text-muted mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="badge bg-light text-dark border px-2 py-1"
                          style={{ 
                            fontSize: '0.75rem',
                            borderRadius: '10px'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <Button 
                      variant="outline-primary"
                      size="sm"
                      className="px-3 rounded-pill"
                    >
                      <i className="fas fa-eye me-2"></i>
                      View Details
                    </Button>
                    <small className="text-muted">
                      <i className={`fas ${
                        project.category === 'mobile' ? 'fa-mobile-alt' :
                        project.category === 'fullstack' ? 'fa-code' : 'fa-globe'
                      } me-1`}></i>
                      {project.category === 'mobile' ? 'Mobile App' : 
                       project.category === 'fullstack' ? 'Full Stack' : 'Web App'}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="cta-card p-5 rounded-4">
            <h3 className="h2 fw-bold mb-3">Want to See More?</h3>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              Check out my GitHub profile for more projects, contributions, and code samples. 
              I'm always working on something new!
            </p>
            <Button 
              variant="primary"
              size="lg"
              className="px-5 py-3 fw-bold"
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(13, 110, 253, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fab fa-github me-2"></i>
              View GitHub Profile
            </Button>
            <p className="text-muted small mt-3">
              <i className="fas fa-code-branch me-1"></i>
              Check out my latest contributions and open-source projects
            </p>
          </div>
        </div>

        {/* Instructions for adding projects */}
        <div id="projects-instructions" className="mt-5 pt-5 border-top">
          <div className="bg-white p-4 rounded-3 border">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-info-circle text-primary me-2"></i>
              How to Add Your Projects
            </h5>
            <ol className="mb-0">
              <li className="mb-2">Open the Projects.js file</li>
              <li className="mb-2">Find the 'projects' array (around line 17)</li>
              <li className="mb-2">Add your project objects following the same structure</li>
              <li className="mb-2">Replace the placeholder images with your project screenshots</li>
              <li>Update your GitHub URL in the button above</li>
            </ol>
          </div>
        </div>
      </Container>

      {/* Project Detail Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <div className="w-100">
                <div className="d-flex align-items-center mb-3">
                  <Badge 
                    bg={selectedProject.status === 'Completed' ? 'success' : 
                        selectedProject.status === 'In Progress' ? 'warning' : 'secondary'}
                    className="me-3"
                  >
                    {selectedProject.status}
                  </Badge>
                  {selectedProject.featured && (
                    <Badge bg="warning">
                      <i className="fas fa-star me-1"></i> Featured
                    </Badge>
                  )}
                </div>
                <Modal.Title className="h3 fw-bold text-dark">
                  {selectedProject.title}
                </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body className="p-0">
              <div className="position-relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-100"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                     style={{
                       background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                     }}>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} bg="light" text="dark" className="px-3 py-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-dark mb-4 lead">{selectedProject.fullDescription}</p>
                
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="bg-light p-3 rounded-3">
                      <h6 className="fw-bold mb-3">
                        <i className="fas fa-cogs text-primary me-2"></i>
                        Technologies
                      </h6>
                      <div className="d-flex flex-wrap gap-1">
                        {selectedProject.tags.map((tag, index) => (
                          <span key={index} className="badge bg-primary bg-opacity-10 text-primary px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="bg-light p-3 rounded-3">
                      <h6 className="fw-bold mb-3">
                        <i className="fas fa-layer-group text-primary me-2"></i>
                        Project Type
                      </h6>
                      <p className="mb-0">
                        <i className={`fas ${
                          selectedProject.category === 'mobile' ? 'fa-mobile-alt' :
                          selectedProject.category === 'fullstack' ? 'fa-code' : 'fa-globe'
                        } me-2`}></i>
                        {selectedProject.category === 'mobile' ? 'Mobile Application' : 
                         selectedProject.category === 'fullstack' ? 'Full Stack Web Application' : 
                         'Web Application'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 p-4">
              <div className="w-100 d-flex justify-content-between">
                {selectedProject.github !== '#' && (
                  <Button 
                    variant="outline-dark"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2"
                  >
                    <i className="fab fa-github me-2"></i>
                    View Code
                  </Button>
                )}
                {selectedProject.demo !== '#' && (
                  <Button 
                    variant="primary"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2"
                    style={{
                      background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                      border: 'none'
                    }}
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    Live Demo
                  </Button>
                )}
                {selectedProject.github === '#' && selectedProject.demo === '#' && (
                  <p className="text-muted mb-0">
                    <i className="fas fa-info-circle me-2"></i>
                    Update links in the projects array to enable buttons
                  </p>
                )}
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Custom CSS */}
      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7));
          z-index: 1;
        }

        .featured-badge {
          animation: pulse 2s infinite;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(111, 66, 193, 0.05));
          border: 1px solid rgba(13, 110, 253, 0.1);
        }

        .project-modal .modal-content {
          border-radius: 20px;
          overflow: hidden;
          border: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default Projects;