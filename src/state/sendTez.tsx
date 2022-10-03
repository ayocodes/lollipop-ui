import { createContext, useReducer } from "react";

const reducer = (state: SendTezState, action: SendTezAction) => {
  let newState: SendTezState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case sendTezActions.ADD_FIELD:
      newState = [
        ...state,
        {
          amount: 0,
          to_address: "",
        },
      ];
      break;

    case sendTezActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index , 1);

      newState = [...state];
      break;

    case sendTezActions.CHANGE_INPUT:
      index = action.payload.index!;
      name = action.payload.name!;
      value = action.payload.value!;

      state[index] = {
        ...state[index],
        [name]: value,
      };

      newState = [...state];
      break;

    default:
      newState = [...state];
      break;
  }
  return newState;
};

export const SendTezContext = createContext<any>(undefined);

export const SendTezProvider: React.FC<SendTezProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { sendTezState: state, sendTezDispatch: dispatch };

  return (
    <SendTezContext.Provider value={value}>{children}</SendTezContext.Provider>
  );
};

export const sendTezActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
