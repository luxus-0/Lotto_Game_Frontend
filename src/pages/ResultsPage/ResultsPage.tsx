import { t } from 'i18next';
import React from 'react';

import { Card } from '../../components/Card';
import { GoToLink } from '../../components/GoToLink';
import { useApi } from '../../composables/useApi';
import { LinksContainer, ResultsContainer } from './ResultsPage.styles';

export const ResultsPage = () => {
  const {
    responseDto: { isWinner, hitNumbers, numbers, wonNumbers },
  } = useApi().lotteryResults;
  const {
    lotteryResults: { message },
  } = useApi();

  const convertArray = (arr: number[]) => {
    if (!arr) return;
    else return arr.join(', ');
  };
  console.log(useApi().lotteryResults);
  return (
    <>
      <Card>
        {message === null ||
        message === 'Results are being calculated, please come back later' ? (
          <div>{t('goBackAndDrawMessage')}</div>
        ) : (
          <ResultsContainer>
            {!isWinner ? (
              <h2>{t('noWinMessage')}</h2>
            ) : (
              <>
                <h2>{t('youWinMessage')}</h2>
                <p>{t('thanksToYouMessage')}</p>
              </>
            )}
            <ul>
              <li>
                {t('winningNumbersMessage')} {convertArray(wonNumbers)}
              </li>
              <li>
                {t('yourNumbersMessage')} {convertArray(numbers)}
              </li>
              <li>
                {t('matchedNumbersMessage')} {convertArray(hitNumbers)}
              </li>
            </ul>
          </ResultsContainer>
        )}
      </Card>
      <LinksContainer>
        <GoToLink to="/checkResults" isbacklink="true">
          <span>{'<'}</span> {t('checkResultsMessage')}
        </GoToLink>
      </LinksContainer>
    </>
  );
};
