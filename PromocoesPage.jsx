import { useState, useEffect } from 'react';
import { api } from '../services/api.js';
import { subscribeToEstoqueUpdates } from '../services/websocket.js';
import { calcularDesconto, calcularPrecoFinal } from '../utils/discounts.js';

export default function PromocoesPage() {
  const [promocoes, setPromocoes] = useState([]);

  async function carregarPromocoes() {
    try {
      const response = await api.get('/promocoes');
      // RF05: Ordena por proximidade de vencimento (ordem crescente)
      const ordenados = response.data.sort((a, b) => a.diasParaVencer - b.diasParaVencer);
      setPromocoes(ordenados);
    } catch (err) {
      console.error('Erro ao buscar promoções:', err);
    }
  }

  useEffect(() => {
    carregarPromocoes();
    // RNF04: Atualização automática em tempo real
    const unsubscribe = subscribeToEstoqueUpdates(() => {
      carregarPromocoes();
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <h2>Promoções por Vencimento - Regras e Aplicação Automática</h2>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Lote</th>
            <th>Vencimento</th>
            <th>Dias Restantes</th>
            <th>Desconto</th>
            <th>Preço Promocional</th>
          </tr>
        </thead>
        <tbody>
          {promocoes.map((item) => {
            const desconto = calcularDesconto(item.diasParaVencer);
            const precoFinal = calcularPrecoFinal(item.precoOriginal, desconto);

            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.lote}</td>
                <td>{item.dataVencimento}</td>
                <td>{item.diasParaVencer} dias</td>
                <td>
                  <span className={`badge badge-${desconto * 100}`}>
                    {(desconto * 100).toFixed(0)}%
                  </span>
                </td>
                <td>R$ {precoFinal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}