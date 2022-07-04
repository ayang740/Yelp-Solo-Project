import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviews';

 const AddReview = ({ pizzeria, hideForm }) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState('');

    const newReview = (e) => setReviewText(e.target.value);
    const newRating = (e) => setRating(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            pizzaPlaceId: pizzeria.id,
            reviewText,
            rating
        };
        const review = await dispatch(createReview(payload));
        console.log(review)
        if(review){
            hideForm();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <>
            <h2>Add a review</h2>
            <form className='create review form' onSubmit={handleSubmit}>
                <label>
                    Review
                    <textarea onChange={newReview} value={reviewText} required></textarea>
                </label>
                <label>
                    Rating
                    <select onChange={newRating} value={rating} required>
                        <option disabled></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <button className='submit review' type="submit">Submit your review</button>
                <button className='cancel review' type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
}
  
export default AddReview