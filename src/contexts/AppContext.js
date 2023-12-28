import { useReducer, createContext, useContext } from "react";
export const AppContext = createContext();

const initialState = {
  isLoading: true,
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADING":
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setLoading(isLoading) {
    dispatch({ type: "SET_LOADING", payload: isLoading });
  }

  const value = {
    state,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
