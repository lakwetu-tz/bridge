// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { auth } from '../utils/firebase';
// import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, onAuthStateChanged } from 'firebase/auth';

// type AuthContextType = {
//     currentUser: User | null;
//     signup: (email: string, password: string) => Promise<void>;
//     signin: (email: string, password: string) => Promise<void>;
//     signout: () => Promise<void>;
//     resetPassword: (email: string) => Promise<void>;
//     // updateEmail: (email: string) => Promise<void>;
//     // updatePassword: (password: string) => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }

// type AuthProviderProps = {
//     children: ReactNode;
// };

// export function AuthProvider({ children }: AuthProviderProps) {
//     const [currentUser, setCurrentUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);

//     const signup = (email: string, password: string) => {
//         return createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
//             setCurrentUser(userCredential.user);
//         });
//     };

//     const signin = (email: string, password: string) => {
//         return signInWithEmailAndPassword(auth, email, password).then(userCredential => {
//             setCurrentUser(userCredential.user);
//         });
//     };

//     const signout = () => {
//         return signOut(auth).then(() => {
//             setCurrentUser(null);
//         });
//     };

//     const resetPassword = (email: string) => {
//         return sendPasswordResetEmail(auth, email);
//     };

//     // const updateEmail = (email: string) => {
//     //     if (currentUser) {
//     //         return updateEmail(currentUser, email);
//     //     } else {
//     //         return Promise.reject('No user is currently signed in');
//     //     }
//     // };

//     // const updatePassword = (password: string) => {
//     //     if (currentUser) {
//     //         return updatePassword(currentUser, password);
//     //     } else {
//     //         return Promise.reject('No user is currently signed in');
//     //     }
//     // };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             setCurrentUser(user);
//             setLoading(false);
//         });

//         return unsubscribe;
//     }, []);

//     const value: AuthContextType = {
//         currentUser,
//         signup,
//         signin,
//         signout,
//         resetPassword,
//         // updateEmail,
//         // updatePassword,
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;



import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
    currentUser: { email: string } | null;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    signin: async () => { },
    signout: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null);
    const [ isLogin, setIsLogin ] = useState<boolean>(false)

    useEffect(() => {
        // Check localStorage for existing user session
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const signin = async (email: string, password: string) => {
        // Implement your actual sign-in logic here
        // This example uses localStorage for demo purposes
        localStorage.setItem('currentUser', JSON.stringify({ email }));
        setCurrentUser({ email });
    };

    const signout = async () => {
        // Implement your actual sign-out logic here
        // This example uses localStorage for demo purposes
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };

    const value: AuthContextType = {
        currentUser,
        signin,
        signout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
