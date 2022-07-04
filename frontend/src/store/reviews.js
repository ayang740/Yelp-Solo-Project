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
export const createPizzeria = (payload) => async dispatch => {
    const response = await csrfFetch('/api/reviews/add', {
      method: 'POST',
      headers:{ 'Content-Type' : 'application/json' },
      body: JSON.stringify(payload)
    })
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
    let newState = { ...state }
    switch (action.type) {
        case LOAD_REVIEW:
          ction.review.forEach((review) => {
            newState[review.id] = review;
          });
          return newState;
        case CREATE_REVIEW:
          newState[action.review.id] = action.review
          return newState;
        case DELETE_REVIEW:
          const deletedState = { ...state }
          delete deletedState[action.reviewId];
          return deletedState;
        default:
          return state
    }
}

export default reviewReducer;