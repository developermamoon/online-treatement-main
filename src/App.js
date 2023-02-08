import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F1F1F1" }}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
