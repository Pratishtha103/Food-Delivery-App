import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../services/Api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Logged in!');
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="Email" 
          value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <input className="form-control my-2" placeholder="Password" type="password"
          value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
export default Login;
