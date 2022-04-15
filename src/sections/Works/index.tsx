import React from 'react';
import cn from 'classnames';

import Section from 'components/Section';

import works from 'data/works';

import s from './styles.module.scss';

export default () => (
  <Section icon="briefcase" title="Professional background" className={s.root}>
    {works.map(
      ({
        title,
        company,
        partTime,
        dates,
        address,
        duties,
        tools,
        description
      }) => (
        <div key={`works-${company}`} className={s.block}>
          <h3 className={s.title}>
            {title}
            {partTime && ' (part-time)'} / {company}
          </h3>
          <div className={cn('row', 'row-wrap')}>
            <div className={s.date}>{dates}</div>
            <div className={s.address}>{address}</div>
          </div>
          <div className={cn('row', s.duties)}>
            <span>Duties</span>
            <ul className="grow1">
              {duties.map(duty => (
                <li key={`works-${company}-duties-${duty}`}>{duty}</li>
              ))}
            </ul>
          </div>
          <div className={cn('row', s.tools)}>
            <span>Tools</span>
            <ul className="grow1">
              {tools.map(tool => (
                <li key={`works-${company}-tools-${tool}`}>{tool}</li>
              ))}
            </ul>
          </div>
          <p>{description}</p>
        </div>
      )
    )}
  </Section>
);
