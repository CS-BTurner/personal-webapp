import React from 'react';
import { navigate } from '@reach/router';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface ArticleProps {
  id: string;
  title: string;
  shortDescription: string;
}

export default function Article(props: ArticleProps): JSX.Element {
  return (
    <Card className=''>
      <CardActionArea>
        <CardMedia className='' image='/static/images/cards/contemplative-reptile.jpg' title='Contemplative Reptile' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary' onClick={() => navigate(`:${props.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
