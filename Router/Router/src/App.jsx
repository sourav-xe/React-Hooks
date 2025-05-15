import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
