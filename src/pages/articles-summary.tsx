import React from 'react';
import { RouteComponentProps } from '@reach/router';

import ArticleCard from '../components/article-card';
import ArticlesLayoutWrapper from '../components/articles-layout-wrapper';

export default function ArticlesSummaryPage(props: RouteComponentProps): JSX.Element {
  const shortDescription =
    ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';

  return (
    <ArticlesLayoutWrapper>
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
      <ArticleCard id='abc' title='Article' shortDescription={shortDescription} />
    </ArticlesLayoutWrapper>
  );
}
