import { Container, Row, Col } from 'react-bootstrap';

export default function Clients() {
  const clients = [
    { name: 'National University', logo: 'NU' },
    { name: 'Dew Tour', logo: 'DT' },
    { name: 'Remax Mexico', logo: 'RM' },
    { name: 'Founder Shield', logo: 'FS' },
    { name: 'Milken Institute', logo: 'MI' },
    { name: 'For Days', logo: 'FD' }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f5f0e8' }}>
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-6 fw-700 mb-3">Trusted by Leading Organizations</h2>
            <p className="text-muted">
              We partner with innovative companies to deliver exceptional results
            </p>
          </Col>
        </Row>

        <Row className="g-4 align-items-center justify-content-center">
          {clients.map((client, index) => (
            <Col lg={2} md={3} sm={4} xs={6} key={index}>
              <div
                className="d-flex align-items-center justify-content-center p-4 rounded"
                style={{
                  height: '100px',
                  background: '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="text-center">
                  <div
                    className="fw-700 mb-1"
                    style={{
                      fontSize: '1.5rem',
                      color: '#2d5016',
                      letterSpacing: '2px'
                    }}
                  >
                    {client.logo}
                  </div>
                  <div
                    className="text-muted"
                    style={{ fontSize: '0.7rem' }}
                  >
                    {client.name}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
