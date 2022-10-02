type CreateAndMintNFTState = CreateAndMintNFTObject[];

interface CreateAndMintNFTObject {
  tokenID: number;
  metadata: string;
  toAddress: string;
}

interface CreateAndMintNFTAction {
  type: any;
  payload: CreateAndMintNFTPayload;
}

interface CreateAndMintNFTPayload {
  index?: number;
  name?: "toAddress" | "tokenID";
  value?: number | string;
}

interface CreateAndMintNFTProvider {
  children: React.ReactNode;
  initialState: CreateAndMintNFTState;
}
