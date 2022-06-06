import { useAuthStore } from '@/stores/auth.store';

const baseURL = import.meta.env.VITE_SERVER_URL;
const headers = { 'Content-Type': 'application/json' };

const GET = async (url: string, options: any) => {
  const response = await fetch(`${baseURL}/${useAuthStore().userId}${url}`, { headers, ...options });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to fetch data');
};

const POST = async (url: string, body: any, options: any) => {
  const response = await fetch(`${baseURL}/${useAuthStore().userId}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to create data');
};

const PUT = async (url: string, body: any, options: any) => {
  const response = await fetch(`${baseURL}/${useAuthStore().userId}${url}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to update data');
};

const PATCH = async (url: string, body: any, options: any) => {
  const response = await fetch(`${baseURL}/${useAuthStore().userId}${url}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
    ...options,
  });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to update data');
};

const DELETE = async (url: string, options: any) => {
  const response = await fetch(`${baseURL}/${useAuthStore().userId}${url}`, {
    method: 'DELETE',
    ...options,
  });
  const data = await response.json();
  if (response.ok)
    return data;

  else
    throw new Error(data.message || 'Failed to delete data');
};

export default { GET, POST, PUT, PATCH, DELETE };
