import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 lg:px-32 py-10 grid gap-4">
      <div className="flex justify-between">
        <div>
          <Logo />
          <p className="text-xs">
            Built by{" "}
            <a
              href="https://github.com/suman-3"
              className="hover:text-primary hover:underline"
              target="_blank"
            >
              suman
            </a>{" "}
            avilable on{" "}
            <a
              className="hover:text-primary hover:underline"
              href="https://github.com/suman-3/sync"
              target="_blank"
            >
              github
            </a>
            .
          </p>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <ul className="text-sm grid gap-1">
        <li className="hover:underline hover:text-primary text-sm">
          <Link href="https://github.com/suman-3/sync/fork" target="_blank">
            Fix This Web
          </Link>
        </li>
        <li className="hover:underline hover:text-primary text-sm">
          <Link href="https://github.com/suman-3/sync/issues" target="_blank">
            Report An Issue
          </Link>
        </li>
      </ul>
      <p className="text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href='https://sync.exions.xyz'
          className="text-primary hover:underline"
        >
          Sync
        </Link>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
