import './App.css';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectMonitoring from './pages/ProjectMonitoring';
import EditorHome from './pages/EditorHome';
import EditorEdit from './pages/EditorEdit';
import React from 'react'
import { Toaster } from 'react-hot-toast'
import './assets/main.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', element: <HomePage />
  },
  {
    path: '/projects', element: <ProjectsPage />
  },
  { path: '/projects/:projectId/:projectName', element: <ProjectMonitoring /> },
  { path: '/EditorHome', element: <EditorHome /> },
  { path: 'EditorEdit/:roomId', element: <EditorEdit /> }
]);

function App() {
  return (<React.Fragment>
    <div>
      <Toaster position='top-right' ></Toaster>
    </div>

    <RouterProvider router={router} />
  </React.Fragment>
  );
}

export default App;
