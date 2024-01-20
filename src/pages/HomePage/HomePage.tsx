import { useTranslation } from 'react-i18next';

import { GoToLink } from '../../components/GoToLink';
import {
  HomeBanner,
  HomeContent,
  HomeDescription,
  HomeImage,
  HomePlayLinkContainer,
} from './HomePage.styles';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeBanner>
        <HomeContent>
          <h1>
            <span>{t('lotteryMessage')}</span> {t('takePartMessage')}{' '}
            <span>{t('goodMessage')}</span>
          </h1>
        </HomeContent>
        <HomeImage>
          <img alt="LOTTO GAME" src="lotto.jpg" />
        </HomeImage>
      </HomeBanner>
      <HomePlayLinkContainer>
        <GoToLink to="/play">
          {t('playMessage')} <span>{'>'}</span>
        </GoToLink>
      </HomePlayLinkContainer>
      <HomeDescription>
        <h3>{t('howToPlayMessage')}</h3>
        <ul>
          <div>{t('thisIsSimpleMessage')}</div>
          <li>{t('step1Message')}</li>
          <li>{t('step2Message')}</li>
          <li>{t('step3Message')}</li>
          <li>{t('step4Message')}</li>
          <li>{t('step5Message')}</li>
        </ul>

        <h3>{t('rewardsMessage')}</h3>
        <p>{t('rewardsDescriptionMessage')}</p>
      </HomeDescription>
    </>
  );
};
