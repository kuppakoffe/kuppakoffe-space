/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// import Header from './header';
import './layout.css';

const { Header, Content, Footer } = Layout;
const { SubMenu, ItemGroup, Item } = Menu;

const MyLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          <Menu
            mode="horizontal"
          // defaultSelectedKeys={['1']}
          >
            <SubMenu key="tech" title="Tech Experiments">
              <ItemGroup key="g1">
                <Item key="Development">Development</Item>
                <Item key="Deployment">Deployment</Item>
              </ItemGroup>
            </SubMenu>

            <SubMenu key="fitness" title="Fitness">
              <ItemGroup key="g2">
                <Item key="Workout">Workout</Item>
                <Item key="Cycling">Cycling</Item>
              </ItemGroup>
            </SubMenu>

            <SubMenu key="food" title="Food">
              <ItemGroup key="g3">
                <Item key="Coffee">Coffee</Item>
                <Item key="Cooking">Cooking</Item>
                <Item key="Baking">Baking</Item>
              </ItemGroup>
            </SubMenu>
          </Menu>

        </Header>

        <Content>
          {children}
        </Content>

        <Footer
          style={{ textAlign: 'center' }}
        >
          This is a footer component
        </Footer>
      </Layout>
    </>
  );
};

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyLayout;
