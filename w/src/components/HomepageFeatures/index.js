/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
// eslint-disable-next-line header/header
import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '简单',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        阅读，优化和设计微课程，简单直观，可轻松扩展。易于安装。
      </>
    ),
  },
  {
    title: '快速',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <em>微微</em> 让您专注于您的课程，而我们会做这些家务。只需将您的课程移动到<code>docs</code>目录中,并发布。
        并用于让课程快速启动和运行
      </>
    ),
  },
  {
    title: '可扩展',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        通过新的技术 扩展或自定义您的课程布局。<em>微微</em> 可以在重用相同的页面同时进行扩展.
      </>
    ),
  },
  {
    title: '版本控制',
    imageUrl: 'img/undraw_version_control.svg',
    description: (
      <>
        支持课程所有版本的用户。文档版本控制可帮助您使课程与课程发布保持同步。
      </>
    ),
  },
  {
    title: '全文搜索',
    imageUrl: 'img/undraw_algolia.svg',
    description: (
      <>
        让您的社区可以轻松地在您的课程中找到他们需要的内容。
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="featureImage">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="featureHeading">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <main>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, imageUrl, description }) => (
                <Feature
                  key={title}
                  title={title}
                  imageUrl={imageUrl}
                  description={description}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
