import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image src="/rentAll.png" alt="brand" width={30} height={30} />
      <span className="text-2xl md:text-3xl font-extrabold font-inter text-[#E60023] tracking-tight drop-shadow-sm cursor-pointer">RentAll</span>
    </div>
  );
}
