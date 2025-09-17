import { useState } from 'react';
import api from '../services/Api';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/auth/register', form);
    localStorage.setItem('token', res.data.token);
    alert('Registered!');
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="Name"
          value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="form-control my-2" placeholder="Email"
          value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <input className="form-control my-2" placeholder="Password" type="password"
          value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}
export default Register;
