import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h5 className="fw-700 mb-3 text-white">FYC Labs</h5>
            <p className="text-light opacity-75">
              Top provider of innovative digital solutions for over a decade.
            </p>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-600 mb-3 text-white">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/services" className="text-light opacity-75 text-decoration-none">
                  Engineering
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-light opacity-75 text-decoration-none">
                  Strategy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-light opacity-75 text-decoration-none">
                  Design
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-600 mb-3 text-white">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-light opacity-75 text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio" className="text-light opacity-75 text-decoration-none">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light opacity-75 text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h6 className="fw-600 mb-3 text-white">Connect</h6>
            <p className="text-light opacity-75 mb-0">
              <a href="mailto:hello@fyclabs.com" className="text-light text-decoration-none">
                hello@fyclabs.com
              </a>
            </p>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-25" />

        <Row>
          <Col className="text-center text-light opacity-75">
            <p className="mb-0">
              &copy; {currentYear} FYC Labs. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
