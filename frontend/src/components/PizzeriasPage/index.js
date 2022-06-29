import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzerias } from '../../store/pizzeria';
import { NavLink } from 'react-router-dom';

const PizzeriaList = () => {
    const dispatch = useDispatch();
    
    const pizzerias = useSelector(state => {
        console.log(state.pizzeria)
        return state.pizzerias;
    });
    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])
    
    if (!pizzerias) {
        return null;
    }
    
    return (    
        <>
            <h1> Pizzerias </h1>
                {pizzerias.map((pizzeria) => {
                    return (
                        <NavLink key={pizzeria.name} to={`/pizzerias/${pizzeria.id}`}>
                            <div>
                                <div>{pizzeria.name}</div>
                                <div>{pizzeria.address}</div>
                                <div>{pizzeria.openingTime}-{pizzeria.closingTime}</div>
                                <div>rating</div>
                            </div>
                        </NavLink>
                    )
                })}
        </>
    )
}

export default PizzeriaList;