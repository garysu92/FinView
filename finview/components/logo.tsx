import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image 
                    src="finview.svg"
                    alt="Logo"
                    width={28}
                    height={28}
                />
                <p className="font-semibold text-white test-2xl ml-2.5">FinView</p>
            </div>
        </Link>
    )
}