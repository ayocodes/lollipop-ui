type CreateNFTState = CreateNFTObject[];

interface CreateNFTObject {
  tokenID: number;
  metadata: string;
}

interface CreateNFTAction {
  type: any;
  payload: CreateNFTPayload;
}

interface CreateNFTPayload {
  index?: number;
  name?: "metadata" | "tokenID";
  value?: number | string;
}

interface CreateNFTProvider {
  children: React.ReactNode;
  initialState: CreateNFTState;
}
