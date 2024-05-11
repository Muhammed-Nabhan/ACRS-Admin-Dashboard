// Import the Web3.js library
// Replace the 'web3' import path with the correct location of the Web3.js library in your project
import Web3 from 'web3';

// Your smart contract ABI (Application Binary Interface) and contract address
const contractABI = [
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

const contractAddress = '0x655614b22461F6ed35E39823563d1277e9CaeF43'; // Replace with your actual contract address

// Initialize Web3
let web3;

// Check if Web3 is already available in the browser
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access");
  }
} else if (window.web3) {
  // Legacy dapp browsers...
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Non-dapp browsers...
  console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
}

// Connect to the smart contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Function to create a notification element
function createNotification(title, time) {
  // Same as before
}

// Function to display the notification and manage the notification count
function showNotification(title, time) {
  // Same as before
}

// Function to fetch report submission events from the smart contract
async function fetchReportSubmissionEvents() {
  const events = await contractInstance.getPastEvents('ReportSubmitted', {
    fromBlock: 0,
    toBlock: 'latest'
  });

  events.forEach(event => {
    const reportId = event.returnValues.reportId;
    const timestamp = event.returnValues.timestamp * 1000; // Convert to milliseconds
    const formattedTime = new Date(timestamp).toLocaleString();
    showNotification(`New report submitted: ${reportId}`, formattedTime);
  });
}

// Fetch report submission events when the page loads
window.onload = async function() {
  await fetchReportSubmissionEvents();
};

// Example: Poll for new report submission events every 10 seconds
setInterval(async () => {
  await fetchReportSubmissionEvents();
}, 10000);
