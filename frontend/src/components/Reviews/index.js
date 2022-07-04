import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, removeReview } from "../../store/reviews";

const Reviews = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { pizzeriaId } = useParams()

    useEffect(() => {
        dispatch(getReviews(pizzeriaId))
    }, [dispatch, pizzeriaId])
    
    const reviews = useSelector(state => {
        return Object.values(state.review);
    });


    if (!reviews) {
        return null;
    }



    return (
        <>
            <h2> Reviews </h2>
            {reviews && reviews.map(review => {
                return (
                    <div key={review.id}>
                        <div>{review.reviewText}</div>
                        <div>{review.rating}</div>

                        {sessionUser?.id === review?.userId &&
                        (
                            <button
                            onClick={async()=> await dispatch(removeReview(review.id))}
                            >Delete Review</button>
                        )
                        }
                    </div>

                )
            })}
        </>
    )

}

export default Reviews;