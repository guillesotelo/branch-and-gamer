import React from "react";

const useLocalStorage = (key, defaultValue, serialize, deserialize) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.playload];
      case "remove":
        return state.filter((item) => item.id === action.payload.id);
      case "quantityAdd":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      case "quantityRemove":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      default:
        return state;
    }
  };
  const init = () => deserialize(window.localStorage.getItem(key)) || defaultValue;

  const [state, dispatch] = React.useReducer(reducer, defaultValue, init);

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, dispatch];
};

export default useLocalStorage;
