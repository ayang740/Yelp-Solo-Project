import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPizzeria, getPizzerias } from "../../store/pizzeria";


const EditPizzeriaForm = ({ pizzeria, hideForm }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [name, setName] = useState(pizzeria.name);
    const [openingTime, setOpeningTime] = useState(pizzeria.openingTime);
    const [closingTime, setClosingTime] = useState(pizzeria.closingTime);
    const [address, setAddress] = useState(pizzeria.address);

    const updatedName = (e) => setName(e.target.value)
    const updatedOpeningTime = (e) => setOpeningTime(e.target.value)
    const updatedClosingTime = (e) => setClosingTime(e.target.value)
    const updatedAddress = (e) => setAddress(e.target.value)

    useEffect(() => {
        dispatch(getPizzerias())
    },[dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
          ...pizzeria,
          name,
          openingTime,
          closingTime,
          address
        };
        
        
        const updatedPizzeria = await dispatch(editPizzeria(payload));
        if (updatedPizzeria) {
            hideForm();
        }
      };

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={updatedName}
                    required
                />
                <input
                    type="text"
                    value={openingTime}
                    onChange={updatedOpeningTime}
                    required
                />
                <input
                    type="text"
                    value={closingTime}
                    onChange={updatedClosingTime}
                    required
                />
                <input
                    type="text"
                    value={address}
                    onChange={updatedAddress}
                    required
                />
                <button type="submit">Update Pizzeria</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
}

export default EditPizzeriaForm