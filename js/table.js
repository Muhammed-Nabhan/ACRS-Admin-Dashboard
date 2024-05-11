// // Function to update the report data on the page
// import CryptoJS from "crypto-js";
const KEY='62aee9049843d4979d9c55a2909981429cd3ca2234fbbb6595bd0cd27d95a017f3663ec5add807e8da44d2098801d370e56b0ba6d03431696feb19b4225d596d4ebb78a412b76971c0f2957ed35133c637612fa89a9c5d7c61c636c98a98150d514ab6322cd5a8d24db85ff9f1988de9cd657a88b510ec241b8d3de4a3d4d6edc953658d5a8b8de9627f7d50062503a9197d1bbbfc94b129d044661248ec0102184753b4cd02c30c70b0ff972ebaa1bd30bc66cb9261e1e153c5cba5739094b9a79d53ca80ccb10d661d5bf2564bd07212e80a4d58ae41866069520b7d5883151d51a5c11055266bd0866d1ce974b6f492f013fb7b2370979afd91bbe1a8fa91'
const decryptData = (data) => {
  try {
    console.log('Encrypted data:', data); // Check the encrypted data
    // Decrypt the data using AES algorithm and secret key
    const decryptedBytes = CryptoJS.AES.decrypt(data, KEY);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted data:', decryptedText); // Check the decrypted data
    return decryptedText;
  } catch (error) {
    console.error('Error decrypting data:', error);
    return '';
  }
};
function updateReportData(report) {
  document.getElementById("district").innerText = "District: " + decryptData(report.district);
  document.getElementById("area").innerText = "Area: " + decryptData(report.area);
  document.getElementById("title").innerText = "Title: " + decryptData(report.title);
  document.getElementById("description").innerText = "Description: " + decryptData(report.description);
  const photoHash = decryptData(report.photoHash);
  const videoHash = decryptData(report.videoHash);
  
  const photoURL = `https://gray-impossible-hare-849.mypinata.cloud/ipfs/${photoHash}`;
  const videoURL = `https://gray-impossible-hare-849.mypinata.cloud/ipfs/${videoHash}`;

  document.getElementById("photo").src = photoURL;
  document.getElementById("videoSource").src = videoURL;
  
}

// Function to fetch all report IDs from the smart contract
async function getAllReportIds() {
  const contractAddress = "0x655614b22461F6ed35E39823563d1277e9CaeF43"; // Replace with the deployed contract address
  const contractABI =[
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
   // Replace with the contract's ABI

  // Check if MetaMask is installed and accessible
  if (typeof window.ethereum === "undefined" || !window.ethereum.isMetaMask) {
    alert("Please install MetaMask to use this application.");
    return;
  }

  // Connect to the Ethereum network through MetaMask
  const web3 = new Web3(window.ethereum);

  // Set the default account (the currently selected account in MetaMask)
  await window.ethereum.enable();

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const reportIdsBytes = await contract.methods.getAllReports().call({ from: account });
    
    

    const reportIds = reportIdsBytes.map(bytes => {
      return bytes.id.toString();
    });
   
    console.log("Report IDs:", reportIds);
    return reportIds;


  } catch (error) {
    console.error("Error fetching report IDs:", error);
    return [];
  }
}
// Function to convert bytes array to string array


