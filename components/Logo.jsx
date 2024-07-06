import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none flex items-center gap-2 md:gap-2.5">
            <Image src="/logo.svg" width={40} height={40} alt="Logo" />
            <h1 className="text-3xl font-bold"><span className="text-primary">Sy</span>nc</h1>
        </Link>
    )
}