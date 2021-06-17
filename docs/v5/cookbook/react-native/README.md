-----

Documentation: [html](https://docs.ethers.io/)

-----

React Native (and ilk)
======================

Installing
----------

```
/home/ricmoo/my-react-project> npm install @shapeshiftoss/ethers-shims --save
```

```
// Pull in the shims (BEFORE importing ethers)
import "@shapeshiftoss/ethers-shims"

// Import the ethers library
import { ethers } from "@shapeshiftoss/ethers";
```

Security
--------

```
// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@shapeshiftoss/ethers-shims"

// Import the ethers library
import { ethers } from "@shapeshiftoss/ethers";
```

