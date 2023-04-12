import React, { useCallback } from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';
import useMedia from 'utils/media';

import ThemeSwitcher from 'components/ThemeSwitcher';
import LanguageSwitcher from 'components/LanguageSwitcher';
import Button from 'components/Button';

import enCV from 'assets/pdf/Artur.Blieshcheiev.CV.en.pdf';
import ruCV from 'assets/pdf/Artur.Blieshcheiev.CV.ru.pdf';
import ukCV from 'assets/pdf/Artur.Blieshcheiev.CV.uk.pdf';

import s from './styles.module.scss';

const cv: Record<string, string> = {
  en: enCV,
  ru: ruCV,
  uk: ukCV
};

type Props = {
  className?: string;
};

export default ({ className }: Props): JSX.Element => {
  const { t, language } = useLocales('tools');
  const { isDesktop, isLandscape } = useMedia();
  const handlerDownload = useCallback(() => window.open(cv[language]), [language]);
  return (
    <div className={cn(s.root, className)}>
      <div className={s.buttons}>
        {(isDesktop || isLandscape) && (
          <Button
            icon="print"
            caption={t('print')}
            className={s.print}
            onClick={window.print}
          />
        )}
        <Button
          icon="file-download"
          iconSet="solid"
          caption={t('pdf')}
          onClick={handlerDownload}
        />
      </div>
      <div className={s.tools}>
        <ThemeSwitcher className={s.theme} />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
