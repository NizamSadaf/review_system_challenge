import {Dialog,DialogActions,DialogTitle,DialogContent,Button, Stack} from '@mui/material'
const SingleReview = ({open,close,review}) => {
    const {id}=review
    const datas=JSON.parse(localStorage.getItem('newReview'));
    //Filter the reviews of the targeted post
    const filterReviews=datas.filter((data)=> data.postId===id)

  return (
    <>
        <Dialog open={open} fullWidth>
        <DialogTitle>
            All Reviews
        </DialogTitle>
        <DialogContent>
            <Stack spacing={2} margin={2}>
            {filterReviews.length > 0 ? (
                filterReviews.map((data) => (
            <>
            {/* Showing the each reviews */}
                <div key={data.postId}>
                    <p>
                    Rating: {data.rating} <br />
                    Comment: {data.comment}
                    </p>
                </div>
                <hr />
            </>
            ))
            ) : (
            <p>No reviews are available for this service.</p>
            )}
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' color='error' onClick={close}>Cancel</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default SingleReview