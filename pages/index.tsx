export  { HomePage as default} from "views/home/pages/HomePage"
// import { useWeb3React } from "@web3-react/core";
// import Head from "next/head";
// import Link from "next/link";
// import Account from "components/Account";
// import ETHBalance from "components/ETHBalance";
// import TokenBalance from "components/TokenBalance";
// import useEagerConnect from "hooks/useEagerConnect";

// const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

// function Home() {
//   const { account, library } = useWeb3React();

//   const triedToEagerConnect = useEagerConnect();

//   const isConnected = typeof account === "string" && !!library;

//   return (
//     <div>
//       <Head>
//         <title>Gallerier</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header>
//         <nav>
//           <Link href="/">
//             <a>Gallerier</a>
//           </Link>

//           <Account triedToEagerConnect={triedToEagerConnect} />
//         </nav>
//       </header>

//       <main>
//         <h1 className="text-red-600">
//           Welcome to{" "}
//           <a href="https://github.com/mirshko/gallerier-frontend">
//             gallerier-frontend
//           </a>
//         </h1>

//         {isConnected && (
//           <section>
//             <ETHBalance />

//             <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
//           </section>
//         )}
//       </main>

//       <style jsx>{`
//         nav {
//           display: flex;
//           justify-content: space-between;
//         }

//         main {
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;
