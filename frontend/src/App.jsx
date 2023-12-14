import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventsPage } from './pages/EventsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< EventsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
