import { useState, useEffect } from 'react';
import { api } from '../services/api.js';

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function carregarClientes() {
      try {
        const response = await api.get('/clientes'); // RF02
        setClientes(response.data);
      } catch (err) {
        console.error('Erro ao carregar clientes:', err);
      }
    }
    carregarClientes();
  }, []);

  return (
    <div className="container">
      <h2>Carteira de Clientes - Divulgação Personalizada</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>E-mail</th>
            <th>Produtos de Interesse / Compras Frequentes</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli) => (
            <tr key={cli.id}>
              <td><strong>{cli.nome}</strong></td>
              <td>{cli.email}</td>
              <td>{Array.isArray(cli.interesses) ? cli.interesses.join(', ') : cli.interesses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}