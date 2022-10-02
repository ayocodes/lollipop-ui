type MintNFTState = MintNFTObject[];

interface MintNFTObject {
  tokenID: number;
  toAddress: string;
}

interface MintNFTAction {
  type: any;
  payload: MintNFTPayload;
}

interface MintNFTPayload {
  index?: number;
  name?: "toAddress" | "tokenID";
  value?: number | string;
}

interface MintNFTProvider {
  children: React.ReactNode;
  initialState: MintNFTState;
}
