import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectMonitoring from './pages/ProjectMonitoring';


const router = createBrowserRouter([
  {
    path: '/', element: <HomePage />
  },
  {
    path: '/projects', element: <ProjectsPage />
  },
  { path: '/projects/:projectId', element: <ProjectMonitoring /> }
]);

function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;
