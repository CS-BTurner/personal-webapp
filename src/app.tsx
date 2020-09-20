import React from 'react';
import { Router } from '@reach/router';

import './sass/styles.scss';

import ArticlePage from './pages/article';
import ArticlesSummaryPage from './pages/articles-summary';

export default function App(): JSX.Element {
  return (
    <>
      <div className='main-layout'>
        <header className='app-header'>Header</header>
        <Router>
          <ArticlesSummaryPage path='/' />
          <ArticlePage path='/:articleId' />
        </Router>
      </div>

      <div className='underlay pink-underlay'></div>
      <div className='underlay green-underlay'></div>
    </>
  );
}
