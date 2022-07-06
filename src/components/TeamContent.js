import { Layout, Card, Avatar, Tooltip, Button, Divider } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  StarOutlined,
  StarFilled,
  MessageFilled,
  ContactsFilled,
} from "@ant-design/icons";

const TeamContent = () => {
  const { Content } = Layout;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://sunnyside88.github.io/sample-json/data/sample.json";
        let res = await axios.get(url);
        setTeams(res.data.teams);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const gridStyle = {
    width: "30%",
    textAlign: "center",
    margin: 10,
    height: 300,
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
      }}
    >
      <Card
        title="All Teams"
        extra={<h4>{`Showing ${teams.length} out of ${teams.length}`}</h4>}
        bodyStyle={{ alignItems: "center", justifyContent: "center" }}
        style={{ width: 800}}
      >
        {teams.map((item, i) => {   
          return (
            <Card.Grid style={gridStyle}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                  }}
                >
                  <Avatar shape="square" src={item.image} size={50}></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 5,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexGrow: 1,
                    }}
                  >
                    <h4>{item.name}</h4>
                    {item.created_at ? (
                      <h5 style={{ textAlign: "left" }}>
                        Create {item.created_at}
                      </h5>
                    ) : null}
                  </div>
                  <div>
                    <Tooltip title="favorite">
                      <Button
                        type="primary"
                        shape="circle"
                        size="small"
                        style={{
                          backgroundColor: "white",
                          borderColor: "white",
                        }}
                        icon={
                          item.is_favorited === false ? (
                            <StarOutlined style={{ color: "black" }} />
                          ) : (
                            <StarFilled style={{ color: "#F8CE43" }} />
                          )
                        }
                      />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  {<p style={{ textAlign: "left" }}>{item.description}</p>}
                </div>
                <Divider></Divider>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <MessageFilled style={{ fontSize: 16, paddingRight:5 }} />
                    <h5>{`${item.campaigns_count} Campaigns`}</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ContactsFilled style={{ fontSize: 16, paddingRight:5}} />
                    <h5>{`${item.leads_count} Leads`}</h5>
                  </div>
                </div>
              </div>
            </Card.Grid>
          );
        })}
      </Card>
    </Content>
  );
};

export default TeamContent;
