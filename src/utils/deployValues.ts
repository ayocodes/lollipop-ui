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
      path = "/api/send-tez";
      break;

    case deployActions.TRANSFER_NFT:
      path = "/api/transfer-nft";
      break;

    case deployActions.CREATE_NFT:
      path = "/api/create-nft";
      break;

    case deployActions.MINT_NFT:
      path = "/api/mint-nft";
      break;

    case deployActions.CREATE_MINT_NFT:
      path = "/api/create-mint-nft";
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

  alert("hhh")
  let response = await axios.request(reqOptions);
  console.log(response)
};

export const deployActions = {
  SEND_TEZ: "SEND_TEZ",
  TRANSFER_NFT: "TRANSFER_NFT",
  CREATE_NFT: "CREATE_NFT",
  MINT_NFT: "MINT_NFT",
  CREATE_MINT_NFT: "CREATE_MINT_NFT",
};
