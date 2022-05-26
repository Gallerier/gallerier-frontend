import Image from "next/image";

export const CoverBookCard = ({ src }: { src: string }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-[263px] h-[255px] rounded-[20px] bg-cover-book flex items-center justify-center">
        <Image alt={src} src={src} width={199} height={199} />
      </div>
      <p className="text-sm max-w-[217px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, arcu sit amet interdum placerat, erat lectus ornare purus, a scelerisque metus arcu eget velit.
      </p>
      <button className="mint-btn text-white w-[109px] h-[40px]">MINT</button>
      <style jsx>{`
        .bg-cover-book {
          background: radial-gradient(
            97.63% 897.91% at 0% 0%,
            rgba(233, 233, 233, 0.42) 0%,
            rgba(255, 255, 255, 0.06) 100%
          );
        }
        .mint-btn {
          background: linear-gradient(
            93.32deg,
            #29aae3 6.8%,
            #323aff 51.02%,
            #bd00ff 98.09%
          );
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};
