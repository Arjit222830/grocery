import React,{useContext} from 'react';
import { Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {AppContext} from "../State";
import {deleteProduct} from '../actions';

const SubCard = (props) =>{

  const {state, dispatch}=  useContext(AppContext);
  console.log(state);
  
  const styleWidth=()=>{
    if(state.openSidebar)
        return {width:'300px', transition: 'width 1s'};
    
    return {width:'300px', transition: 'width 1s'};
  }

  return (
    <Link to={`/categories/products/${props.id}`} className="col-12 direction">
      <Card  style={styleWidth()}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default SubCard;