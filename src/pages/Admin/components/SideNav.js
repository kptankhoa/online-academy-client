import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import { FaGem, FaHeart } from 'react-icons/fa';
import 'pages/Admin/styles/sidebar.styles.scss';
import { Link } from 'react-router-dom';
import Logo from 'components/domain/menu/logo/Logo';
const SideNav = () => {
  return (
    <>
      <ProSidebar>
        <SidebarHeader className="border-0 p-2">
            <Logo/>
        </SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem icon={<FaGem color="white"/>}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaHeart color="white"/>}>
            <MenuItem>
              <Link to="/" >Home</Link>
            </MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default SideNav;
