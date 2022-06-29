import { csrfFetch } from "./csrf";

//types

const LOAD = 'pizzeria/loadPizzerias';
const CREATE = 'pizzeria/createPizzeria';
// const UPDATE = 'pizzeria/updatePizzeria'
// const DELETE = 'pizzeria/deletePizzeria';

const load = pizzerias => ({
    type: LOAD,
    pizzerias
  });

const addOnePizzeria = pizzeria => ({
  type: CREATE,
  pizzeria
});

// const deletePizzeria = pizzeriaId => ({
//   type: DELETE,
//   pizzeriaId
// })

//get all pizzerias
export const getPizzerias = () => async dispatch => {
    const response = await csrfFetch(`/api/pizzerias`);
    if (response.ok) {
      const pizzerias = await response.json();
      dispatch(load(pizzerias));
    }
  };

// export const getSinglePizzeria = (pizzeriaId) => async dispatch => {
//   const response = await fetch(`/api/pizzeria/${pizzeriaId}`)
//   if (response.ok) {
//     const pizzeria = await response.json()
//     dispatch(addOnePizzeria(pizzeria))
//   } else return false
// }

export const createPizzeria = (payload) => async dispatch => {
    const response = await csrfFetch('/api/pizzeria', {
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

// export const editPizzeria = (pizzeriaId, payload) => async dispatch => {
//   const response = await fetch(`/api/pizzeria/${pizzeriaId}`,{
//     method: 'PUT',
//     headers: { 'Content-Type' : 'application/json' },
//     body: JSON.stringify(payload)
//   })
//   if (response.ok) {
//     const pizzeria = await response.json()
//     dispatch(addOnePizzeria(pizzeria))
//     return pizzeria;
//   }
// }

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
    // case DELETE:
    //     const deletedPizzeria = { ...state };
    //     delete deletedPizzeria[action.pizzeriaId];
    //     return deletedPizzeria;
    default:
      return state
  }
}

export default pizzeriaReducer;