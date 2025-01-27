"use strict";

import { BaseContract, Contract, ContractFactory } from "@shapeshiftoss/ethers-contracts";

import { BigNumber, FixedNumber } from "@shapeshiftoss/ethers-bignumber";

import { Signer, VoidSigner } from "@shapeshiftoss/ethers-abstract-signer";
import { Wallet } from "@shapeshiftoss/ethers-wallet";

import * as constants from "@shapeshiftoss/ethers-constants";

import * as providers from "@shapeshiftoss/ethers-providers";
import { getDefaultProvider } from "@shapeshiftoss/ethers-providers";

import { Wordlist, wordlists} from "@shapeshiftoss/ethers-wordlists";

import * as utils from "./utils";

import { ErrorCode as errors, Logger } from "@shapeshiftoss/ethers-logger";

////////////////////////
// Types

import { BigNumberish } from "@shapeshiftoss/ethers-bignumber";
import { Bytes, BytesLike, Signature } from "@shapeshiftoss/ethers-bytes";
import { Transaction, UnsignedTransaction } from "@shapeshiftoss/ethers-transactions";


////////////////////////
// Compile-Time Constants

// This is generated by "npm run dist"
import { version } from "./_version";

const logger = new Logger(version);

////////////////////////
// Types

import {
    ContractFunction,
    ContractReceipt,
    ContractTransaction,

    Event,
    EventFilter,

    Overrides,
    PayableOverrides,
    CallOverrides,

    PopulatedTransaction,

    ContractInterface
} from "@shapeshiftoss/ethers-contracts";


////////////////////////
// Exports

export {
    Signer,

    Wallet,
    VoidSigner,

    getDefaultProvider,
    providers,

    BaseContract,
    Contract,
    ContractFactory,

    BigNumber,
    FixedNumber,

    constants,
    errors,

    logger,

    utils,

    wordlists,


    ////////////////////////
    // Compile-Time Constants

    version,


    ////////////////////////
    // Types

    ContractFunction,
    ContractReceipt,
    ContractTransaction,
    Event,
    EventFilter,

    Overrides,
    PayableOverrides,
    CallOverrides,

    PopulatedTransaction,

    ContractInterface,

    BigNumberish,

    Bytes,
    BytesLike,

    Signature,

    Transaction,
    UnsignedTransaction,

    Wordlist
};

