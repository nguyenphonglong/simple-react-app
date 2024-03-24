import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Dropdown, Menu } from 'antd';
import { logout } from '../actions';

const HeaderMe = (props) => {
  const { logOut } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://localhost:3000/dashboard"
        >
          User Info
        </a>
      </Menu.Item>
      <Menu.Item onClick={logOut} danger>
        Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <div>
         User <Avatar
            onClick={(e) => e.preventDefault()}
            className="ant-dropdown-link"
            src="https://images.squarespace-cdn.com/content/v1/588cd03603596e0fcbb9c506/1617229615934-6GV3U8Y2FWM36XI5N4D5/12615589_10207058007601026_2205778955881324420_o.jpg?format=2500w"
          />
        </div>
      </Dropdown>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(HeaderMe);
