import { Layout, Card, Avatar } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const ActivityContent = () => {
  const { Content } = Layout;
  const [activity, setActivity] = useState([]);
//   const keys = {
//     increased_quota:"'s",
//     added_leads:'to',
//     archived_team:'the',
//   }
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  shape="round"
                  src={item.person.avatar}
                  size={50}
                ></Avatar>
                <div>
                    <p><b>{item.person.name}</b> {item.action.split('_')[0]} <b>{item.target}</b></p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </Content>
  );    
};

export default ActivityContent;
