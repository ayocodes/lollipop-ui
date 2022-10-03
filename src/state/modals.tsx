import { createContext, useReducer } from "react";

const reducer: ModalReducer = (state, action) => {
  let newState: ModalState;

  switch (action.type) {
    case modalActions.OPEN_SETTING_MODAL:
      newState = {
        ...state,
        showSettings: true,
      };
      break;

    case modalActions.CLOSE_SETTING_MODAL:
      newState = {
        ...state,
        showSettings: false,
      };
      break;

    case modalActions.OPEN_ADMIN_NFT_MODAL:
      newState = {
        ...state,
        showAdminNFT: true,
      };
      break;

    case modalActions.CLOSE_ADMIN_NFT_MODAL:
      newState = {
        ...state,
        showAdminNFT: false,
      };
      break;
    case modalActions.OPEN_TERMINAL_MODAL:
      newState = {
        ...state,
        showTerminal: true,
      };
      break;

    case modalActions.CLOSE_TERMINAL_MODAL:
      newState = {
        ...state,
        showTerminal: false,
      };
      break;


    default:
      newState = state;
      break;
  }

  return newState;
};

export const ModalContext = createContext<any>(undefined);

export const ModalProvider: React.FC<ModalProvider> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const modalActions = {
  OPEN_SETTING_MODAL: "OPEN_SETTING_MODAL",
  CLOSE_SETTING_MODAL: "CLOSE_SETTING_MODAL",

  OPEN_ADMIN_NFT_MODAL: "OPEN_ADMIN_NFT_MODAL",
  CLOSE_ADMIN_NFT_MODAL: "CLOSE_ADMIN_NFT_MODAL",

  OPEN_TERMINAL_MODAL: "OPEN_TERMINAL_MODAL",
  CLOSE_TERMINAL_MODAL: "CLOSE_TERMINAL_MODAL",
};
