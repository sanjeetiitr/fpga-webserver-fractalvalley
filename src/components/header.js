import React, { Component } from "react";
import { Col, Row, Dropdown, Menu, Icon, Avatar } from "antd";
import {Link} from 'react-router-dom';
import { Button } from "antd/lib/radio";


export class HeaderComp extends Component {

  render() {
    return (
      <div className="header-mp">
        <Row>
          <Col
            sm={{ span: 4, offset: 1 }}
            mg={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
          >   
              <Link to='/'>
              <div className="logo-mp" />
              </Link>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 8 }}
            mg={{ span: 2, offset: 8 }}
            lg={{ span: 2, offset: 8 }}
            xl={{ span: 2, offset: 8 }}
          >
            <p style={{textAlign : "center"}}>About</p>
          </Col>
          {/* <Col
            sm={{ span: 2, offset: 1 }}
            mg={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
          >
            <span style={{textAlign : "center"}}>Docs</span>
          </Col> */}
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 0 }}
            mg={{ span: 2, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
          >
            <p style={{textAlign : "center"}}>Community</p>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 1 }}
            mg={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
          >
            <Button className="exp-btn">Explorer</Button>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 0 }}
            mg={{ span: 2, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            style={{ textAlign: "center" }}
          >
            <Button style={{textAlign : "center"}} className="login-btn">Login</Button>
            {/* <Avatar className="profile-img-mp">
              <span style={{ fontSize: "1rem", textTransform: "capitalize" }}>
                Sanjeet
              </span>
            </Avatar> */}
          </Col>
          {/* <Col
            sm={{ span: 3, offset: 0 }}
            mg={{ span: 3, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
            xl={{ span: 3, offset: 0 }}
            style={{ cursor: "pointer" }}
          >
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <p>Logout</p>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <h3 style={{ marginTop: "15px" }}>
                Sanjeet
                <Icon className="profile-icon-mp" type="down" />
              </h3>
            </Dropdown>
          </Col> */}
        </Row>
      </div>
    );
  }
}
