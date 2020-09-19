import React from 'react';

import Container from '@material-ui/core/Container';

interface ArticlesLayoutWrapperProps {
  children: JSX.Element | string;
}

export default function ArticlesLayoutWrapper(props: ArticlesLayoutWrapperProps): JSX.Element {
  return <Container maxWidth='sm'>{props.children}</Container>;
}
