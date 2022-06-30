import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { removePizzeria, getPizzerias } from "../../store/pizzeria"

const SinglePizzeriaPage = () => {
    const dispatch = useDispatch()
    const { pizzeriaId } = useParams()
    const history = useHistory()

    const pizzeria = useSelector((state) => state.pizzeria[pizzeriaId]);

    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])

    const deletePizzeria = (e) => {
        e.preventDefault();
    
        dispatch(removePizzeria(pizzeriaId))
    
        return history.push(`/pizzerias`);
      };

    return (
        <>
            <h1>{pizzeria?.name}</h1>
            <div>{pizzeria?.address}</div>
            <div>{pizzeria?.openingTime}-{pizzeria?.closingTime}</div>
            <div>rating</div>
            <button onClick={deletePizzeria}>Delete Pizzeria</button>
        </>
    )
}

export default SinglePizzeriaPage

