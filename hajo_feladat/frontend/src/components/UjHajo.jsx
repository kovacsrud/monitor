import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UjHajo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '', nev: '', tipus: 'M', szemelyzetSzama: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/hajok', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, id: Number(formData.id) })
        });
        navigate('/hajok');
    };

    return (
        <div className="max-w-md mx-auto bg-blue-100 p-8 rounded-xl">
            <h1 className="text-2xl font-bold text-blue-900 mb-4">Hajó regisztrációja</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="number" placeholder="ID" className="p-2 rounded" onChange={e => setFormData({...formData, id: e.target.value})} required />
                <input type="text" placeholder="Hajó neve" className="p-2 rounded" onChange={e => setFormData({...formData, nev: e.target.value})} required />
                <select className="p-2 rounded" onChange={e => setFormData({...formData, tipus: e.target.value})}>
                    <option value="M">Motoros</option>
                    <option value="V">Vitorlás</option>
                </select>
                <input type="number" placeholder="Személyzet száma" className="p-2 rounded" onChange={e => setFormData({...formData, szemelyzetSzama: e.target.value})} />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">Mentés</button>
            </form>
        </div>
    );
};

export default UjHajo;