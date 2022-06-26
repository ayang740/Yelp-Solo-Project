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
      action.list.forEach(pizzeria => {
        allPizzerias[pizzeria.id] = pizzeria;
      });
      return {
        ...allPizzeria,
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
    
  }
}

export default pizzeriaReducer;