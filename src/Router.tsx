import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/Login/LoginPage';
import { HomePage } from './Pages/Home/HomePage';

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
    );
};
