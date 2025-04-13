'use client';

export default function HabitCard({ habit, onComplete, onReset }) {
  const progreso = (habit.daysCompleted / 66) * 100;

  const getColor = () => {
    if (progreso >= 100) return 'bg-green-500';
    if (progreso >= 40) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">{habit.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{habit.daysCompleted} / 66 días</p>
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <div className={`h-full ${getColor()}`} style={{ width: `${progreso}%` }} />
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onComplete(habit._id)} className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600">
          ✅ Marcar
        </button>
        <button onClick={() => onReset(habit._id)} className="px-4 py-2 bg-gray-200 text-sm rounded-xl hover:bg-gray-300">
          🔁 Reiniciar
        </button>
      </div>
    </div>
  );
}
