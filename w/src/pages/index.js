/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

import HomepageFeatures from '../components/HomepageFeatures';
import HeroBanner from '../components/HeroBanner';
import Pop from '../components/pop';

import Translate, { translate } from '@docusaurus/Translate';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`欢迎 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/*       <Pop /> */}
      <HeroBanner />
      <HomepageFeatures />

    </Layout>
  );
}
