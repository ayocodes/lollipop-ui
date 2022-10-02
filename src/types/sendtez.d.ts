type SendTezState = SendTezObject[];

interface SendTezObject {
  amount: number;
  toAddress: string;
}

interface SendTezAction {
  type: any;
  payload: SendTezPayload;
}

interface SendTezPayload {
  index?: number;
  name?: "toAddress" | "amount";
  value?: number | string;
}

interface SendTezProvider {
  children: React.ReactNode;
  initialState: SendTezState;
}
