interface SettingsState {
  rpcUrl: string;
  publicKey: string;
  privateKey: string;
  contractAddress: string;
  pgUser: string;
  pgPassword: string;
  pgHost: string;
  pgPort: string;
  pgDatabase: string;
}

interface SettingsProvider {
  children: React.ReactNode;
  initialState: SettingsState;
}

interface SettingsPayload {
  name?:
    | "rpcUrl"
    | "publicKey"
    | "privateKey"
    | "contractAddress"
    | "pgUser"
    | "pgPassword"
    | "pgHost"
    | "pgPort"
    | "pgDatabase";
  value?: string;
  state?: SettingsState;
}

interface SettingsAction {
  type: any;
  payload: SettingsPayload;
}

type SettingsReducer = (
  state: SettingsState,
  action: SettingsAction
) => SettingsState;
