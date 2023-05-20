import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard