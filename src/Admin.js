import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from './pages/Dashnoard';
import UserList from './pages/UserList';
import SideMenu from './components/SideMenu';
import BreadcrumbMe from './components/BreadcrumbMe';
import HeaderMe from './components/HeaderMe';
import ErrorLog from './pages/ErrorLog';
import AuthLog from './pages/AuthLog';
import Threats from './pages/Theats';

const { Header, Content, Footer } = Layout;

const Admin = (props) => {
  const { isLogin } = props;
  useEffect(() => {
    if (!isLogin) {
      props.history.push('/login');
    }
  }, [isLogin]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: '0 5%' }}
        >
          <HeaderMe />
        </Header>
        <Switch>
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbMe />
            <div style={{ padding: 24, minHeight: 560, margin: '16px 0' }}>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/userlist" component={UserList} />
              <Route path="/threats" component={Threats} />
              <Route path="/logs/errorlog" component={ErrorLog} />
              <Route path="/logs/authlog" component={AuthLog} />
            </div>
          </Content>
        </Switch>
        <Footer style={{ textAlign: 'center' }}>
          React Admin Template with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(Admin);
