import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_WS_URL || 'http://localhost:3000';

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ['websocket'],
});

// Listener em tempo real para consistência estrita de estoque (RNF04)
export function subscribeToEstoqueUpdates(callback) {
  socket.on('ESTOQUE_ATUALIZADO', (data) => {
    callback(data);
  });

  return () => socket.off('ESTOQUE_ATUALIZADO');
}