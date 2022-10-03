type MintNFTState = MintNFTObject[];

interface MintNFTObject {
  token_id: number;
  to_address: string;
}

interface MintNFTAction {
  type: any;
  payload: MintNFTPayload;
}

interface MintNFTPayload {
  index?: number;
  name?: "to_address" | "token_id";
  value?: number | string;
}

interface MintNFTProvider {
  children: React.ReactNode;
  initialState: MintNFTState;
}
