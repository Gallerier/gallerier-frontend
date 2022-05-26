import Image from "next/image";
import { BookSrcMockup } from "utils/bookMockup";
import { Jazzicon } from "./Jazzicon";

type BookCardProps = {
  name: string;
  owner: string;
  uri: string;
};

export const BookCard = () => {
  return (
    <div className="rounded-2xl relative overflow-hidden drop-shadow-xl w-[265px] h-[207px]">
      <Image alt="tmp" src={BookSrcMockup()} layout="fill" />
      <div className="absolute bottom-0 flex justify-between w-full label items-center px-5">
        <p className="font-bold text-white">The Gallery 002</p>
        {/* <Davatar
          size={24}
          address="0x3bD206e1702B1E8E6cdCf67ab59620933355F8A6"
        /> */}
        <div className="flex items-center gap-1">
        <Jazzicon account="0x3bD206e1702B1E8E6cdCf67ab59620933355F8A6" />
        <p className="text-[10px] text-white">0xfd2934...</p>
        </div>
      </div>
      <style jsx>{`
        .label {
          height: 43px;
          background: rgba(95, 95, 95, 0.4);
          backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
};
