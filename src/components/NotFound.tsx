import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6">
            <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-md">
                <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-md">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-slate-800">Page Not Found</h2>
                <p className="mt-2 text-slate-600">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

            <footer className="mt-10 text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} YourApp. All rights reserved.
            </footer>
        </div>
    );
}


export default NotFound