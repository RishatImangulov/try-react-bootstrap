import React from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";

export default function NaviBar() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">>Home</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant={"primary"}>Log In</Button>
                        <Button variant={"primary"}>Sign</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>)
}