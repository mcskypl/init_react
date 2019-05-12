import React from 'react';

import GlobalStyle from '../../theme/GlobalStyle';
import Button from '../../components/Button/Button';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello React</h1>
    <Button>Primary</Button>
    <Button secondary>Secondary</Button>
  </>
);

export default Root;
