import { createContext, useReducer } from "react";

const reducer: SchemasReducer = (
  state: SchemasState,
  action: SchemasAction
) => {
  let newState: SchemasState;

  switch (action.type) {
    case schemasActions.CREATE_SCHEMA:
      newState = {
        activeId: action.payload.id,
        schemas: [action.payload, ...state.schemas],
      };
      break;

    case schemasActions.UPDATE_SCHEMA:
      // get index of payload in schemas
      const index = state.schemas.findIndex((e) => e.id === action.payload.id);

      // update schema at index with payload
      state.schemas[index] = action.payload;

      // swap updated schema at index with schema at index 0
      [state.schemas[0], state.schemas[index]] = [
        state.schemas[index],
        state.schemas[0],
      ];

      newState = {
        activeId: action.payload.id,
        schemas: state.schemas,
      };
      break;

    case schemasActions.DELETE_SCHEMA:
      // remove payload as activeId if active
      if (state.activeId === action.payload.id) {
        state.activeId = "";
      }

      // remove payload with id from state
      state.schemas = state.schemas.filter((e) => e.id !== action.payload.id);

      newState = state;
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export const SchemasContexts = createContext<any>(undefined);

export const SchemasProvider: React.FC<SchemasProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SchemasContexts.Provider value={{ state, dispatch }}>
      {children}
    </SchemasContexts.Provider>
  );
};

export const schemasActions = {
  CREATE_SCHEMA: "CREATE_SCHEMA",
  UPDATE_SCHEMA: "UPDATE_SCHEMA",
  DELETE_SCHEMA: "DELETE_SCHEMA",
};
