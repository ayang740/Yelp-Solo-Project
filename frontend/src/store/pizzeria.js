const LOAD = 'pizzeria/LOAD';
const ADD_ONE = 'pizzeria/ADD_ONE';

const load = list => ({
    type: LOAD,
    list
  });

const addOnePokemon = pokemon => ({
  type: ADD_ONE,
  pokemon
});