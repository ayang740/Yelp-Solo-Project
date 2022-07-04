import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { removePizzeria, getPizzerias } from "../../store/pizzeria"
import EditPizzeriaForm from '../EditPizzeriaForm';
import AddReview from '../AddReview'

const SinglePizzeriaPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const { pizzeriaId } = useParams()
    const history = useHistory()

    const pizzeria = useSelector((state) => state.pizzeria[pizzeriaId]);

    const [showEditPizzeriaForm, setShowEditPizzeriaForm] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])

    const deletePizzeria = (e) => {
        e.preventDefault();
    
        dispatch(removePizzeria(pizzeriaId))
    
        return history.push(`/pizzerias`);
      };

    let content = null;
    if(showEditPizzeriaForm) {
        content = (
            <EditPizzeriaForm 
            pizzeria={pizzeria} 
            hideForm={() => setShowEditPizzeriaForm(false)}/>
        )
    }

    return (
        <>
            <h1>{pizzeria?.name}</h1>
            <div>{pizzeria?.address}</div>
            <div>{pizzeria?.openingTime}-{pizzeria?.closingTime}</div>
            <div>rating</div>

            {sessionUser?.id === pizzeria?.userId && 
                (
                    <div>
                        <button onClick={() => setShowEditPizzeriaForm(true)}>Edit Pizzeria</button>
                        <button onClick={deletePizzeria}>Delete Pizzeria</button>
                    </div>
                )
            }
            <div>{content}</div>
            <button onClick={()=> setShowReviewForm(true)} className="add review"> Add a Review </button>
                {showReviewForm && (<AddReview pizzeria={pizzeria} hideForm={() => setShowReviewForm(false)}/>)}
        </>
    )
}

export default SinglePizzeriaPage

