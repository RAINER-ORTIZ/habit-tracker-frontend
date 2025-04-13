'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ ¡Inicio de sesión exitoso!');
        // Aquí puedes guardar el token o redirigir al usuario
        // localStorage.setItem('token', data.token);
        // router.push('/dashboard');
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      setMessage('❌ Error al conectar con el servidor.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Iniciar Sesión</h2>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl"
          required
        />

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-3 rounded-xl font-semibold"
        >
          Iniciar Sesión
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </form>
    </main>
  );
}
