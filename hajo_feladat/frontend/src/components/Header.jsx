const Header = ({ cim }) => {
  return (
    <header className="bg-blue-900 py-6 mb-8 shadow-lg">
      <h1 className="text-4xl font-extrabold text-blue-100 text-center uppercase tracking-widest">
        {cim}
      </h1>
    </header>
  );
};

export default Header;