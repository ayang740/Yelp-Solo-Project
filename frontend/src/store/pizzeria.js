import { csrfFetch } from "./csrf";

const LOAD = 'pizzeria/LOAD';
// const ADD_ONE = 'pizzeria/ADD_ONE';
// const DELETE = 'pizzeria/DELETE';

const load = pizzerias => ({
    type: LOAD,
    pizzerias
  });

// const addOnePizzeria = pizzeria => ({
//   type: ADD_ONE,
//   pizzeria
// });

// const deletePizzeria = pizzeriaId => ({
//   type: DELETE,
//   pizzeriaId
// })

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

// export const createPizzeria = (payload) => async dispatch => {
//     const response = await fetch('/api/pizzeria', {
//       method: 'POST',
//       headers:{ 'Content-Type' : 'application/json' },
//       body: JSON.stringify(payload)
//     })
//     if (response.ok) {
//       const pizzeria = await response.json()
//       dispatch(addOnePizzeria(pizzeria))
//       return pizzeria;
//     }
//   }

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
  switch (action.type) {
    case LOAD:
      const allPizzerias = {};
      action.pizzerias.forEach((pizzeria) => {
        allPizzerias[pizzeria.id] = pizzeria;
      });
      return allPizzerias;
    // case ADD_ONE:
    //     newState[action.pizzeria.id] = action.pizzeria
    //     return newState;
    // case DELETE:
    //     const deletedPizzeria = { ...state };
    //     delete deletedPizzeria[action.pizzeriaId];
    //     return deletedPizzeria;
    default:
      return state
  }
}

export default pizzeriaReducer;