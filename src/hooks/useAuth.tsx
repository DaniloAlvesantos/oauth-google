import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../context/context';

export function useAuth():AuthContextProps {
    const context = useContext(AuthContext);

    return context;
}