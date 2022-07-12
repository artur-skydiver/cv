import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Transition from 'components/Transition';

import works from 'data/works';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.works');
  return (
    <Section icon="briefcase" title={t('title')} className={s.root}>
      {works.map(
        (
          {
            title,
            company,
            partTime,
            dates,
            address,
            duties,
            tools,
            description
          },
          index
        ) => {
          const mainKey = `works-${index.toString()}`;
          return (
            <div key={mainKey} className={s.block}>
              <Transition
                node="h3"
                className={s.title}
                text={`${title} ${partTime ? ` (${t('part')})` : ''} / ${l(
                  company
                )}`}
              />
              <div className={cn('row', 'row-wrap')}>
                <Transition className={s.date} text={dates} />
                <Transition className={s.address} text={address} row right />
              </div>
              <div className={s.lists}>
                <Transition className={s.listTitle} text={t('duties')} row />
                <ul className={cn('grow1', s.duties)}>
                  {duties.map((duty, dutyIndex) => (
                    <Transition
                      key={`${mainKey}-duties-${dutyIndex.toString()}`}
                      node="li"
                      text={`– ${l(duty)}`}
                    />
                  ))}
                </ul>
                <Transition className={s.listTitle} text={t('tools')} row />
                <ul className={cn('grow1', s.tools)}>
                  {tools.map(tool => (
                    <li key={`${mainKey}-tools-${tool}`}>{tool}</li>
                  ))}
                </ul>
              </div>
              <Transition paragraph text={description} />
            </div>
          );
        }
      )}
    </Section>
  );
};
