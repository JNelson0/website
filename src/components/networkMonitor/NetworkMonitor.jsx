import React from "react";
import "./NetworkMonitor.scss";
import { Container, Tab, Nav, Col, ListGroup } from "react-bootstrap";
import researchPaper from "../../assets/researchpaper_Nelson_Jared.pdf";

export default function NetworkMonitor() {
  return (
    <div className="networkMonitor" id="NetworkMonitor">
      <Container fluid className="container">
        <h1 className="title">Network Monitoring</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column nav" v>
                <Nav.Item>
                  <Nav.Link eventKey="first">Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Technologies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href={researchPaper}
                    target="_blank"
                    eventKey="third"
                  >
                    Research Paper
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content
                style={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Tab.Pane eventKey="first">
                  <h2>Summary</h2>
                  <p>
                    Real-time network monitoring to detect congestion events and
                    using software-defined networking to make real-time routing
                    adjustments providing quality of service for network needs.
                    Achieved using NTOPNG, Python faucet, and RabbitMQ
                  </p>
                  <h2>How does it work?</h2>
                  <p>
                    Traffic statistics captured by ntopng is sent to Faucet SDN
                    Controller using RabbitMQ message broker. By default, the
                    traffic statistics reported to the controller once in every
                    five seconds. The controller then processes network
                    statistics from each switch in the network to gain insights
                    into capacity and utilization of each link as well as the
                    performance of active flows. This information is finally
                    used to make routing decision to fully benefit from
                    available resources while maintaining QoS demands of
                    critical flows.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Python Faucet</div>
                        Aliqua id cillum eiusmod ullamco dolore eu quis cillum
                        tempor in eu.{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://docs.faucet.nz/en/latest/intro.html"
                        >
                          Python Faucet
                        </a>{" "}
                        Est voluptate Lorem excepteur magna enim amet. Veniam
                        mollit ad est in excepteur mollit eiusmod veniam sit
                        sit. Et adipisicing deserunt esse reprehenderit. Ut non
                        enim adipisicing anim nisi dolor minim laboris cillum
                        reprehenderit quis.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">NTOPNG</div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.ntop.org/products/traffic-analysis/ntop/"
                        >
                          NTOPNG
                        </a>{" "}
                        Labore cillum quis eu ut ullamco veniam cillum enim nisi
                        ex ea anim labore.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">RabbitMQ</div>
                        Eiusmod laboris qui sit occaecat est ea Lorem voluptate
                        nostrud cupidatat anim nostrud velit anim. Quis
                        reprehenderit eu incididunt ipsum ex occaecat mollit
                        mollit fugiat elit quis in adipisicing. Nulla
                        exercitation enim occaecat dolore labore nisi eu sint
                        fugiat ut culpa nisi do.
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="third"
                  style={{
                    marginLeft: " auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <h1>Thank you for reading my research paper</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
        </Tab.Container>
      </Container>
    </div>
  );
}
