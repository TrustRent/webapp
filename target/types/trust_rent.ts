export type TrustRent = {
  "version": "0.1.0",
  "name": "trust_rent",
  "instructions": [
    {
      "name": "createRentAgreement",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rentAmount",
          "type": "u64"
        },
        {
          "name": "sdAmount",
          "type": "u64"
        },
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "payRent",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentCollectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tenantUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "paySecurityDeposit",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentCollectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tenantUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRentAgreement",
      "docs": [
        "Need to finish and verify this function"
      ],
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "rentAmount",
          "type": "u64"
        },
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endRentAgreement",
      "docs": [
        "Below here are all functions that need to be started."
      ],
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "stakeSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "removeSecurityDepositStake",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "returnSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addFundsToStake",
      "accounts": [
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeFundsFromStake",
      "accounts": [
        {
          "name": "stake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "withdrawRentPayment",
      "accounts": [
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "rentalAgreement",
      "docs": [
        "Rental agreement related structs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "landlord",
            "type": "publicKey"
          },
          {
            "name": "tenant",
            "type": "publicKey"
          },
          {
            "name": "agreementPda",
            "type": "publicKey"
          },
          {
            "name": "paymentCollectionAccount",
            "type": "publicKey"
          },
          {
            "name": "rentAmount",
            "type": "u64"
          },
          {
            "name": "startDate",
            "type": "u64"
          },
          {
            "name": "endDate",
            "type": "u64"
          },
          {
            "name": "securityDeposit",
            "type": {
              "defined": "SecurityDeposit"
            }
          },
          {
            "name": "paymentHistory",
            "type": {
              "array": [
                {
                  "defined": "Payment"
                },
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "stake",
      "docs": [
        "Staking related structs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeId",
            "type": "u64"
          },
          {
            "name": "landlordAddress",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "initiatedDate",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": "StakeStatus"
            }
          }
        ]
      }
    },
    {
      "name": "stakeOutcome",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeOutcomeId",
            "type": "u64"
          },
          {
            "name": "stakeId",
            "type": "u64"
          },
          {
            "name": "returnRate",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": {
              "defined": "StakeOutcomeStatus"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Payment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "paymentId",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "date",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SecurityDeposit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "initiatedDate",
            "type": "u64"
          },
          {
            "name": "paidDate",
            "type": "u64"
          },
          {
            "name": "paymentStatus",
            "type": {
              "defined": "SecurityDepositPaidStatus"
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "SecurityDepositEscrowStatus"
            }
          }
        ]
      }
    },
    {
      "name": "SecurityDepositPaidStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unpaid"
          },
          {
            "name": "Paid"
          }
        ]
      }
    },
    {
      "name": "SecurityDepositEscrowStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unfunded"
          },
          {
            "name": "Escrowed"
          },
          {
            "name": "Returned"
          },
          {
            "name": "Claimed"
          },
          {
            "name": "Staked"
          }
        ]
      }
    },
    {
      "name": "StakeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initiated"
          },
          {
            "name": "InProgress"
          },
          {
            "name": "Completed"
          }
        ]
      }
    },
    {
      "name": "StakeOutcomeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initiated"
          },
          {
            "name": "InProgress"
          },
          {
            "name": "Completed"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidRentAmount",
      "msg": "The specified rent amount id invalid"
    },
    {
      "code": 6001,
      "name": "InvalidDates",
      "msg": "The start date must be before the end date"
    },
    {
      "code": 6002,
      "name": "InvalidPaymentAccount",
      "msg": "The specified payment account is invalid"
    },
    {
      "code": 6003,
      "name": "InvalidSDAmount",
      "msg": "The specified security deposit amount is invalid"
    },
    {
      "code": 6004,
      "name": "PaymentAlreadyMade",
      "msg": "This payment has already been made"
    }
  ]
};

