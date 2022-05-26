import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "connectors";
import useENSName from "hooks/useENSName";
import useMetaMaskOnboarding from "hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "utils";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?:any;
  disabled?: boolean;
};
const CustomButton = ({ children, onClick, disabled = false }:CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      style={{
        boxSizing: "border-box",

        width: "157px",
        height: "33px",

        background:
          "radial-gradient(97.63% 897.91% at 0% 0%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        /* Note: "backdrop-filter has minimal browser support */

        borderRadius: "20px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const {
    active,
    error,
    activate,
    chainId = 1,
    account,
    setError,
    deactivate,
  } = useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account || "");

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <>
        {isWeb3Available ? (
          <CustomButton
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            Connect Wallet
          </CustomButton>
        ) : (
          <CustomButton onClick={startOnboarding}>
            Install Metamask
          </CustomButton>
        )}
      </>
    );
  }

  return (
    <CustomButton onClick={deactivate}>
      {ENSName || `${shortenHex(account, 4)}`}
    </CustomButton>
  );
};

export default Account;
