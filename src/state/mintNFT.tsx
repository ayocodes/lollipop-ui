import { createContext, useReducer } from "react";

const reducer = (state: MintNFTState, action: MintNFTAction) => {
  let newState: MintNFTState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case mintNFTActions.ADD_FIELD:
      newState = [
        ...state,
        {
          tokenID: state.length + 1,
          toAddress: "",
        },
      ];
      break;

    case mintNFTActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case mintNFTActions.CHANGE_INPUT:
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

export const MintNFTContext = createContext<any>(undefined);

export const MintNFTProvider: React.FC<MintNFTProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { mintNFTState: state, mintNFTDispatch: dispatch };

  return (
    <MintNFTContext.Provider value={value}>{children}</MintNFTContext.Provider>
  );
};

export const mintNFTActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
