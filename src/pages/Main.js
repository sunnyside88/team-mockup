import { Layout, Menu, Row, Col, Divider, Avatar, Badge } from "antd";
import SubHeader from "../components/SubHeader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GitlabFilled, ContainerOutlined } from "@ant-design/icons";
import navBarField from "../constant/navBarField";
import TeamContent from "../components/TeamContent";
import ActivityContent from "../components/ActivityContent";

const Main = () => {
  const { Header, Sider } = Layout;
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://sunnyside88.github.io/sample-json/data/sample.json";
        let res = await axios.get(url);
        setCurrentUser(res.data.current_user);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Sider style={{ color: "#042235" }} width={80} trigger={false}>
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
            <Col
              flex={1}
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <h3>Teams</h3>
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
                <Badge size="small" count={currentUser.notifications_count}>
                  <ContainerOutlined style={{ fontSize: 16 }} />
                </Badge>
              </div>
              <div style={{ paddingRight: 10 }}>
                <p>Hi, {currentUser.name}</p>
              </div>
              <div>
                <Avatar
                  size={25}
                  src={currentUser.avatar}
                ></Avatar>
              </div>
            </Col>
          </Row>
        </Header>
        <Divider style={{ margin: 0 }}></Divider>
        <SubHeader></SubHeader>
        <Row>
          <Col>
            <TeamContent></TeamContent>
          </Col>
          <Col>
            <ActivityContent></ActivityContent>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Main;
