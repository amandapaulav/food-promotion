import React, { useState } from 'react';

export default function App() {
  // Controle de navegação e ambiente admin
  const [telaAtual, setTelaAtual] = useState('login'); // 'login' | 'cadastro-cliente' | 'admin-produtos' | 'admin-cadastro-produto'
  const [estaLogado, setEstaLogado] = useState(false);

  // 1. Dados mockados pré-preenchidos para Login
  const [loginEmail, setLoginEmail] = useState('admin@foodpromotion.com');
  const [loginSenha, setLoginSenha] = useState('123456');
  const [erroLogin, setErroLogin] = useState('');

  // 2. Dados mockados pré-preenchidos para Cadastro de Cliente
  const [clienteForm, setClienteForm] = useState({
    nomeCompleto: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    telefone: '(85) 99123-4567',
    endereco: 'Av. Santos Dumont, 1500 - Fortaleza/CE',
    senha: 'senhaSegura123'
  });

  // 3. Dados mockados editáveis para Cadastro de Produto (Admin)
  const [produtoForm, setProdutoForm] = useState({
    nome: 'Iogurte Natural 170g',
    preco: '4.99',
    quantidade: '45',
    dataVencimento: '2026-09-22'
  });

  // Lista inicial de produtos para a tela de Listagem (RF01, RF03, RF04)
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Pão de Forma', preco: '6.49', quantidade: 30, dataVencimento: '2026-09-18' },
    { id: 2, nome: 'Leite UHT 1L', preco: '5.99', quantidade: 80, dataVencimento: '2026-09-20' },
    { id: 3, nome: 'Queijo Mussarela', preco: '24.90', quantidade: 15, dataVencimento: '2026-09-25' }
  ]);

  // Ação: Login
  function handleLogin(e) {
    e.preventDefault();
    setErroLogin('');

    if (loginEmail === 'admin@foodpromotion.com' && loginSenha === '123456') {
      setEstaLogado(true);
      setTelaAtual('admin-produtos');
    } else {
      setErroLogin('Credenciais incorretas.');
    }
  }

  // Ação: Cadastro de Cliente
  function handleCadastroCliente(e) {
    e.preventDefault();
    alert('Cliente cadastrado com sucesso!');
    setTelaAtual('login');
  }

  // Ação: Finalizar Cadastro do Produto (Admin)
  function handleFinalizarProduto(e) {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(),
      nome: produtoForm.nome,
      preco: produtoForm.preco,
      quantidade: produtoForm.quantidade,
      dataVencimento: produtoForm.dataVencimento
    };

    setProdutos([...produtos, novoProduto]);
    alert('Produto cadastrado com sucesso no Food Promotion!');
    setTelaAtual('admin-produtos');
  }

  function handleLogout() {
    setEstaLogado(false);
    setTelaAtual('login');
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* Topo / Navbar */}
      <header style={{ background: '#059669', padding: '16px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '18px', color: '#fff' }}>🛒 Food Promotion</strong>
        <div style={{ display: 'flex', gap: '10px' }}>
          {!estaLogado ? (
            <>
              <button 
                onClick={() => setTelaAtual('login')} 
                style={{ background: telaAtual === 'login' ? '#047857' : 'transparent', color: '#fff', border: '1px solid #fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Login
              </button>
              <button 
                onClick={() => setTelaAtual('cadastro-cliente')} 
                style={{ background: telaAtual === 'cadastro-cliente' ? '#047857' : 'transparent', color: '#fff', border: '1px solid #fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cadastro de Cliente
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setTelaAtual('admin-produtos')} 
                style={{ background: telaAtual === 'admin-produtos' ? '#047857' : 'transparent', color: '#fff', border: '1px solid #fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Listagem de Produtos
              </button>
              <button 
                onClick={() => setTelaAtual('admin-cadastro-produto')} 
                style={{ background: telaAtual === 'admin-cadastro-produto' ? '#047857' : 'transparent', color: '#fff', border: '1px solid #fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer' }}
              >
                + Cadastrar Produto
              </button>
              <button 
                onClick={handleLogout} 
                style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sair
              </button>
            </>
          )}
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ maxWidth: '850px', margin: '40px auto', padding: '30px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        {/* 1. TELA DE LOGIN */}
        {telaAtual === 'login' && !estaLogado && (
          <div style={{ maxWidth: '380px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '8px', color: '#0f172a' }}>Food Promotion — Login</h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Acesso ao sistema com dados pré-preenchidos.</p>
            
            {erroLogin && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>
                {erroLogin}
              </div>
            )}

            <form onSubmit={handleLogin} style={{ display: 'grid', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>E-mail</label>
                <input 
                  type="text" 
                  value={loginEmail} 
                  onChange={(e) => setLoginEmail(e.target.value)} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Senha</label>
                <input 
                  type="password" 
                  value={loginSenha} 
                  onChange={(e) => setLoginSenha(e.target.value)} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <button 
                type="submit" 
                style={{ background: '#059669', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
              >
                Entrar no Food Promotion
              </button>
            </form>
          </div>
        )}

        {/* 2. TELA DE CADASTRO DE CLIENTE */}
        {telaAtual === 'cadastro-cliente' && !estaLogado && (
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '8px', color: '#0f172a' }}>Food Promotion — Cadastro de Cliente</h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Insira os dados do cliente.</p>

            <form onSubmit={handleCadastroCliente} style={{ display: 'grid', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Nome Completo</label>
                <input 
                  type="text" 
                  value={clienteForm.nomeCompleto} 
                  onChange={(e) => setClienteForm({ ...clienteForm, nomeCompleto: e.target.value })} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>E-mail</label>
                <input 
                  type="text" 
                  value={clienteForm.email} 
                  onChange={(e) => setClienteForm({ ...clienteForm, email: e.target.value })} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Telefone</label>
                <input 
                  type="text" 
                  value={clienteForm.telefone} 
                  onChange={(e) => setClienteForm({ ...clienteForm, telefone: e.target.value })} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Endereço</label>
                <input 
                  type="text" 
                  value={clienteForm.endereco} 
                  onChange={(e) => setClienteForm({ ...clienteForm, endereco: e.target.value })} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Senha</label>
                <input 
                  type="password" 
                  value={clienteForm.senha} 
                  onChange={(e) => setClienteForm({ ...clienteForm, senha: e.target.value })} 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                  required
                />
              </div>
              <button 
                type="submit" 
                style={{ background: '#059669', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
              >
                Finalizar Cadastro
              </button>
            </form>
          </div>
        )}

        {/* 3. AMBIENTE ADMIN */}
        {estaLogado && (
          <div>
            {/* Cadastro de Produtos */}
            {telaAtual === 'admin-cadastro-produto' && (
              <div>
                <h2 style={{ marginBottom: '8px', color: '#0f172a' }}>Food Promotion — Cadastro de Produtos</h2>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                  Edite os dados mockados e clique no botão para salvar e redirecionar para a lista[cite: 1, 2].
                </p>

                <form onSubmit={handleFinalizarProduto} style={{ display: 'grid', gap: '14px', maxWidth: '450px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Nome do Produto</label>
                    <input 
                      type="text" 
                      value={produtoForm.nome} 
                      onChange={(e) => setProdutoForm({ ...produtoForm, nome: e.target.value })} 
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                      required 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Preço (R$)</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        value={produtoForm.preco} 
                        onChange={(e) => setProdutoForm({ ...produtoForm, preco: e.target.value })} 
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                        required 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Quantidade</label>
                      <input 
                        type="number" 
                        value={produtoForm.quantidade} 
                        onChange={(e) => setProdutoForm({ ...produtoForm, quantidade: e.target.value })} 
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Data de Vencimento</label>
                    <input 
                      type="date" 
                      value={produtoForm.dataVencimento} 
                      onChange={(e) => setProdutoForm({ ...produtoForm, dataVencimento: e.target.value })} 
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    style={{ background: '#059669', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
                  >
                    Finalizar Cadastro do Produto
                  </button>
                </form>
              </div>
            )}

            {/* Listagem de Produtos */}
            {telaAtual === 'admin-produtos' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h2 style={{ color: '#0f172a' }}>Food Promotion — Listagem de Produtos</h2>
                  <button 
                    onClick={() => setTelaAtual('admin-cadastro-produto')} 
                    style={{ background: '#059669', color: '#fff', padding: '8px 14px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    + Novo Produto
                  </button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                      <th style={{ padding: '12px', borderBottom: '2px solid #cbd5e1' }}>Produto</th>
                      <th style={{ padding: '12px', borderBottom: '2px solid #cbd5e1' }}>Preço</th>
                      <th style={{ padding: '12px', borderBottom: '2px solid #cbd5e1' }}>Quantidade</th>
                      <th style={{ padding: '12px', borderBottom: '2px solid #cbd5e1' }}>Vencimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '12px', fontWeight: '500' }}>{item.nome}</td>
                        <td style={{ padding: '12px' }}>R$ {parseFloat(item.preco).toFixed(2)}</td>
                        <td style={{ padding: '12px' }}>{item.quantidade} un</td>
                        <td style={{ padding: '12px', color: '#b91c1c', fontWeight: 'bold' }}>{item.dataVencimento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}