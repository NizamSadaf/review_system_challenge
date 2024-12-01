import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Dialog,DialogActions,DialogContentText,DialogTitle,DialogContent,Button, Stack, TextField} from '@mui/material'
const DialogueBox = ({open, close, review,handlReview }) => {
    const {id,name}=review
    const [selectedValue, setSelectedValue] = useState(null)
    const [comment, setComment] = useState(null)

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const updateReview={
            postId:id,
            reviewId:Date.now(),
            comment,
            rating:selectedValue,

    }
    //Validation
    if(comment==null || selectedValue==null){
        alert("Insert Comment and Rating")
    }
    else{
        handlReview(updateReview)
        close()
    }
  }

  return (
   <>
    <Dialog open={open} fullWidth onSubmit={handleSubmit}>
        <DialogTitle>
            Add Review
        </DialogTitle>
        <DialogContent>
            <Stack spacing={2} margin={2}>
                <TextField variant='outlined' value={name} disabled>
                </TextField>
                <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    onChange={handleComment}
                    required
                />
            </Stack>
            <Stack direction='row'>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Rating</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={handleChange}
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="1"/>
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                </RadioGroup>
            </FormControl>
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            <Button variant='contained' color='error' onClick={close}>Cancel</Button>
        </DialogActions>
    </Dialog>
   </>
  )
}

export default DialogueBox