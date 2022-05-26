import Image from "next/image";

export const Footer = () => {
  const externalLink = [
    {
      icon: "/static/icons/github.png",
    },
    {
      icon: "/static/icons/discord.png",
    },
    {
      icon: "/static/icons/twitter.png",
    },
  ];
  return (
    <div className="container mx-auto flex justify-between items-center mb-[29px] mt-[35px]">
      <div className="w-fit">
        <Image
          alt="licensed"
          src="/static/logos/licensedBy.png"
          width={96}
          height={31}
        />
      </div>
      <div className="flex gap-4">
        {externalLink.map(({ icon }, i) => (
          <Image key={i} alt={icon} src={icon} width={28} height={28} />
        ))}
      </div>
    </div>
  );
};
