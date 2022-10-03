import axios from "axios";

export default async ({
  config,
  values,
  action,
}: {
  config: any;
  values: any[];
  action: any;
}) => {
  let path;

  switch (action) {
    case deployActions.SEND_TEZ:
      path = "/send-tez";
      break;

    case deployActions.TRANSFER_NFT:
      path = "/transfer-nft";
      break;

    case deployActions.CREATE_NFT:
      path = "/create-nft";
      break;

    case deployActions.MINT_NFT:
      path = "/mint-nft";
      break;

    case deployActions.CREATE_MINT_NFT:
      path = "/create-mint-nft";
      break;

    default:
      path = "error";
      break;
  }
  const host = window.location.protocol + "//" + window.location.host;

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    config,
    values,
  });

  let reqOptions = {
    url: host + path,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
};

export const deployActions = {
  SEND_TEZ: "SEND_TEZ",
  TRANSFER_NFT: "TRANSFER_NFT",
  CREATE_NFT: "CREATE_NFT",
  MINT_NFT: "MINT_NFT",
  CREATE_MINT_NFT: "CREATE_MINT_NFT",
};
