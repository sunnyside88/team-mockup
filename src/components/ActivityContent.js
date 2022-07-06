import { Layout, Card, Avatar } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const ActivityContent = () => {
  const { Content } = Layout;
  const [activity, setActivity] = useState([]);

  const stringFormatter = (item) => {
    if (item.action === "increased_quota") {
      return (
        <p>
          <b>{item.person.name} </b>incresed <b>{`${item.target}`}</b>'s quota'
          <h5>{item.created_at}</h5>
        </p>
      );
    } else if (item.action === "added_leads") {
      return (
        <p>
          <b>{item.person.name} </b>added new leads to <b>{`${item.target}`}</b>
          <h5>{item.created_at}</h5>
        </p>
      );
    } else if (item.action === "archived_team") {
      return (
        <p>
          <b>{item.person.name} </b>archieved the team <b>{`${item.target}`}</b>
          <h5>{item.created_at}</h5>
        </p>
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://sunnyside88.github.io/sample-json/data/sample.json";
        let res = await axios.get(url);
        setActivity(res.data.activities);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Card
        title="Activity"
        bodyStyle={{ alignItems: "center", justifyContent: "center" }}
        style={{ width: 250 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {activity.map((item, i) => {
            return (
              <div style={{ display: "flex", flexDirection: "row"}}>
                <Avatar
                  shape="round"
                  src={item.person.avatar}
                  size={50}
                  style={{marginRight:10}}
                ></Avatar>
                <div>{stringFormatter(item)}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </Content>
  );
};

export default ActivityContent;
