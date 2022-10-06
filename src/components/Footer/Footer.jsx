import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './footer-style.css'
import Footercontact from './Footercontact';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class footer extends Component {

    render() {
        return (
            <div className='foot'>
                <Container style={{paddingLeft: '8%'}}>
                    <Row>
                        <Col>
                            <h5 >Company</h5>
                            <ul>
                                <li><a style={{ color: "white", textDecoration: "none" }} href="/providerlogin">Partner with us</a></li>
                                <li><a style={{ color: "white", textDecoration: "none" }} href="/batterydetails">Battery Details</a></li>
                                <li><a style={{ color: "white", textDecoration: "none" }} href="/battery">Battery </a></li>

                            </ul>

                        </Col>
                        <Col>
                            <h5>Consumer</h5>
                            <ul>
                                <li><a style={{ color: "white", textDecoration: "none" }} href="/blog">Profile</a></li>

                            </ul>

                        </Col>

                        <div className='col-md-6 col-xs-6'>
                            <Footercontact />

                        </div>
                    </Row>


                </Container>
                    <div class="footer_copyright container d-flex justify-content-center">
                        <ul style={{textDecoration: "none" }}>
                            <li><a href="/home" style={{textDecoration: "none", color: 'white'}}>Privacy Policy |</a></li>
                            <li><a href="/home" style={{textDecoration: "none", color: 'white'}}>Terms of Use |</a></li>
                            <li><a href="/home" style={{textDecoration: "none", color: 'white'}}>Refund Policy |</a></li>
                            <li>© EV Charge   </li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>


            </div>






        );
    }
}

export default footer;