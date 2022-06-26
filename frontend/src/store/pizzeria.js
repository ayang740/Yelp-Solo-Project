const LOAD = 'pizzeria/LOAD';
const ADD_ONE = 'pizzeria/ADD_ONE';

const load = list => ({
    type: LOAD,
    list
  });

const addOnePizzeria = pizzeria => ({
  type: ADD_ONE,
  pizzeria
});

export const getPizzerias = () => async dispatch => {
    const response = await fetch(`/api/pokemon`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

export const getSinglePizzeria = (pizzeriaId) => async dispatch => {
  const response = await fetch(`/api/pizzeria/${pizzeriaId}`)
  if (response.ok) {
    const pizzeria = await response.json()
    dispatch(addOnePizzeria(pizzeria))
  } else return false
}

export const createPizzeria = (payload) => async dispatch => {
    const response = await fetch('/api/pizzeria', {
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