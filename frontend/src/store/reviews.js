import { csrfFetch } from "./csrf";

const LOAD_REVIEW = 'reviews/loadReview'
const CREATE_REVIEW = 'reviews/createReview'
const DELETE_REVIEW = 'reviews.deleteReview'

const loadReview = reviews => ({
    type: LOAD_REVIEW,
    reviews
  });

const addReview = review => ({
  type: CREATE_REVIEW,
  review
});

const deleteReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
})

//get all reviews
export const getReviews = (pizzeriaId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${pizzeriaId}`);
    if (response.ok) {
      const reviews = await response.json();
      dispatch(loadReview(reviews));
      return response;
    } else return response.json()
  };
  
  //create review
  export const createReview = (payload) => async dispatch => {
    const response = await csrfFetch('/api/reviews/add', {
      method: 'POST',
      headers:{ 'Content-Type' : 'application/json' },
      body: JSON.stringify(payload)
    })
    console.log(response)
    if (response.ok) {
      const review = await response.json()
      dispatch(addReview(review))
      return review;
    }
  }

//delete review
export const removeReview = (reviewId) => async dispatch =>{
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const reviewId = await response.json()
        dispatch(deleteReview(reviewId))
        return reviewId
    }
  }

const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_REVIEW:
          const loadState = { ...state }
          console.log("STATE", state, "ACTION", action);
          action.reviews.forEach((review) => {
            loadState[review.id] = review;
          });
          return loadState;
        case CREATE_REVIEW:
          const createState = { ...state }
          console.log("STATE", state, "ACTION", action);
          createState[action.review.id] = action.review
          return createState;
        case DELETE_REVIEW:
          const deletedState = { ...state }
          delete deletedState[action.reviewId];
          return deletedState;
        default:
          return state
    }
}

export default reviewReducer;