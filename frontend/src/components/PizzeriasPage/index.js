import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzerias } from '../../store/pizzeria';
import { NavLink } from 'react-router-dom';

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
        <>
            <h1> Pizzerias </h1>
                {pizzerias && pizzerias.map(pizzeria => {
                    return (
                        <NavLink key={pizzeria.name} to={`/pizzerias/${pizzeria.id}`}>
                            <div>
                                <div>{pizzeria.name}</div>
                            </div>
                        </NavLink>
                    )
                })}
        </>
    )
}

export default PizzeriaList;