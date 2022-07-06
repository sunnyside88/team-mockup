import { Menu } from "antd";

const MenuBar = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["all"]}>
      <Menu.Item key="all">
        All
      </Menu.Item>
      <Menu.Item key="favorites" >
        Favorites
      </Menu.Item>
      <Menu.Item key="archieved">
        Archieved
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
