import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    nome: '',
    cim: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    data_nascimento: '',
    celular: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (form.senha !== form.confirmarSenha) {
      setError('As senhas não correspondem');
      return;
    }

    try {
      //const response = await fetch('http://localhost:5000/api/auth/register', {
      const response = await fetch('https://server-nv02.onrender.com:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Cadastro realizado com sucesso!');
        console.log('Dados da resposta:', data);
      } else {
        throw new Error(data.errors[0].msg || 'Erro ao cadastrar');
      }
    } catch (err) {
      console.error('Erro ao cadastrar:', err.message);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cim"
        placeholder="CIM"
        value={form.cim}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmarSenha"
        placeholder="Confirme a Senha"
        value={form.confirmarSenha}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="data_nascimento"
        placeholder="Data de Nascimento"
        value={form.data_nascimento}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="celular"
        placeholder="Celular"
        value={form.celular}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;

