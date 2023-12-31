// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS
import './index.css';

// Components
// import Error404 from './routes/Error404.jsx';
import Home from './routes/Home.jsx';
import Gallery from './routes/Gallery.jsx';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/zdg-react/',
		element: <App />,
		children: [
			{
				path: '/zdg-react/',
				element: <Home />,
			},
		],
	},
	{
		path: '/zdg-react/fotos',
		element: <Gallery />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
