interface ModalState {
  showSettings: boolean;
  showAdminNFT: boolean;
}

interface ModalProvider {
  children: React.ReactNode;
  initialState: ModalState;
}

type ModalReducer = (
  state: ModalState,
  action: any
) => ModalState;
