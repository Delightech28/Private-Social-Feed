import React, { useState } from 'react';
import { ethers } from 'ethers';

function App(){
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      alert('Install MetaMask!');
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>
          {account ? `Connected: ${account}`: 'Connect Wallet'}
        </button>
    </div>
  );
}

export default App;