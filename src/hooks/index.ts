// hooks/index.ts
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall } from "@usedapp/core";
import dividendDistributorAbi from "../abi/dividendDistributor.json";
import { simpleContractAddress } from "../contracts"
//import { useWeb3ExecuteFunction } from "react-moralis";

const humanReadableAbi = [
    "constructor(string internalType, string name, string address)",
    "function claimDividend()",
    "function getUnpaidEarnings(string address) view returns (uint earnings)"
  ];

const dividendDistributorInterface = new ethers.utils.Interface(dividendDistributorAbi);
const contract = new Contract(simpleContractAddress, dividendDistributorInterface);

  export function useClaimDividend() {
    const { state, send } = useContractFunction(contract, "claimDividend", {});
    return { state, send };
}

export function useCheckEarnings(address : string | false | 0 | null | undefined) {

  // const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();

  // const options = {
  //   abi: dividendDistributorAbi,
  //   contractAddress: simpleContractAddress,
  //   functionName: "getUnpaidEarnings",
  //   params: {
  //     _address: address
  //   },
  // }

  // const ABI = [{
  //   "constant": true,
  //   "inputs": [
  //     {
  //       "internalType": "address",
  //       "name": "shareholder",
  //       "type": "address"
  //     }
  //   ],
  //   "name": "getUnpaidEarnings",
  //   "outputs": [
  //     {
  //       "internalType": "uint256",
  //       "name": "",
  //       "type": "uint256"
  //     }
  //   ],
  //   "stateMutability": "view",
  //   "type": "function"
  // }];

  // fetch({ params: options });
  // return JSON.stringify(data);
  return "coming soon";
}