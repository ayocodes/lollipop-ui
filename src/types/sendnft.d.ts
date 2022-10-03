type SendNFTState = SendNFTObject[];

interface SendNFTObject {
  token_id: number;
  to_address: string;
}

interface SendNFTAction {
  type: any;
  payload: SendNFTPayload;
}

interface SendNFTPayload {
  index?: number;
  name?: "to_address" | "token_id";
  value?: number | string;
}

interface SendNFTProvider {
  children: React.ReactNode;
  initialState: SendNFTState;
}
