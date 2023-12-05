import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" id="logo">
        Logo
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-us">About</Link>
      </nav>
    </header>
  );
}
