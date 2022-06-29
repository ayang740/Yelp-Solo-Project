import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { useState } from "react";
import { createPizzeria } from "../../store/pizzeria";

function AddPizzeria() {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const [name, setName] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [address, setAddress] = useState("")

    const sessionUser = useSelector((state) => state.session.user);
    let userId;
    if (sessionUser) userId = sessionUser.id;
    if (!sessionUser) return <Redirect to="/login" />;

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = {
        name,
        openingTime,
        closingTime,
        address,
        userId
      };
  
      const newPizzeria = await dispatch(createPizzeria(payload));
      history.push(`/pizzeria/${newPizzeria.id}`);
      return newPizzeria;
    };
  
    return (
      <div>
        <h1>Input new pizzeria below</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="xx:xx AM/PM"
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="xx:xx AM/PM"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
          <button type="submit">Create New Pizzeria</button>
        </form>
      </div>
    );
  }
  
  export default AddPizzeria;