// Function to fetch report data by ID from the smart contract
async function getReportById(reportId) {
  const contractAddress = "0x655614b22461F6ed35E39823563d1277e9CaeF43"; // Replace with the deployed contract address
  const contractABI =[
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
   // Replace with the contract's ABI

  // Connect to the Ethereum network through MetaMask
  const web3 = new Web3(window.ethereum);

  // Set the default account (the currently selected account in MetaMask)
  await window.ethereum.enable();

  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  try {
    const reports = await contract.methods.getReportById(reportId).call({from: account});
    
    return reports;
    console.log(reports)
    
  } catch (error) {
    console.error("Error fetching report data:", error);
  }
}



/*
function bytesArrayToStringArray(byteArrays) {
  const stringArray = [];

  for (const byteArray of byteArrays) {
    try {
      // Remove null byte from end of byte array
      const bytesWithoutNull = byteArray.slice(0, -1);

      // Convert bytes to hexadecimal string
      const hexString = Array.from(bytesWithoutNull, (byte) => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
      }).join('');

      // Extract timestamp and nonce from hexadecimal string
      const timestamp = parseInt(hexString.slice(0, 8), 16);
      const nonce = parseInt(hexString.slice(8), 16);

      // Format nonce as string
      const formattedNonce = nonce.toString(10);

      // Concatenate timestamp, hyphen, and formatted nonce to create report ID string
      const str = timestamp + "-" + formattedNonce;
      stringArray.push(str);
    } catch (error) {
      console.error("Error converting bytes to string:", error);
    }
  }
  return stringArray;
}

*/

/*function bytesArrayToStringArray(bytesArray) {
  if (!bytesArray || bytesArray.length === 0) {
    console.error("Invalid bytes array:", bytesArray);
    return new Array(bytesArray.length).fill("");
  }

  const stringArray = [];
  for (let i = 0; i < bytesArray.length; i++) {
    try {
      if (bytesArray[i].length > 0) {
        // Remove the null bytes from the byte array and convert it to a string
        const uint8Array = new Uint8Array(bytesArray[i].slice(0, -1));

        // Split the byte array into individual report IDs
        const reportIdByteArrays = splitByteArrayByComma(uint8Array);

        const reportIdStrings = reportIdByteArrays.map(reportIdByteArray => {
          // Extract the timestamp and nonce from the byte array
          const hexString = Array.from(reportIdByteArray, b => b.toString(16).padStart(2, '0')).join('');
          const timestamp = "0x" + hexString.slice(0, 24);
          const nonce = "0x" + hexString.slice(24, 48);
          const nonceInt = parseInt(nonce, 16);
          const formattedNonce = nonceInt > 0 ? nonceInt.toString() : "-1";
          const str = timestamp + formattedNonce;
          return str;
        });

        stringArray.push(...reportIdStrings);
      } else {
        stringArray.push("");
      }
    } catch (error) {
      console.error("Error converting bytes to string:", error);
    }
  }
  return stringArray;
}

function splitByteArrayByComma(byteArray) {
  const view = new DataView(byteArray.buffer);
  let offset = 0;
  const reportIdByteArrays = [];

  while (offset < byteArray.length) {
    const byte = view.getUint8(offset++);
    if (byte === 44) { // Comma byte
      reportIdByteArrays.push(byteArray.slice(0, offset - 1));
    }
  }

  if (offset < byteArray.length) {
    reportIdByteArrays.push(byteArray.slice(offset));
  }

  return reportIdByteArrays;
}*/
// Function to convert bytes array to original report IDs
// Function to convert bytes array to original report IDs


// Function to convert bytes array to original report IDs latest
/*function bytesArrayToReportIds(reportIdsBytes) {
  const reportIds = [];

  for (let i = 0; i < reportIdsBytes.length; i++) {
      try {
          // Remove the '0x' prefix and parse the number
          const reportIdNumber = new BN(reportIdsBytes[i].substring(2), 16);

          // Split timestamp and nonce
          const timestamp = reportIdNumber.shrn(128).toString(10); // Shift right 128 bits
          const nonce = reportIdNumber.and(new BN('ffffffffffffffffffffffff', 16)).toString(10); // Mask the lower 128 bits

          // Combine timestamp and nonce to get the original report ID
          const reportId = timestamp + "-" + nonce;
          reportIds.push(reportId);
      } catch (error) {
          console.error("Error converting bytes to report ID:", error);
      }
  }

  return reportIds;
}
*/


// Function to convert bytes array to original report IDs using bn.js




// Function to populate the report select dropdown
async function populateReportSelect() {
  const reportSelect = document.getElementById("reportSelect");
  reportSelect.innerHTML = "<option value='' disabled selected>Select a report</option>";

  /*const reportIdsBytes = await getAllReportIds();
  const reportIds = reportIdsBytes.map(bytes => web3.utils.hexToUtf8(bytes));*/
  const reportIds = await getAllReportIds();
  
  console.log(reportIds)


  reportIds.forEach(reportId => {
    const option = document.createElement("option");
    option.value = reportId;
    option.innerText = reportId;
    reportSelect.appendChild(option);
  });
}


// Function to handle report selection
async function handleReportSelection() {
  const selectedReportId = document.getElementById("reportSelect").value;
  if (!selectedReportId) {
    return;
  }

  const report = await getReportById(selectedReportId);
  updateReportData(report);
}

// Add event listener to handle report selection changes
document.getElementById("reportSelect").addEventListener("change", handleReportSelection);

// Initialize the page
populateReportSelect();
