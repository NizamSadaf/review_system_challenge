import React, { useEffect, useState } from 'react'
import dummyData from '../../assets/Data/DummyData'
import ReviewCard from '../Review/ReviewCard'
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const AllReview = () => {
  const [reviews,setData]=useState([])
  const [newReview,setNewReview]=useState([])
  //Adding New Reviews and storing in the localstorage
  const handlReview=(updateReview)=>{
    setNewReview([updateReview,...newReview])
  }
  localStorage.setItem('newReview', JSON.stringify(newReview));
  //Store all the services in localstorage
  useEffect(()=>{
    localStorage.setItem('reviews', JSON.stringify(dummyData));
  },[])
  //Parsing the stored data
  useEffect(()=>{
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    if(reviews)
      setData(reviews)
  },[reviews.rating])
  return (
    <Box>
      <Typography variant="h4" align='center' gutterBottom>Services</Typography>
      <Grid container spacing={1} columns={{ xs: 1, sm: 8, md: 12 }}>
        {reviews.map((review) => (
          <Grid item key={review.id} size={{ xs: 1, sm: 4, md: 4 }}>
            {/* Card  */}
              <ReviewCard review={review} handlReview={handlReview} newReview={newReview}/>
          </Grid>
       
      ))}

      </Grid>
    </Box>
     
  )
}

export default AllReview