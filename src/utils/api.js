import { getToken } from './auth';

const API_URL = 'http://localhost:3001/api';

export const getHabits = async () => {
  const res = await fetch(`${API_URL}/habits`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return await res.json();
};

export const createHabit = async (name) => {
  const res = await fetch(`${API_URL}/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name }),
  });
  return await res.json();
};

export const completeHabit = async (id) => {
  return await fetch(`${API_URL}/habits/${id}/complete`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const resetHabit = async (id) => {
  return await fetch(`${API_URL}/habits/${id}/reset`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
