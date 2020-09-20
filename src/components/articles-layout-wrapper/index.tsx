import React from 'react';

import Container from '@material-ui/core/Container';

interface ArticlesLayoutWrapperProps {
  children: JSX.Element[] | JSX.Element | string;
}

export default function ArticlesLayoutWrapper(props: ArticlesLayoutWrapperProps): JSX.Element {
  return (
    <Container maxWidth='sm'>
      <div className='articles-wrapper'>{props.children}</div>
    </Container>
  );
}
