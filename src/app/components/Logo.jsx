import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ logoColor = 'text-white' }) {
  return (
    <Link href="/" className="flex flex-row gap-2 items-center cursor-pointer">
      <Image src="/rentAll.png" alt="brand" width={30} height={30} />
      <span className={`text-2xl md:text-3xl font-semibold font-poppins ${logoColor} tracking-tight cursor-pointer`}>RentAll</span>
    </Link>
  );
}
