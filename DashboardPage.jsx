import { useState, useEffect } from 'react';
import { api } from '../services/api.js';
import { subscribeToEstoqueUpdates } from '../services/websocket.js';

export default function DashboardPage() {
  const [metricas, setMetricas] = useState({
    produtosEmPromocao: 0,
    clientesCadastrados: 0,
    reservasAtivas: 0,
    itensVencimentoProximo: 0
  });

  async function carregarMetricas() {
    try {
      const response = await api.get('/dashboard/metricas');
      setMetricas(response.data);
    } catch (err) {
      console.error('Falha ao carregar métricas:', err);
    }
  }

  useEffect(() => {
    carregarMetricas();
    // Atualização em tempo real (RNF04)
    const unsubscribe = subscribeToEstoqueUpdates(() => {
      carregarMetricas();
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <h2>Painel Geral - Visão do Sistema</h2>
      <div className="grid-cards">
        <div className="card">
          <h3>Produtos em Promoção</h3>
          <p>{metricas.produtosEmPromocao}</p>
        </div>
        <div className="card">
          <h3>Clientes Cadastrados</h3>
          <p>{metricas.clientesCadastrados}</p>
        </div>
        <div className="card">
          <h3>Reservas Ativas</h3>
          <p>{metricas.reservasAtivas}</p>
        </div>
        <div className="card">
          <h3>Próximos do Vencimento</h3>
          <p>{metricas.itensVencimentoProximo}</p>
        </div>
      </div>
    </div>
  );
}