import Image from "next/image";
import { CoverBookCard } from "../CoverBookCard";

export const BuyBookPage = () => {
  return (
    <>
      <div className="mx-auto w-fit">
        <Image
          alt="banner2"
          src="/static/images/banner2.png"
          width={763}
          height={365}
        />
      </div>
      <div className="grid grid-cols-3">
        <CoverBookCard src="/static/images/nft-book1.png" />
        <CoverBookCard src="/static/images/nft-book2.png" />
        <CoverBookCard src="/static/images/nft-book3.png" />
      </div>
    </>
  );
};
