import * as React from 'react';
import { Link } from 'gatsby';
import { Button } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

import MyLayout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <MyLayout>
    <section>

      <div>
        <h2>
          Design
        </h2>
        <h3>
          Develop & deploy
        </h3>
        <p>
          UX designer and Web developer
        </p>
      </div>
    </section>
  </MyLayout>
);

export default IndexPage;
