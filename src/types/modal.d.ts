interface ModalState {
  showSettings: boolean;
  showWelcome: boolean;
  showZenMode: boolean;
  showSchemaDetails: boolean;
  showDownload: boolean;
}

interface ModalProvider {
  children: React.ReactNode;
  initialState: ModalState;
}

type ModalReducer = (
  state: ModalState,
  action: any
) => ModalState;
