'use client';
import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Categories', href: '#categories' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-transparent backdrop-blur-2xl fixed top-0 z-50 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-[#E60023] tracking-tight drop-shadow-sm cursor-pointer">RentAll</span>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-5">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-white font-medium hover:text-[#E60023] text-xs transition-colors duration-200 textlg">
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-row gap-2">
                  <a href="#" className="bg-[#E60023] hover:bg-[#b8001a] text-white cursor-pointer px-3 py-1.5 text-center rounded-full h10 font-semibold shadow transition text-sm">
                    iOS
                  </a>
                  <a href="#" className="border-2 border-white cursor-pointer text-white hover:bg-white/10 px-3 py-1.5 rounded-full font-semibold transition text-sm">
                    Android
                  </a>
                </div>
              </div>
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E60023]">
                  <span className="sr-only">Open main menu</span>
                  {open ? <X className="block h-7 w-7" aria-hidden="true" /> : <Menu className="block h-7 w-7" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 -translate-y-2" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 -translate-y-2">
            <Disclosure.Panel className="md:hidden bg-gradient-to-b from-[#1a0007]/90 via-[#E60023]/80 to-[#2d0b13]/90 backdrop-blur-2xl">
              <div className="space-y-1 px-4 pt-4 pb-3">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="block text-white font-medium py-2 hover:text-[#E60023] transition-colors text-lg">
                    {item.name}
                  </a>
                ))}
                <a href="#" className="block w-full text-center bg-[#E60023] text-white px-5 py-2 rounded-full font-semibold my-2 text-lg">
                  iOS
                </a>
                <a href="#" className="block w-full text-center border-2 border-white text-white px-5 py-2 rounded-full font-semibold text-lg">
                  Android
                </a>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
