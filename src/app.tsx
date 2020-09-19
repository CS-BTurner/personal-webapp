import React from 'react';

import './sass/styles.scss';

import Article from './components/article';
import ArticlesLayoutWrapper from './components/articles-layout-wrapper';

export default function App(): JSX.Element {
  return (
    <div className='main-layout'>
      <header>Header</header>
      <ArticlesLayoutWrapper>
        <Article title='Article' />
      </ArticlesLayoutWrapper>
    </div>
  );
}
