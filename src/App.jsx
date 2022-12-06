import { AuthProvider } from './contexts/AuthContext';
import { RoutesMain as Routes } from './routes';
import { Global } from './styles/global';

export const App = () => {
  return (
    <>
      <Global />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}