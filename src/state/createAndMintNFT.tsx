import { createContext, useReducer } from "react";

const reducer = (state: CreateAndMintNFTState, action: CreateAndMintNFTAction) => {
  let newState: CreateAndMintNFTState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case createAndMintNFTActions.ADD_FIELD:
      newState = [
        ...state,
        {
          token_id: state.length + 1,
          metadata_ipfs: "",
          to_address: "",
        },
      ];
      break;

    case createAndMintNFTActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case createAndMintNFTActions.CHANGE_INPUT:
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

export const CreateAndMintNFTContext = createContext<any>(undefined);

export const CreateAndMintNFTProvider: React.FC<CreateAndMintNFTProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { createAndMintNFTState: state, createAndMintNFTDispatch: dispatch };

  return (
    <CreateAndMintNFTContext.Provider value={value}>{children}</CreateAndMintNFTContext.Provider>
  );
};

export const createAndMintNFTActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
