import React, { useContext } from 'react'
import { Context } from './Context'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Navbar, OverlayTrigger, Popover, Image } from 'react-bootstrap'

import avatar from '../images/user.png'

const Header = () => {
    const { login, setLogin } = useContext(Context)

    const handleLogout = (e) => {
        e.preventDefault()

        setLogin({ status: false, user: {} })    
    }
    
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Hello {login.user.userName}</Popover.Title>
            <Popover.Content>
                <button onClick={handleLogout}>log out</button>
            </Popover.Content>
        </Popover>
    )

    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <Navbar className="justify-content-between">
                            <Navbar.Brand>
                                <Link to="/">The Personal Journal App</Link>
                            </Navbar.Brand>
                            {login.status ?
                            (
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={popover}
                                >
                                    <Navbar.Text>
                                        <Image src={avatar} roundedCircle alt="avatar" />
                                    </Navbar.Text>
                                </OverlayTrigger>
                            ) : (
                                ''
                            )}
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header