import { createContext, useReducer } from "react";

const reducer = (state: SchemaState, action: SchemaAction) => {
  let newState: SchemaState;
  switch (action.type) {
    case schemaActions.CHANGE_INPUT:
      newState = {
        ...state,
        schemaDetails: {
          ...state.schemaDetails,
          [action.payload.name]: action.payload.value,
        },
      };
      break;

    case schemaActions.CLEAR_STATE:
      newState = {
        id: "",
        schema: "",
        schemaDetails: {
          name: "",
          description: "",
          schemaAlias: "",
          definitionAlias: "",
        },
        borderColor: "",
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};

export const SchemaContext = createContext<any>(undefined);

export const SchemaProvider: React.FC<SchemaProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SchemaContext.Provider value={{ state, dispatch }}>
      {children}
    </SchemaContext.Provider>
  );
};

export const schemaActions = {
  CHANGE_INPUT: "CHANGE_INPUT",
  CLEAR_STATE: "CLEAR_STATE",
};
