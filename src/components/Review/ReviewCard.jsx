/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaEuroSign } from "react-icons/fa";
import { Box,Stack } from '@mui/material';
import DialogueBox from '../DialogBox/DialogueBox';
import SingleReview from '../SingleServiceReview/SingleReview';

const ReviewCard = ({review,handlReview}) => {
    const [toggle,setToggle]=useState(false)
    const show_hide=(e)=>{
        setToggle(!toggle)
    }
    //Add review dialogue box
    const [open,setOpen]=useState(false)
    const showDialogue=()=>{
        setOpen(true)
    }
    const closeDialogue=()=>{
        setOpen(false)
    }
    //all reviews dialogue box
    const [showReview,setShowReview]=useState(false)
    const showReviewDialogue=()=>{
        setShowReview(true)
    }
    const closeReviewDialogue=()=>{
        setShowReview(false)
    }
  return (
    <Card sx={{ minWidth: 400, minHeight:300 }}>
    <CardContent>
      <Typography gutterBottom variant='h6'>
       {review.name}
      </Typography>
      <Typography variant="" sx={{ color: 'text.secondary', fontSize: 14 }} component="div">
        Provided By: {review.providedBy ? review.providedBy:""}
      </Typography>
      <Typography variant="" sx={{ color: 'text.secondary', fontSize: 14 }} component="div">
        Description: {review.description ? review.description:"No description"}
      </Typography>
      { toggle ?
      (
        <Box   backgroundColor={'#f0f5fc'} m={2} p={1} height={100}>
        <Stack direction="row" >
            <Stack>
                <p>{review.opensOn}</p>
                <p>{review.time}</p>
            </Stack>

        <hr className="MuiDivider-root"></hr>
            <Stack>
                <p><FaEuroSign size={9}/>{review.price}</p>
                <p>per hour</p>
            </Stack>
        </Stack>
      </Box> ) :
      (
        ""
      )}
      
      <Typography variant="" sx={{ color: 'text.secondary', fontSize: 14 }} component="div">
         {review.category ? review.category:""}
      </Typography>
      <Typography variant="" sx={{ color: 'text.secondary', fontSize: 14 }} component="div">
        Start at <FaEuroSign size={9}/>{review.price ? review.price:""}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={show_hide}>Show More</Button>
    </CardActions>
    <CardActions>
      <Button style={{backgroundColor:'#c45e10'}} variant='contained' onClick={showReviewDialogue}>Show Review</Button>
      {showReview? <SingleReview open={showReview} close={closeReviewDialogue} review={review}/> : ""}
    </CardActions>
    <CardActions>
      <Button style={{backgroundColor:'#c45e10'}} variant='contained' onClick={showDialogue}>Add Review</Button>
      {open? <DialogueBox open={open} close={closeDialogue} review={review} handlReview={handlReview}/> : ""}
    </CardActions>
  </Card>
  )
}

export default ReviewCard