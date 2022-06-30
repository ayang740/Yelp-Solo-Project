import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPizzeria } from "../../store/businesses";
import { useParams } from "react-router-dom";

const editPizzeriaForm = ({ pizzeria }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const { pizzeriaId } = useParams();
    const history = useHistory();

    const [name, setName] = useState(pizzeria.name);
    const [openingTime, setOpeningTime] = useState(pizzeria.openingTime);
    const [closingTime, setClosingTime] = useState(pizzeria.closingTime);
    const [address, setAddress] = useState(pizzeria.address)

    return null
}