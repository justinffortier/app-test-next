import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function PortfolioPage() {
  const projects = [
    { title: 'Remax Mexico', category: 'Web Development', image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Dew Tour', category: 'Platform', image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Aura Finance', category: 'FinTech', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'For Days', category: 'E-commerce', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Design Shop Interiors', category: 'Design', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Founder Shield', category: 'InsurTech', image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  return (
    <>
      <section className="py-5 bg-forest-gradient text-white">
        <Container className="py-5">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-700 mb-4 text-white">Our Portfolio</h1>
              <p className="lead opacity-90">
                Explore our successful projects across various industries
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-5">
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="h-100 border-0 shadow-soft overflow-hidden">
                  <div style={{
                    height: '220px',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <Card.Body className="p-4">
                    <Badge bg="primary" className="mb-3">{project.category}</Badge>
                    <h5 className="fw-600 mb-3">{project.title}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
