type CreateAndMintNFTState = CreateAndMintNFTObject[];

interface CreateAndMintNFTObject {
  token_id: number;
  metadata_ipfs: string;
  to_address: string;
}

interface CreateAndMintNFTAction {
  type: any;
  payload: CreateAndMintNFTPayload;
}

interface CreateAndMintNFTPayload {
  index?: number;
  name?: "to_address" | "token_id";
  value?: number | string;
}

interface CreateAndMintNFTProvider {
  children: React.ReactNode;
  initialState: CreateAndMintNFTState;
}
