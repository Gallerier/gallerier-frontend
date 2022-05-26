import { BookCard } from "components/BookCard";
import Image from "next/image";

export const ExplorePage = () => {
  return (
    <>
      <div className="text-center">
        <div className="">
          <input
            type="text"
            placeholder="Search for collection..."
            className="w-[514px] h-[43px] px-[25px]"
          />
          {/* <Image
              alt="search-icon"
              src="/static/icons/search.png"
              width={20}
              height={20}
              className="translate-x-3"
            /> */}
        </div>
        <div className="flex gap-2 justify-center my-[24px]">
          {["Most Popular", "Top Trending", "Latest"].map((filter) => (
            <div
              key={filter}
              className="collection-type w-fit px-[14px] text-xs py-1"
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(10)].map((_, i) => (
          <BookCard key={i} />
        ))}
      </div>
      <style jsx>{`
        .collection-type {
          height: 28px;
          background: linear-gradient(
            96.32deg,
            rgba(250, 197, 193, 0.6) -15.76%,
            rgba(255, 255, 255, 0.06) 103.88%
          );
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};
