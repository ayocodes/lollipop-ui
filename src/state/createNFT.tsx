import { createContext, useReducer } from "react";

const reducer = (state: CreateNFTState, action: CreateNFTAction) => {
  let newState: CreateNFTState;
  let index: number;
  let name: string;
  let value: any;

  switch (action.type) {
    case createNFTActions.ADD_FIELD:
      newState = [
        ...state,
        {
          tokenID: state.length + 1,
          metadata: "",
        },
      ];
      break;

    case createNFTActions.DELETE_FIELD:
      index = action.payload.index!;
      state.splice(index, 1);

      newState = [...state];
      break;

    case createNFTActions.CHANGE_INPUT:
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

export const CreateNFTContext = createContext<any>(undefined);

export const CreateNFTProvider: React.FC<CreateNFTProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { createNFTState: state, createNFTDispatch: dispatch };

  return (
    <CreateNFTContext.Provider value={value}>
      {children}
    </CreateNFTContext.Provider>
  );
};

export const createNFTActions = {
  ADD_FIELD: "ADD_FIELD",
  DELETE_FIELD: "DELETE_FIELD",
  CHANGE_INPUT: "CHANGE_INPUT",
};
