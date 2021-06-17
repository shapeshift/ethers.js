"use strict";

import { getAddress } from "@shapeshiftoss/ethers-address";
import { hexZeroPad } from "@shapeshiftoss/ethers-bytes";

import { Coder, Reader, Writer } from "./abstract-coder";

export class AddressCoder extends Coder {

    constructor(localName: string) {
        super("address", "address", localName, false);
    }

    defaultValue(): string {
        return "0x0000000000000000000000000000000000000000";
    }

    encode(writer: Writer, value: string): number {
        try {
            getAddress(value);
        } catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }

    decode(reader: Reader): any {
        return getAddress(hexZeroPad(reader.readValue().toHexString(), 20));
    }
}

