import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <nav>
      <Row>
        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
          <Link to="/">
            Tech Experiments
          </Link>

        </Col>

        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
          <Link to="/">
            Fitness Blog
          </Link>

        </Col>

        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
          <Link to="/">
            Food
          </Link>

        </Col>

        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
          <Link to="/">
            Misc
          </Link>
        </Col>
      </Row>
    </nav>
  );
}
