import React, { Component } from "react";
import { Col, Row, Dropdown, Menu, Icon, Avatar } from "antd";
import {Link} from 'react-router-dom';


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
            sm={{ span: 8, offset: 2 }}
            mg={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
            xl={{ span: 8, offset: 2 }}
          >
          </Col>
          <Col
            sm={{ span: 1, offset: 4 }}
            mg={{ span: 1, offset: 4 }}
            lg={{ span: 1, offset: 4 }}
            xl={{ span: 1, offset: 4 }}
            style={{ textAlign: "center" }}
          >
            <Avatar className="profile-img-mp">
              <span style={{ fontSize: "1rem", textTransform: "capitalize" }}>
                Sanjeet
              </span>
            </Avatar>
          </Col>
          <Col
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
          </Col>
        </Row>
      </div>
    );
  }
}
