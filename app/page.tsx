import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-ds-background-200 flex flex-col justify-center items-center">
      <h3 className="text-3xl text-zinc-800 mb-1">Welcome to Meteno</h3>
      <Link href={"/dashboard"} className="hover:underline">
        Learn more
      </Link>
    </main>
  );
}
