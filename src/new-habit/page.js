'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { createHabit } from '@/utils/api';

export default function NewHabitPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createHabit(name);
    router.push('/dashboard');
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Nuevo Hábito</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre del hábito"
            className="w-full px-4 py-2 border rounded-xl mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}
