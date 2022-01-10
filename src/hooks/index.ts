// hooks/index.ts
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall } from "@usedapp/core";
import dividendDistributorAbi from "../abi/dividendDistributor.json";
import { simpleContractAddress } from "../contracts"
import { useEffect } from "react";

const dividendDistributorInterface = new ethers.utils.Interface(dividendDistributorAbi);
const contract = new Contract(simpleContractAddress, dividendDistributorInterface);

  export function useClaimDividend() {
    const { state, send } = useContractFunction(contract, "claimDividend", {});
    return { state, send };
}

export function useCheckEarnings(address: string | null | undefined) {
  const [pending]: any = useContractCall(address && {
    abi: dividendDistributorInterface,
    address: simpleContractAddress,
    method: "getUnpaidEarnings",
    args: [address],
  }) ?? [];
  return pending;
}

export function useTotalDistributed() {
  const [totalDist]: any = useContractCall({
    abi: dividendDistributorInterface,
    address: simpleContractAddress,
    method: "totalDistributed",
    args: [],
  }) ?? [];
  return totalDist;
}

export function useDividendsPerShare() {
  const [dpa]: any = useContractCall({
    abi: dividendDistributorInterface,
    address: simpleContractAddress,
    method: "dividendsPerShare",
    args: [],
  }) ?? [];
  return dpa;
}

export function useDividendsPerShareAccuracyFactor() {
  const [dpsa]: any = useContractCall({
    abi: dividendDistributorInterface,
    address: simpleContractAddress,
    method: "dividendsPerShareAccuracyFactor",
    args: [],
  }) ?? [];
  return dpsa;
}

export function useShares(address: string | null | undefined) {
  const [shares]: any[] = useContractCall({
    abi: dividendDistributorInterface,
    address: simpleContractAddress,
    method: "shares",
    args: [address],
  }) ?? [];
  return shares;
}