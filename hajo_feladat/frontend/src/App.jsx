
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Welcome from './components/Welcome';
import Hajok from './components/Hajok';
import UjHajo from './components/UjHajo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Header cim="Balatoni Hajózási Rendszer" />
        <Menu />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/hajok" element={<Hajok />} />
            <Route path="/ujhajo" element={<UjHajo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App
