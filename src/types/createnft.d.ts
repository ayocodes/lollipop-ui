type CreateNFTState = CreateNFTObject[];

interface CreateNFTObject {
  token_id: number;
  metadata_ipfs: string;
}

interface CreateNFTAction {
  type: any;
  payload: CreateNFTPayload;
}

interface CreateNFTPayload {
  index?: number;
  name?: "metadata_ipfs" | "token_id";
  value?: number | string;
}

interface CreateNFTProvider {
  children: React.ReactNode;
  initialState: CreateNFTState;
}
