// hooks/index.ts
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall } from "@usedapp/core";
import dividendDistributorAbi from "../abi/dividendDistributor.json";
import { simpleContractAddress } from "../contracts"

const humanReadableAbi = [
    "constructor(string internalType, string name, string address)",
    "function claimDividend()",
    "function getUnpaidEarnings(string internalType, string name, string address) view returns (uint earnings)"
  ];

const dividendDistributorInterface = new ethers.utils.Interface(humanReadableAbi);
const contract = new Contract(simpleContractAddress, dividendDistributorInterface);

  export function useClaimDividend() {
    const { state, send } = useContractFunction(contract, "claimDividend", {});
    return { state, send };
}

export function useCheckEarnings(address : string | false | 0 | null | undefined) {
    const [earnings]: any = useContractCall({
      abi: dividendDistributorInterface,
      address: simpleContractAddress,
      method: "getUnpaidEarnings",
      args: [address],
    }) ?? [];
    return earnings;
  }