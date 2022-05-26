import useEagerConnect from "hooks/useEagerConnect";
import { ROUTE_NAME } from "const";
import Image from "next/image";
import Link from "next/link";
import Account from "./Account";
import { useRouter } from "next/router";

const Menu = ({
  name,
  path,
  selected,
}: {
  name: string;
  path: string;
  selected: boolean;
}) => {
  const textColor = selected ? "text-skyblue" : "";
  return (
    <Link href={path} passHref>
      <span className={`uppercase mr-6 cursor-pointer ${textColor}`}>
        {name}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const triedToEagerConnect = useEagerConnect();
  const router = useRouter();
  console.log(router.asPath, router.pathname);

  const menus = [
    {
      name: "explore",
      path: ROUTE_NAME.explore,
    },
    {
      name: "buy book",
      path: ROUTE_NAME.buyBook,
    },
    {
      name: "market",
      path: ROUTE_NAME.market,
    },
  ];
  return (
    <div className="container mx-auto h-137 relative">
      <div className="absolute right-0 top-0 -mt-9">
        <Image
          alt="prop1"
          src="/static/images/prop1.png"
          width={156}
          height={88}
        />
      </div>
      <div className="flex justify-between my-9 static">
        <Link href={ROUTE_NAME.home} passHref>
          <Image
            alt="gallerier-logo"
            src="/static/logos/gallerier.png"
            width={186}
            height={61}
            className="cursor-pointer"
          />
        </Link>
        <div className="my-auto">
          {menus.map((m) => (
            <Menu key={m.name} {...m} selected={router.asPath == m.path} />
          ))}
          <Account triedToEagerConnect={triedToEagerConnect} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
