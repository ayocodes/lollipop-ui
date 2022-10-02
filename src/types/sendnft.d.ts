type SendNFTState = SendNFTObject[];

interface SendNFTObject {
  tokenID: number;
  toAddress: string;
}

interface SendNFTAction {
  type: any;
  payload: SendNFTPayload;
}

interface SendNFTPayload {
  index?: number;
  name?: "toAddress" | "tokenID";
  value?: number | string;
}

interface SendNFTProvider {
  children: React.ReactNode;
  initialState: SendNFTState;
}
