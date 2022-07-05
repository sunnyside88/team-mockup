import { PlusOutlined, HomeFilled } from "@ant-design/icons";
import { Layout, Row, Col, Button } from "antd";
import MenuBar from "./MenuBar";

const SubHeader = () => {
  const { Header } = Layout;
  return (
    <div>
      <Header
        className="site-layout-background"
        style={{
          padding: "10px 0px 0px 0px",
          height: "auto",
        }}
      >
        <Row>
          <Col
            flex={3}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                paddingLeft: 40,
                paddingTop: 3,
              }}
            >
              <HomeFilled style={{ color: "grey", fontSize: 30 }} />
            </div>
            <div style={{ paddingLeft: 10 }}>
              <h2>Teams</h2>
            </div>
          </Col>
          <Col
            flex={2}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              paddingRight: 20,
            }}
          >
            <div style={{}}>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ backgroundColor: "#40D2BF", borderColor: "#40D2BF" }}
                size="middle"
              >
                CREATE NEW TEAM
              </Button>
            </div>
          </Col>
        </Row>
      </Header>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          height: "auto",
        }}
      >
        <Row>
          <Col
            flex={3}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                paddingLeft: 20,
              }}
            >
              <MenuBar></MenuBar>
            </div>
          </Col>
          <Col
            flex={2}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              paddingRight: 20,
            }}
          ></Col>
        </Row>
      </Header>
    </div>
  );
};

export default SubHeader;
