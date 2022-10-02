import { createContext, useReducer } from "react";

const reducer = (state: SendNFTState, action: SendNFTAction) => {
  let newState: SendNFTState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case sendNFTActions.ADD_FIELD:
      newState = [
        ...state,
        {
          tokenID: state.length + 1,
          toAddress: "",
        },
      ];
      break;

    case sendNFTActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case sendNFTActions.CHANGE_INPUT:
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

export const SendNFTContext = createContext<any>(undefined);

export const SendNFTProvider: React.FC<SendNFTProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { sendNFTState: state, sendNFTDispatch: dispatch };

  return (
    <SendNFTContext.Provider value={value}>{children}</SendNFTContext.Provider>
  );
};

export const sendNFTActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
