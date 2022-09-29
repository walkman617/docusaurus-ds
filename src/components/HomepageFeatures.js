import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '数据科学',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        数据科学是使用诸如统计、机器学习、数据挖掘和预测性分析等方法从海量数据中提取知识的实践方法。
      </>
    ),
  },
  {
    title: '数据科学从业者',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        使用高级数据科学方法和工具，利用统计科学、机器学习技术和特定于行业的数据集来实施独特的数据模型，从而解决各行各业中极具挑战的各种难题。
      </>
    ),
  },
  {
    title: '设计思维',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        设计思维允许数据科学家等专家以通用语言与各种利益相关者（非专家）进行交流，以便在开始工作之前调整、构思和建立同理心并可视化结果。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
