import React, { useContext } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { AiOutlineUnorderedList, MdDashboard } from 'react-icons/all';
import { FaUser, FaChalkboardTeacher, FaHeart } from 'react-icons/fa';
import 'pages/Admin/styles/sidebar.styles.scss';
// import { Link } from 'react-router-dom';
import Logo from 'components/domain/menu/logo/Logo';
import UserInfoCard from 'components/common/card/userInfoCard/UserInfoCard';
import { authContext } from 'provider/authProvider';

const SideNav = () => {
  const { authState } = useContext(authContext);
  const { userInfo } = authState;
  return (
    <>
      <ProSidebar>
        <SidebarHeader className='border-0 p-3'>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          {userInfo && (
            <div className='px-3'>
              <UserInfoCard avatar={userInfo.avatar} name={userInfo.fullName} email={userInfo.email}/>
            </div>
          )}
          <Menu iconShape='circle'>
            <MenuItem icon={<MdDashboard />}>Dashboard</MenuItem>
            <MenuItem icon={<AiOutlineUnorderedList />}>Categories</MenuItem>
            <MenuItem icon={<MdDashboard />}>Courses</MenuItem>
            <MenuItem icon={<FaUser />}>Users</MenuItem>
            <MenuItem icon={<FaChalkboardTeacher />}>Lecturers</MenuItem>

            {/*<SubMenu title='Components' icon={<FaHeart />}>*/}
            {/*  <MenuItem>*/}
            {/*    <Link to='/'>Home</Link>*/}
            {/*  </MenuItem>*/}
            {/*  <MenuItem>Component 2</MenuItem>*/}
            {/*</SubMenu>*/}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

export default SideNav;
