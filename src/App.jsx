import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './components/HomePage.jsx';
import Root from './components/Root.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: '',
            Component: Root,
            children: [
                { index: true, Component: HomePage },
                { path: 'projects', Component: Projects },
                { path: 'about', Component: About },
                { path: 'contact', Component: Contact },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
