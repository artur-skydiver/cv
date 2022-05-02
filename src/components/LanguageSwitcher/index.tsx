import React, { MouseEventHandler, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import cn from 'classnames';
import 'flag-icons';

import { Lang, alphaCodes } from 'localization';

import s from './styles.module.scss';

type Props = {
  className?: string;
};

type ItemProps = {
  lang: Lang;
  onClick?: MouseEventHandler<HTMLInputElement>;
  className?: string;
};

const Item = ({ lang, onClick, className }: ItemProps) => {
  const { i18n } = useTranslation();
  const { name } = i18n.options.resources?.[lang].translation as never;
  const flag = alphaCodes[lang];
  return (
    <label className={cn(s.item, className)}>
      <input
        type="checkbox"
        checked={i18n.language === lang}
        onClick={onClick}
        onChange={useCallback(() => null, [])}
        value={lang}
      />
      <span className={cn(s.flag, 'fi', `fi-${flag}`)} />
      <span>{name}</span>
    </label>
  );
};

export default ({ className }: Props): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLang = useDebouncedCallback(
    ({ target }) => i18n.changeLanguage(target.value),
    500,
    { leading: true }
  );

  const langs = useMemo(
    () => Object.keys(i18n.options.resources || {}),
    []
  ) as Lang[];

  return (
    <div className={cn(s.root, className)}>
      <Item lang={i18n.language as Lang} className={s.value} />
      <div className={s.dropdown}>
        {langs.map(lang => (
          <Item
            key={`language-item-${lang}`}
            lang={lang}
            onClick={changeLang}
          />
        ))}
      </div>
    </div>
  );
};
