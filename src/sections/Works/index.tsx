import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import Section from 'components/Section';

import works from 'data/works';

import s from './styles.module.scss';

export default () => {
  const { t, l } = useLocales('sections.works');
  return (
    <Section icon="briefcase" title={t('title')} className={s.root}>
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
        }) => {
          const langCompany = l(company);
          return (
            <div key={`works-${langCompany}`} className={s.block}>
              <h3 className={s.title}>
                {title}
                {partTime && ` (${t('part')})`} / {langCompany}
              </h3>
              <div className={cn('row', 'row-wrap')}>
                <div className={s.date}>{l(dates)}</div>
                <div className={s.address}>{l(address)}</div>
              </div>
              <div className={s.lists}>
                <div className={s.listTitle}>{t('duties')}</div>
                <ul className={cn('grow1', s.duties)}>
                  {duties.map(duty => {
                    const langDuty = l(duty);
                    return (
                      <li key={`works-${langCompany}-duties-${langDuty}`}>
                        {langDuty}
                      </li>
                    );
                  })}
                </ul>
                <div className={s.listTitle}>{t('tools')}</div>
                <ul className={cn('grow1', s.tools)}>
                  {tools.map(tool => {
                    const langTool = l(tool);
                    return (
                      <li key={`works-${langCompany}-tools-${langTool}`}>
                        {langTool}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p>{l(description)}</p>
            </div>
          );
        }
      )}
    </Section>
  );
};
