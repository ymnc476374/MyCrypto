import React from 'react';

import { storiesOf } from '@storybook/react';

import { NETWORKS } from '@database';
import { Network as INetwork, NetworkId } from '@types';

import AppProviders from '../../../AppProviders';
import NetworkNodes from './NetworkNodes';

const emptyNetworks: INetwork[] = [];

const ethereumId: NetworkId = 'Ethereum';
const ropstenId: NetworkId = 'Ropsten';
const someNetworks: INetwork[] = [NETWORKS[ethereumId], NETWORKS[ropstenId]];

const toggleFlipped = () => undefined;
const toggleNetworkCreation = () => undefined;

const networkNodesEmpty = () => (
  <div className="sb-container" style={{ width: '100%', maxWidth: '900px' }}>
    <NetworkNodes
      networks={emptyNetworks}
      toggleFlipped={toggleFlipped}
      toggleNetworkCreation={toggleNetworkCreation}
    />
  </div>
);

const someNetworkNode = () => (
  <div className="sb-container" style={{ width: '100%', maxWidth: '900px' }}>
    <NetworkNodes
      networks={someNetworks}
      toggleFlipped={toggleFlipped}
      toggleNetworkCreation={toggleNetworkCreation}
    />
  </div>
);

storiesOf('NetworkNodes', module)
  .addDecorator((story) => <AppProviders>{story()}</AppProviders>)
  .add('Empty', () => networkNodesEmpty(), {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/BY0SWc75teEUZzws8JdgLMpy/%5BMyCrypto%5D-GAU-Master?node-id=1522%3A93762'
    }
  })
  .add('Some networks', () => someNetworkNode(), {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/BY0SWc75teEUZzws8JdgLMpy/%5BMyCrypto%5D-GAU-Master?node-id=1522%3A93762'
    }
  });