export const IDL: TrustRent = {
  "version": "0.1.0",
  "name": "trust_rent",
  "instructions": [
    {
      "name": "createRentAgreement",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rentAmount",
          "type": "u64"
        },
        {
          "name": "sdAmount",
          "type": "u64"
        },
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "payRent",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentCollectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tenantUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "paySecurityDeposit",
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentCollectionAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tenantUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateRentAgreement",
      "docs": [
        "Need to finish and verify this function"
      ],
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "rentAmount",
          "type": "u64"
        },
        {
          "name": "startDate",
          "type": "u64"
        },
        {
          "name": "endDate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "endRentAgreement",
      "docs": [
        "Below here are all functions that need to be started."
      ],
      "accounts": [
        {
          "name": "rentalAgreement",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "stakeSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "removeSecurityDepositStake",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "returnSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimSecurityDeposit",
      "accounts": [
        {
          "name": "securityDepositEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addFundsToStake",
      "accounts": [
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeFundsFromStake",
      "accounts": [
        {
          "name": "stake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "companyWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlord",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "f64"
        }
      ]
    },
    {
      "name": "withdrawRentPayment",
      "accounts": [
        {
          "name": "tenant",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "landlordWallet",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "rentalAgreement",
      "docs": [
        "Rental agreement related structs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "landlord",
            "type": "publicKey"
          },
          {
            "name": "tenant",
            "type": "publicKey"
          },
          {
            "name": "agreementPda",
            "type": "publicKey"
          },
          {
            "name": "paymentCollectionAccount",
            "type": "publicKey"
          },
          {
            "name": "rentAmount",
            "type": "u64"
          },
          {
            "name": "startDate",
            "type": "u64"
          },
          {
            "name": "endDate",
            "type": "u64"
          },
          {
            "name": "securityDeposit",
            "type": {
              "defined": "SecurityDeposit"
            }
          },
          {
            "name": "paymentHistory",
            "type": {
              "array": [
                {
                  "defined": "Payment"
                },
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "stake",
      "docs": [
        "Staking related structs"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeId",
            "type": "u64"
          },
          {
            "name": "landlordAddress",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "initiatedDate",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": "StakeStatus"
            }
          }
        ]
      }
    },
    {
      "name": "stakeOutcome",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeOutcomeId",
            "type": "u64"
          },
          {
            "name": "stakeId",
            "type": "u64"
          },
          {
            "name": "returnRate",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "status",
            "type": {
              "defined": "StakeOutcomeStatus"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Payment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "paymentId",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "date",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SecurityDeposit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "initiatedDate",
            "type": "u64"
          },
          {
            "name": "paidDate",
            "type": "u64"
          },
          {
            "name": "paymentStatus",
            "type": {
              "defined": "SecurityDepositPaidStatus"
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "SecurityDepositEscrowStatus"
            }
          }
        ]
      }
    },
    {
      "name": "SecurityDepositPaidStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unpaid"
          },
          {
            "name": "Paid"
          }
        ]
      }
    },
    {
      "name": "SecurityDepositEscrowStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unfunded"
          },
          {
            "name": "Escrowed"
          },
          {
            "name": "Returned"
          },
          {
            "name": "Claimed"
          },
          {
            "name": "Staked"
          }
        ]
      }
    },
    {
      "name": "StakeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initiated"
          },
          {
            "name": "InProgress"
          },
          {
            "name": "Completed"
          }
        ]
      }
    },
    {
      "name": "StakeOutcomeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initiated"
          },
          {
            "name": "InProgress"
          },
          {
            "name": "Completed"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidRentAmount",
      "msg": "The specified rent amount id invalid"
    },
    {
      "code": 6001,
      "name": "InvalidDates",
      "msg": "The start date must be before the end date"
    },
    {
      "code": 6002,
      "name": "InvalidPaymentAccount",
      "msg": "The specified payment account is invalid"
    },
    {
      "code": 6003,
      "name": "InvalidSDAmount",
      "msg": "The specified security deposit amount is invalid"
    },
    {
      "code": 6004,
      "name": "PaymentAlreadyMade",
      "msg": "This payment has already been made"
    }
  ]
};
