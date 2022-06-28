import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzerias } from '../../store/pizzeria';
import { Link } from 'react-router-dom';

const PizzeriaList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])
    
    const pizzerias = useSelector(state => {
        return Object.values(state.pizzerias);
  });
    if (!pizzerias) {
        return null;
    }

    return (

        <>
            <h1> Pizzerias </h1>
            {(pizzerias).map((pizzeria) => {
                return (
                    <Link key={pizzeria.name} to={`/pizzerias/${pizzeria.id}`}>
                        <div>
                            <div>{pizzeria.name}</div>
                            <div>{pizzeria.address}</div>
                            <div>{pizzeria.openingTime}-{pizzeria.closingTime}</div>
                            <div>rating</div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default PizzeriaList;