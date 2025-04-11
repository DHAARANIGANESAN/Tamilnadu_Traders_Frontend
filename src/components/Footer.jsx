import React from "react";
import './Footer.css';
import { Container , Row, Col,ListGroup,ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const Footer=()=>{
    const Year=new Date().getFullYear()
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                    <div className="logo">
                <div>
                <h1 className="text-white">Tamilnadu Traders</h1>
                </div>
                </div>
                <p className="footer_text mt-4"> Tamilnadu Traders is a dedicated supplier of high-quality hardware and electrical components, catering to industries in and around the region. We take pride in delivering reliable products to meet the needs of local businesses and manufacturing units. </p>
            </Col>
                    <Col lg="3">
                        <div className="footer_quick-links">
                          <h4 className="quick_links-title">Top Categories</h4><ListGroup> 
                          <ListGroupItem className="ps-0 border-0 ">
                           <Link to='#'>Switch</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Fan</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Drill Machines</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Paint</Link></ListGroupItem>
                          </ListGroup>
                        </div>
                    </Col>
                    <Col lg="2">
                    <div className="footer_quick-links">
                          <h4 className="quick_links-title">Useful Links</h4>
                          <ListGroup> 
                          <ListGroupItem className="ps-0 border-0 ">
                           <Link to='/shop'>Shop</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='/cart'>Cart</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='/login'>Login</Link></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Privacy Policy</Link></ListGroupItem>
                          </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3 ">
                    <div className="footer_quick-links">
                          <h4 className="quick_links-title">Contact</h4>
                          <ListGroup className="footer_contact"> 
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                           <span style={{marginBottom: '58px' }}><i class="ri-map-pin-fill"></i></span>
                           <p>Tamilnadu Traders - 384 Bhavani Main Road ,Peundurai, Erode.</p></ListGroupItem>
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                          <span style={{marginBottom: '15px' }}><i class="ri-phone-line"></i></span>
                           <p>9842590787</p>
                           </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                          <span style={{marginBottom: '18px' }}><i class="ri-mail-fill"></i></span>
                           <p>tamilnadutraders@gmail.com</p></ListGroupItem>
                          </ListGroup>
                        </div>
                    </Col>
                    </Row>
            </Container>
        </footer>);};
export default Footer;
