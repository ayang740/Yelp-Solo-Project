const LOAD = 'pizzeria/LOAD';
const ADD_ONE = 'pizzeria/ADD_ONE';
const DELETE = 'pizzeria/DELETE';

const load = pizzerias => ({
    type: LOAD,
    pizzerias
  });

const addOnePizzeria = pizzeria => ({
  type: ADD_ONE,
  pizzeria
});

const deletePizzeria = pizzeriaId => ({
  type: DELETE,
  pizzeriaId
})

export const getPizzerias = () => async dispatch => {
    const response = await fetch(`/api/pizzeria`);
  
    if (response.ok) {
      const pizzerias = await response.json();
      dispatch(load(pizzerias));
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

export const editPizzeria = (pizzeriaId, payload) => async dispatch => {
  const response = await fetch(`/api/pizzeria/${pizzeriaId}`,{
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const pizzeria = await response.json()
    dispatch(addOnePizzeria(pizzeria))
    return pizzeria;
  }
}

const pizzeriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allPizzerias = {};
      action.pizzerias.forEach(pizzeria => {
        allPizzerias[pizzeria.id] = pizzeria;
      });
      return {
        ...allPizzerias,
        ...state,
        list: sortList(action.list)
      };
    case ADD_ONE:
      if (!state[action.pizzeria.id]) {
        const newState = {
          ...state,
          [action.pizzeria.id]: action.pizzeria
        };
        const pizzeriaList = newState.list.map(id => newState[id]);
        pizzeriaList.push(action.pizzeria);
        newState.list = sortList(pizzeriaList);
        return newState;
      }
      return {
        ...state,
        [action.pizzeria.id]: {
          ...state[action.pizzeria.id],
          ...action.pizzeria
        }
      };
      case DELETE:
        const deletedPizzeria = { ...state };
        delete deletedPizzeria[action.pizzeriaId];
        return deletedPizzeria;
  }
}

export default pizzeriaReducer;