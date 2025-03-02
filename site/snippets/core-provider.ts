import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import {
  LocalAccountSigner,
  SmartAccountProvider,
  SmartAccountSigner,
} from "@alchemy/aa-core";
import { polygonMumbai } from "viem/chains";

const chain = polygonMumbai;
const owner: SmartAccountSigner =
  LocalAccountSigner.mnemonicToAccountSigner(YOUR_OWNER_MNEMONIC);

export const provider = new SmartAccountProvider({
  rpcProvider: "https://polygon-mumbai.g.alchemy.com/v2/demo",
  chain,
}).connect(
  (rpcClient) =>
    new LightSmartContractAccount({
      chain,
      factoryAddress: getDefaultLightAccountFactoryAddress(chain),
      rpcClient,
      owner,
    })
);
