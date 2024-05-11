document.addEventListener("DOMContentLoaded", async () => {
    const signInButton = document.getElementById("signInButton");
  
    signInButton.addEventListener("click", async () => {
      if (typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum);
  
        try {
          await window.ethereum.enable();
  
          const accounts = await web3.eth.getAccounts();
  
          const contractAddress = "0x655614b22461F6ed35E39823563d1277e9CaeF43";
          const CONTRACT_ABI = 
          [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_admin",
                        "type": "address"
                    }
                ],
                "name": "addAdmin",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "admin",
                        "type": "address"
                    }
                ],
                "name": "AdminAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "admin",
                        "type": "address"
                    }
                ],
                "name": "AdminRevoked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "district",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "area",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "photoHash",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "videoHash",
                        "type": "string"
                    }
                ],
                "name": "ReportSubmitted",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_admin",
                        "type": "address"
                    }
                ],
                "name": "revokeAdmin",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "district",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "area",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "photoHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "videoHash",
                        "type": "string"
                    }
                ],
                "name": "submitReport",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "admin",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "admins",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getAllReports",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "district",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "area",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "title",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "photoHash",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "videoHash",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct AnonymousReportingSystem.Report[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "getReportById",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "district",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "area",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "title",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "photoHash",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "videoHash",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct AnonymousReportingSystem.Report",
                        "name": "",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getTotalReports",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "reportCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "reports",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "district",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "area",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "photoHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "videoHash",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
          const contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
  
          const hasAccess = await contract.methods.allowedAddresses(accounts[0]).call();
          console.log(hasAccess)
  
          if (hasAccess) {
            window.location.href = "dashboard.html";
          } else {
            alert("Unauthorized access. Please contact the administrator.");
          }
        } catch (error) {
          console.error("Error while checking access:", error);
        }
      } else {
        alert("Please install Metamask to access this application.");
      }
    });
  });
  