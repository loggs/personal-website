import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="h-[6rem] w-full items-center justify-center grid grid-cols-4 gap-4">
      <div></div>
      <div className="col-span-2 flex justify-between items-center w-full">
        <h1 className="w-auto text-2xl font-bold pr-[4rem]">Logan Suguitan</h1>
        <div className="flex flex-1 w-full">
          {links.map(({ name, href }) => (
            <nav key={href} className="pl-[24px] pr-[24px]">
              <Link href={href} className="hover:text-gray-400 text-2xl">
                {name}
              </Link>
            </nav>
          ))}
        </div>
        <div></div>
      </div>
      <div></div>
    </header>
  );
}
