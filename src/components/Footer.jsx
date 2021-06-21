import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">&copy; 2021 Eric and Carlos</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer