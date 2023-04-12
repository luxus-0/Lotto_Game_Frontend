import { t } from 'i18next';
import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ErrorMessage } from '../../components/ErrorMessage';
import { GoToLink } from '../../components/GoToLink';
import { PageHeader } from '../../components/PageHeader';
import { useApi } from '../../composables/useApi';
import {
  Container,
  Input,
  LinksContainer,
  NumbersLoadingMessage,
} from './CheckResultsPage.styles';

export const CheckResultsPage = () => {
  const [ticketId, setTicketId] = useState('');
  const [isLoading] = useState(false);
  const { getResults, getRequestError } = useApi();

  return (
    <>
      <PageHeader>
        <h2>{t('checkResultsMessage')}</h2>
        <p>{t('drawNumbers1Message')}&nbsp;</p>
        <NumbersLoadingMessage>
          {isLoading ? t('waitingMessage') : ''}
        </NumbersLoadingMessage>
      </PageHeader>
      <Card>
        <Container>
          <p>{t('insertIdMessage')}</p>
          <Input
            type="text"
            required
            onChange={(event) => setTicketId(event.target.value)}
          />

          <Button type="button" onClick={() => getResults(ticketId)}>
            {t('submitMessage')}
          </Button>
          <ErrorMessage>{getRequestError ? t('errorMessage') : ''}</ErrorMessage>
        </Container>
      </Card>
      <LinksContainer>
        <GoToLink to="/ticket" isbacklink="true">
          <span>{'<'}</span> {t('backToTicketMessage')}
        </GoToLink>
      </LinksContainer>
    </>
  );
};
