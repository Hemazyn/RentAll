import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex flex-row gap-2 items-center cursor-pointer">
      <Image src="/rentAll.png" alt="brand" width={30} height={30} />
      <span className="text-2xl md:text-3xl font-extrabold font-poppins text-[#E60023] tracking-tight drop-shadow-sm cursor-pointer">RentAll</span>
    </Link>
  );
}
