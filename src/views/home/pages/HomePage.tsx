import { BookCard } from "components/BookCard";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <div className="mx-auto w-fit">
        <Image
          alt="banner1"
          src="/static/images/banner1.png"
          width={767}
          height={447}
        />
      </div>
      <p className="text-[24px] uppercase mb-[35px]">Most popular</p>
      <div className="grid grid-cols-4 gap-8">
        {[...Array(10)].map((_, i) => (
          <BookCard key={i} />
        ))}
      </div>
    </>
  );
};
