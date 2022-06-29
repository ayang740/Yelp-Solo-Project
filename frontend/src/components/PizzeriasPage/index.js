import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzerias } from '../../store/pizzeria';
import { NavLink } from 'react-router-dom';

const PizzeriaList = () => {
    const dispatch = useDispatch();
    
    const selectorPizzerias = useSelector(state => {
        return state.pizzerias;
    });

    const [pizzerias, setPizzerias] = useState([])

    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])
    
    useEffect(() => {
        if (selectorPizzerias) {
            setPizzerias(Object.values(selectorPizzerias))
        }
        
    })
    console.log(pizzerias)
    return (    
        <>
            <h1> Pizzerias </h1>
                {pizzerias && pizzerias.map(pizzeria => {
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