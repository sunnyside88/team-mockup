import { Layout, Menu, Row, Col, Divider, Avatar, Badge } from "antd";
import SubHeader from "./SubHeader";
import React from "react";
import {
  ContactsFilled,
  WechatFilled,
  HomeFilled,
  GitlabFilled,
  SignalFilled,
  ContainerOutlined,
} from "@ant-design/icons";
import navBarField from "../constant/navBarField";

const NavBar = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider
        style={{ height: "100vh", color: "#042235" }}
        width={80}
        trigger={false}
      >
        <div style={{ textAlign: "center", padding: 10 }}>
          <GitlabFilled style={{ color: "white", fontSize: 25 }}></GitlabFilled>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={navBarField}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Row>
            <Col
              flex={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "grey" }}>NARWHAL</p>
            </Col>
            <Divider type="vertical" style={{ height: "64px" }} />
            <Col flex={1}>
              <p>Teams</p>
            </Col>
            <Col
              flex={3}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingRight: 20,
              }}
            >
              <div style={{ paddingRight: 10 }}>
                <Badge size="small" count={3}>
                  <ContainerOutlined style={{ fontSize: 16 }} />
                </Badge>
              </div>
              <div style={{ paddingRight: 10 }}>
                <p>Hello, John</p>
              </div>
              <div>
                <Avatar
                  size={25}
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                ></Avatar>
              </div>
            </Col>
          </Row>
        </Header>
        <Divider style={{margin:0}}></Divider>
        <SubHeader>
        </SubHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavBar;
