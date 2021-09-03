import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Data preparation',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Data science projects start by asking the right business questions and collecting and preparing data. Success in the later phases is dependent on this early stage.
      </>
    ),
  },
  {
    title: 'Data exploration',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Once your data is in the right format to work with, you can conduct the next phase in the data analysis process. This initial exploration of the dataset is critical.
      </>
    ),
  },
  {
    title: 'Model development',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Here, the data you've prepared is brought into the data science toolset and the results begin to shed some light on previously identified business problems.
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
