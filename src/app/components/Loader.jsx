'use client';
import { useEffect, useState } from 'react';

const greetings = ['Car', 'Apartment', 'Equipment', 'Services', 'RentAll'];

export default function Loader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-4xl font-semibold">
        <span className="text-primary">&bull;</span> {greetings[index]}
      </span>
    </div>
  );
}
