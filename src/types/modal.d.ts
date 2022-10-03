interface ModalState {
  showSettings: boolean;
  showAdminNFT: boolean;
  showTerminal: boolean;
}

interface ModalProvider {
  children: React.ReactNode;
  initialState: ModalState;
}

type ModalReducer = (
  state: ModalState,
  action: any
) => ModalState;
