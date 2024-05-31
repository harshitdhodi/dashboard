import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';
import Mainlayout from './layout/Mainlayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
