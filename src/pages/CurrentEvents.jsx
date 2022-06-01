import React, {useState} from 'react'
import { useGetCurrentEventsQuery } from '../services/CurrentEventsApi'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { BoxCard } from '../components/Sidebar/style';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));


const CurrentEvents = () => {
  const { data: currentEventsData, isLoading, error, isError } = useGetCurrentEventsQuery();
  const [expanded, setExpanded] = useState(false);

  if(isLoading) return 'Loading...' 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  
  return (
      <BoxCard>
      {currentEventsData?.slice(0, 12)?.map((item) => (
          <Card sx={{ maxWidth: 345 }} style={{margin: '10px'}} key={item.id}>
          <CardHeader
            
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={item.user.profile_image.medium} alt="" />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${item.user.name}`}
            subheader={moment(item.updated_at).calendar()}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.urls.regular}
            alt="img"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`Total Photos: ${item.user.total_photos}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing
            style={{ backgroundColor: ' #252846', color: '#fff'}}
          >
            <IconButton aria-label="add to favorites" style={{ color: '#fff'}}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" style={{ color: '#fff'}}>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{ backgroundColor: 'rgb(228 109 37)', color: '#fff'}}
            >
              <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
      </Card>
      ))}
    </BoxCard>
  )
}

export default CurrentEvents