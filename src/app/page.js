export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Habit Tracker</h1>
        <p className="text-gray-700 mb-6">
          Construye hábitos sólidos y sostenibles, un día a la vez. 📆💪
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/login" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl">
            Iniciar Sesión
          </a>
          <a href="/register" className="border border-indigo-500 text-indigo-500 hover:bg-indigo-100 px-4 py-2 rounded-xl">
            Registrarse
          </a>
        </div>
      </div>
    </main>
  );
}
