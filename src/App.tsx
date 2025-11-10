
const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <header className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Wenjing Shi Portfolio</h1>
        <p className="text-lg">Blockchain Developer (Frontend focus) | Business-background | JS + React + Next + Ethers + Solidity </p>

      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 w-full max-w-5xl">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform h-50">
  <h2 className="text-2xl font-semibold mb-2">Yield Aggregator</h2>
  <p className="mb-4">MVP demo of a DeFi Yield Aggregator (Smart Contract + React + Ethers ).</p>

  
  <div className="flex gap-4">
    <a 
      href="https://www.loom.com/share/53541896daff4ce2b0672b82f766c8d7?sid=815a1361-b68d-48c1-941f-55874acfea15" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      Watch Demo Video
    </a>

    <a 
      href="/documents/YieldAggregator_BP.pdf" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      Project BP
    </a>
    <a 
    href="https://github.com/WenjingLondon/BlacKnightMVP_ForkedMainnet.git"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
  >
    Code
  </a>
  </div>
</div>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform flex flex-col">
  <h2 className="text-2xl font-semibold mb-2">RainbowWallet</h2>
  <p>Wagmi + RainbowWallet</p>
  <a 
    href="https://github.com/WenjingLondon/wagmi-rainbowKit.git"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto self-end bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
  >
    Code
  </a>
</div>

        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform h-50">
          <h2 className="text-2xl font-semibold mb-2">DeFi Dashboard</h2>
          <p>A lightweight DeFi interface built with React + Ethers.js, featuring wallet connection, 
            on-chain balance fetching, and swap interaction..</p>
            <div className="flex gap-4">
    <a 
      href="https://defi-interactions-demo.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      Live Demo
    </a>
    <a 
    href="https://github.com/WenjingLondon/defi-interactions-demo.git"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
  >Code
  </a>
        </div>
        </div> 
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform h-50">
          <h2 className="text-2xl font-semibold mb-2">A seamless Web2/Web3 payment tool - Celo MiniPay Dapp</h2>
          <p>Celo-powered crypto payments made simple for non-crypto users.</p>
            <div className="flex gap-4">
    
    <a 
    href="https://github.com/WenjingLondon/Celo-MiniPay-dapp.git"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
  >Code
  </a>
        </div>
        </div> 
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform h-50">
          <h2 className="text-2xl font-semibold mb-2">Moloch V3 DAO Demo</h2>
          <p>A DAO built with DAOhaus/Moloch V3 framework, featuring a custom frontend. Smart contracts are deployed on-chain. Demo is in progress — frontend interactions are actively being developed.</p>
            <div className="flex gap-4">
    
    <a 
    href="https://github.com/WenjingLondon/DAOHaus_DAOsummon_molochV3.git"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
  >Code
  </a>
        </div>
        </div> 

        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">More to come..</h2>
          
        </div>
      
<<<<<<< HEAD
      <p className="text-base italic font-light font-serif text-white whitespace-nowrap">
  📧 <a href="mailto:wenjingshi2000@hotmail.com" className="underline hover:text-white">wenjingshi2000@hotmail.com</a> | 
  💼 <a href="https://linkedin.com/in/wenjing-shi-133269123" className="underline hover:text-white">linkedin.com/in/wenjing-shi-133269123/</a> | 
  🐙 <a href="https://github.com/WenjingLondon" className="underline hover:text-white">github.com/WenjingLondon</a>
=======
      
        <p className="text-base italic font-light font-serif text-white whitespace-nowrap">
  📧{" "}
  <a
    href="mailto:wenjingshi2000@hotmail.com"
    className="underline hover:text-white"
  >
    wenjingshi2000@hotmail.com
  </a>{" "}
  💼{" "}
  <a
    href="https://linkedin.com/in/wenjing-shi-133269123"
    className="underline hover:text-white"
  >
    linkedin.com/in/wenjing-shi-133269123/
  </a>{" "}
  | 🐙{" "}
  <a
    href="https://github.com/WenjingLondon"
    className="underline hover:text-white"
  >
    github.com/WenjingLondon
  </a>
>>>>>>> Update App.tsx: update with more code demo
</p>


      </main>

      <footer className="mt-auto p-4 text-center text-sm">
        © 2025 Wenjing S. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
