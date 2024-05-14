'use client';

import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    return (
        <main className="min-h-screen p-12">
            <form onSubmit={(e) => {
                router.push('/');
                e.preventDefault();
                }}>
                <div>
                    <label htmlFor="">Email:
                    </label>
                    <input />
                </div>
                <label htmlFor="">Senha:
                </label>
                <input type="password" />
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form >
        </main >
    )
}

export default LoginPage;