import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Remax Mexico',
      description: 'Comprehensive real estate platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Dew Tour',
      description: 'Event management and streaming platform',
      category: 'Platform',
      image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Aura Finance',
      description: 'Financial technology platform',
      category: 'FinTech',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'For Days',
      description: 'Sustainable fashion e-commerce',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Design Shop Interiors',
      description: 'Interior design portfolio platform',
      category: 'Design',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Founder Shield',
      description: 'Insurance technology platform',
      category: 'InsurTech',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-700 mb-3">Featured Work</h2>
            <p className="lead text-muted">
              Explore our portfolio of successful projects
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 shadow-soft overflow-hidden">
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <Card.Body className="p-4">
                  <Badge bg="primary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h5 className="fw-600 mb-3">{project.title}</h5>
                  <p className="text-muted mb-0">
                    {project.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Link href="/portfolio" className="btn btn-outline-primary btn-lg px-5">
              View All Projects
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
