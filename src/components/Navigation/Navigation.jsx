import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm" expanded={expanded}>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="fw-700 fs-4" style={{ color: '#2d5016' }}>
            FYC Labs
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
            </Link>
            <Link href="/services" passHref legacyBehavior>
              <Nav.Link onClick={() => setExpanded(false)}>Services</Nav.Link>
            </Link>
            <Link href="/portfolio" passHref legacyBehavior>
              <Nav.Link onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link onClick={() => setExpanded(false)}>About</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link onClick={() => setExpanded(false)} className="ms-lg-2">
                <span className="btn btn-primary btn-sm">Get Started</span>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
