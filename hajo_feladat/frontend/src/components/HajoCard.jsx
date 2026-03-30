const HajoCard = ({ hajo }) => {
  return (
    <div className="bg-white border-l-8 border-blue-600 rounded-r-xl shadow-md p-5 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-blue-900">{hajo.nev}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${hajo.tipus === 'V' ? 'bg-blue-100 text-blue-800' : 'bg-blue-200 text-blue-900'}`}>
          {hajo.tipus === 'V' ? 'VITORLÁS' : 'MOTOROS'}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-blue-700">
          <span className="font-semibold w-32">Kategória:</span>
          <span>{hajo.tipus === 'V' ? 'Sport / Szabadidő' : 'Közszolgálati / Utas'}</span>
        </div>
        <div className="flex items-center text-blue-700">
          <span className="font-semibold w-32">Személyzet:</span>
          <span className={hajo.szemelyzetSzama === 0 ? "italic text-blue-500" : "font-bold"}>
            {hajo.szemelyzetSzama === 0 ? 'Nincs (önvezető)' : `${hajo.szemelyzetSzama} fő`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HajoCard;