import { csrfFetch } from "./csrf";

//types

const LOAD = 'pizzeria/loadPizzerias';
const CREATE = 'pizzeria/createPizzeria';
const UPDATE = 'pizzeria/updatePizzeria'
const DELETE = 'pizzeria/deletePizzeria';

const loadPizzeria = pizzerias => ({
    type: LOAD,
    pizzerias
  });

const addOnePizzeria = pizzeria => ({
  type: CREATE,
  pizzeria
});

const updatePizzeria = pizzeria => ({
  type: UPDATE,
  pizzeria
})

const deletePizzeria = pizzeriaId => ({
  type: DELETE,
  pizzeriaId
})

//get all pizzerias
export const getPizzerias = () => async dispatch => {
    const response = await csrfFetch(`/api/pizzerias`);
    if (response.ok) {
      const pizzerias = await response.json();
      dispatch(loadPizzeria(pizzerias));
      return response;
    } else return response.json()
  };

  //get one pizzeria
export const getSinglePizzeria = (pizzeriaId) => async dispatch => {
  const response = await fetch(`/api/pizzerias/${pizzeriaId}`)
  if (response.ok) {
    const pizzeria = await response.json()
    dispatch(addOnePizzeria(pizzeria));
    return response;
  } else return response.json();
}

//create pizzeria
export const createPizzeria = (payload) => async dispatch => {
    const response = await csrfFetch('/api/pizzerias/add', {
      method: 'POST',
      headers:{ 'Content-Type' : 'application/json' },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const pizzeria = await response.json()
      dispatch(addOnePizzeria(pizzeria))
      return pizzeria;
    }
  }

//edit pizzeria
export const editPizzeria = (pizzeria) => async dispatch => {
  const response = await csrfFetch(`/api/pizzerias/${pizzeria.id}`,{
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(pizzeria)
  })
  if (response.ok) {
    const pizzeria = await response.json()
    dispatch(updatePizzeria(pizzeria))
    return pizzeria;
  }
}

//delete pizzeria
export const removePizzeria = (pizzeriaId) => async dispatch =>{
  const response = await csrfFetch(`/api/pizzerias/${pizzeriaId}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      const pizzeriaId = await response.json()
      dispatch(deletePizzeria(pizzeriaId))
      return pizzeriaId
  }
}

const pizzeriaReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD:
      action.pizzerias.forEach((pizzeria) => {
        newState[pizzeria.id] = pizzeria;
      });
      return newState;
    case CREATE:
      newState[action.pizzeria.id] = action.pizzeria
      return newState;
    case UPDATE:
      newState[action.pizzeria.id] = action.pizzeria
      return newState
    case DELETE:
        delete newState[action.pizzeriaId];
        return newState;
    default:
      return state
  }
}

export default pizzeriaReducer;