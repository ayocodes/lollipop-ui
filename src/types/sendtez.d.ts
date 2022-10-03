type SendTezState = SendTezObject[];

interface SendTezObject {
  amount: number;
  to_address: string;
}

interface SendTezAction {
  type: any;
  payload: SendTezPayload;
}

interface SendTezPayload {
  index?: number;
  name?: "to_address" | "amount";
  value?: number | string;
}

interface SendTezProvider {
  children: React.ReactNode;
  initialState: SendTezState;
}
