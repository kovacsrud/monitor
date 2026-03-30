import { useEffect, useState } from 'react';
import HajoCard from './HajoCard';

const Hajok = () => {
    const [adatok, setAdatok] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/hajok')
            .then(res => res.json())
            .then(data => setAdatok(data))
            .catch(err => console.error("Hiba:", err));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">Aktuális flottánk</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {adatok.map(hajo => (
                    <HajoCard key={hajo.id} hajo={hajo} />
                ))}
            </div>
        </div>
    );
};

export default Hajok;