"use strict";

import { AbiCoder, checkResultErrors, defaultAbiCoder, ErrorFragment, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, ParamType, Result, TransactionDescription }from "@shapeshiftoss/ethers-abi";
import { getAddress, getCreate2Address, getContractAddress, getIcapAddress, isAddress } from "@shapeshiftoss/ethers-address";
import * as base64 from "@shapeshiftoss/ethers-base64";
import { Base58 as base58 } from "@shapeshiftoss/ethers-basex";
import { arrayify, concat, hexConcat, hexDataSlice, hexDataLength, hexlify, hexStripZeros, hexValue, hexZeroPad, isBytes, isBytesLike, isHexString, joinSignature, zeroPad, splitSignature, stripZeros } from "@shapeshiftoss/ethers-bytes";
import { _TypedDataEncoder, hashMessage, id, isValidName, namehash } from "@shapeshiftoss/ethers-hash";
import { defaultPath, entropyToMnemonic, getAccountPath, HDNode, isValidMnemonic, mnemonicToEntropy, mnemonicToSeed } from "@shapeshiftoss/ethers-hdnode";
import { getJsonWalletAddress } from "@shapeshiftoss/ethers-json-wallets";
import { keccak256 } from "@shapeshiftoss/ethers-keccak256";
import { Logger } from "@shapeshiftoss/ethers-logger";
import { computeHmac, ripemd160, sha256, sha512 } from "@shapeshiftoss/ethers-sha2";
import { keccak256 as solidityKeccak256, pack as solidityPack, sha256 as soliditySha256 } from "@shapeshiftoss/ethers-solidity";
import { randomBytes, shuffled } from "@shapeshiftoss/ethers-random";
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from "@shapeshiftoss/ethers-properties";
import * as RLP from "@shapeshiftoss/ethers-rlp";
import { computePublicKey, recoverPublicKey, SigningKey } from "@shapeshiftoss/ethers-signing-key";
import { formatBytes32String, nameprep, parseBytes32String, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs } from "@shapeshiftoss/ethers-strings";
import { accessListify, computeAddress, parse as parseTransaction, recoverAddress, serialize as serializeTransaction } from "@shapeshiftoss/ethers-transactions";
import { commify, formatEther, parseEther, formatUnits, parseUnits } from "@shapeshiftoss/ethers-units";
import { verifyMessage, verifyTypedData } from "@shapeshiftoss/ethers-wallet";
import { _fetchData, fetchJson, poll } from "@shapeshiftoss/ethers-web";

////////////////////////
// Enums

import { SupportedAlgorithm } from "@shapeshiftoss/ethers-sha2";
import { UnicodeNormalizationForm, Utf8ErrorReason } from "@shapeshiftoss/ethers-strings";
import { UnsignedTransaction } from "@shapeshiftoss/ethers-transactions";

////////////////////////
// Types and Interfaces

import { CoerceFunc } from "@shapeshiftoss/ethers-abi";
import { Bytes, BytesLike, Hexable } from "@shapeshiftoss/ethers-bytes"
import { Mnemonic } from "@shapeshiftoss/ethers-hdnode";
import { EncryptOptions, ProgressCallback } from "@shapeshiftoss/ethers-json-wallets";
import { Deferrable } from "@shapeshiftoss/ethers-properties";
import { Utf8ErrorFunc } from "@shapeshiftoss/ethers-strings";
import { AccessList, AccessListish } from "@shapeshiftoss/ethers-transactions";
import { ConnectionInfo, FetchJsonResponse, OnceBlockable, OncePollable, PollOptions } from "@shapeshiftoss/ethers-web";

////////////////////////
// Exports

export {
    AbiCoder,
    defaultAbiCoder,

    Fragment,
    ErrorFragment,
    EventFragment,
    FunctionFragment,
    ParamType,
    FormatTypes,

    checkResultErrors,
    Result,

    Logger,

    RLP,

    _fetchData,
    fetchJson,
    poll,

    checkProperties,
    deepCopy,
    defineReadOnly,
    getStatic,
    resolveProperties,
    shallowCopy,

    arrayify,

    concat,
    stripZeros,
    zeroPad,

    isBytes,
    isBytesLike,

    defaultPath,
    HDNode,
    SigningKey,

    Interface,

    LogDescription,
    TransactionDescription,

    base58,
    base64,

    hexlify,
    isHexString,
    hexConcat,
    hexStripZeros,
    hexValue,
    hexZeroPad,
    hexDataLength,
    hexDataSlice,

    nameprep,
    _toEscapedUtf8String,
    toUtf8Bytes,
    toUtf8CodePoints,
    toUtf8String,
    Utf8ErrorFuncs,

    formatBytes32String,
    parseBytes32String,

    hashMessage,
    namehash,
    isValidName,
    id,

    _TypedDataEncoder,

    getAddress,
    getIcapAddress,
    getContractAddress,
    getCreate2Address,
    isAddress,

    formatEther,
    parseEther,

    formatUnits,
    parseUnits,

    commify,

    computeHmac,
    keccak256,
    ripemd160,
    sha256,
    sha512,

    randomBytes,
    shuffled,

    solidityPack,
    solidityKeccak256,
    soliditySha256,

    splitSignature,
    joinSignature,

    accessListify,
    parseTransaction,
    serializeTransaction,

    getJsonWalletAddress,

    computeAddress,
    recoverAddress,

    computePublicKey,
    recoverPublicKey,

    verifyMessage,
    verifyTypedData,

    getAccountPath,
    mnemonicToEntropy,
    entropyToMnemonic,
    isValidMnemonic,
    mnemonicToSeed,


    ////////////////////////
    // Enums

    SupportedAlgorithm,

    UnicodeNormalizationForm,
    Utf8ErrorReason,

    ////////////////////////
    // Types

    Bytes,
    BytesLike,
    Hexable,

    AccessList,
    AccessListish,
    UnsignedTransaction,

    CoerceFunc,

    Indexed,

    Mnemonic,

    Deferrable,

    Utf8ErrorFunc,

    ConnectionInfo,
    OnceBlockable,
    OncePollable,
    PollOptions,
    FetchJsonResponse,

    EncryptOptions,
    ProgressCallback
}

