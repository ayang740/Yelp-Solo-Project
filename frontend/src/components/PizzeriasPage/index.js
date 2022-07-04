import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzerias } from '../../store/pizzeria';
import { NavLink } from 'react-router-dom';
import "./pizzerias.css"

const PizzeriaList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPizzerias())
    }, [dispatch])

    const pizzerias = useSelector((state) => {
        return Object.values(state.pizzeria)
    });


    if (!pizzerias) {
        return null;
    }


    return (    
        <div className='pizzeriasWrapper'>
            <h1 className='listingsTitle'> Pizzerias </h1>
                {pizzerias && pizzerias.map(pizzeria => {
                    return (
                        <NavLink key={pizzeria.name} to={`/pizzerias/${pizzeria.id}`}>
                            <div>
                                <div>{pizzeria.name}</div>
                            </div>
                        </NavLink>
                    )
                })}
        </div>
    )
}

export default PizzeriaList;