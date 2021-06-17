import { keccak256 } from "@shapeshiftoss/ethers-keccak256";
import { toUtf8Bytes } from "@shapeshiftoss/ethers-strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
