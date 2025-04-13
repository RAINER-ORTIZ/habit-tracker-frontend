'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Habit Tracker</h1>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/new-habit">Nuevo Hábito</Link>
        <Link href="/login">Cerrar Sesión</Link>
      </div>
    </nav>
  );
}
