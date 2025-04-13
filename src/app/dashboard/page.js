'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HabitCard from '@/components/HabitCard';
import { getHabits, completeHabit, resetHabit } from '@/utils/api';

export default function DashboardPage() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const data = await getHabits();
    setHabits(data);
  };

  const handleComplete = async (id) => {
    await completeHabit(id);
    fetchHabits();
  };

  const handleReset = async (id) => {
    await resetHabit(id);
    fetchHabits();
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
        {habits.map((habit) => (
          <HabitCard
            key={habit._id}
            habit={habit}
            onComplete={handleComplete}
            onReset={handleReset}
          />
        ))}
      </div>
    </div>
  );
}
