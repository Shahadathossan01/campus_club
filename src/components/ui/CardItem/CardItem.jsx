import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem=({item,precident=false})=>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {
          precident?<CardMedia
          component="img"
          height="140"
          image={`http://localhost:1337${item.attributes.president_image.data[0].attributes.url}`}
          alt="green iguana"
        />:
        <CardMedia
        component="img"
        height="140"
        image={`http://localhost:1337${item.attributes.vice_president_image.data[0].attributes.url}`}
        alt="green iguana"
      />
        }
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              precident?'president':'vice-president'
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>Name:
              {
                precident?item.attributes.president_name:item.attributes.vice_president_name
              }
            </h3>
            <h3>
              Department:
              {
                precident?item.attributes.president_department:item.attributes.vice_president_department
              }
            </h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardItem;