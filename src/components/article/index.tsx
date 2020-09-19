import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface ArticleProps {
  title: string;
}

export default function Article(props: ArticleProps): JSX.Element {
  return (
    <Paper>
      <Typography>{props.title}</Typography>
    </Paper>
  );
}
