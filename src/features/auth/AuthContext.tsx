import { createContext, useContext, useState, type ReactNode } from 'react';

import { login as apiLogin, register as apiRegister } from '@/data/api';

export type AuthContextValue = {
    email: string | null;
    userId: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);

    async function login(email: string, password: string) {
        const { user } = await apiLogin({ email, password });
        setUserId(user.id);
        setEmail(user.email);
        setIsAuthenticated(true);
    }

    async function register(email: string, password: string) {
        const { user } = await apiRegister({ email, password });
        setUserId(user.id);
        setEmail(user.email);
        setIsAuthenticated(true);
    }

    function logout() {
        setIsAuthenticated(false);
        setEmail(null);
        setUserId(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, register, logout, userId, email }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return ctx;
}
