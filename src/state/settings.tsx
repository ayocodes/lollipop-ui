import { createContext, useReducer } from "react";

const reducer: SettingsReducer = (state, action) => {
  let newState: SettingsState;
  switch (action.type) {
    case settingsActions.CHANGE_INPUT:
      newState = {
        ...state,
        [action.payload.name!]: action.payload.value,
      };
      break;

    case settingsActions.RESET_STATE:
      newState = { ...action.payload.state! };
      break;

    default:
      newState = { ...state };
      break;
  }

  return newState;
};

export const SettingsContext = createContext<any>(undefined);

export const SettingsProvider: React.FC<SettingsProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { settingsState: state, settingsDispatch: dispatch };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const settingsActions = {
  CHANGE_INPUT: "CHANGE_INPUT",
  RESET_STATE: "RESET_STATE",
};
