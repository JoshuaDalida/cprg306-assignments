import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className ="text-900">CPRG 306: Web Development 2 - Assignments</h1>
      <h1>
      <Link href="./week-2" className="hover:text-blue-400 hover:underline">Week 2</Link>
      </h1>
    </main>
  );
}

