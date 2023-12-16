import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EventsPage } from './pages/EventsPage';
import { EventsFormPage } from './pages/EventsFormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/events'/>}></Route>
        <Route path='/events' element={< EventsPage />}></Route>
        <Route path='/events/edit/:id' element={< EventsFormPage />}></Route>
        <Route path='/events/create' element={< EventsFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
