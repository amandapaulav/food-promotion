import { useState } from 'react';
import { api } from '../services/api.js';

export default function ProdutosPage() {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    precoNormal: '',
    quantidade: '',
    lote: '',
    dataVencimento: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // RF01, RF03, RF04: Cadastro de produto, quantidade e lote com validade
      await api.post('/produtos', formData);
      alert('Produto e lote cadastrados com sucesso!');
      setFormData({ nome: '', categoria: '', precoNormal: '', quantidade: '', lote: '', dataVencimento: '' });
    } catch (err) {
      console.error('Erro ao cadastrar produto:', err);
      alert('Erro ao realizar o cadastro.');
    }
  }

  return (
    <div className="container">
      <h2>Cadastro de Produtos - Controle de Estoque e Validade</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div className="form-group">
          <label>Nome do Produto</label>
          <input name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <input name="categoria" value={formData.categoria} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Preço Normal (R$)</label>
          <input type="number" step="0.01" name="precoNormal" value={formData.precoNormal} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Quantidade em Estoque</label>
          <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Identificador do Lote</label>
          <input name="lote" value={formData.lote} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Data de Vencimento</label>
          <input type="date" name="dataVencimento" value={formData.dataVencimento} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-submit">Salvar Registro</button>
      </form>
    </div>
  );
}