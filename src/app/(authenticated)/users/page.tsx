import Link from 'next/link';
import { getUsers } from './services/get-users';
import { link } from 'fs';

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <>
            <h2>Usuários</h2>

            <ul>
                {users.map((user: any) =>
                (<li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.first_name} {user.last_name} ({user.email})
                    </Link>
                </li>))}

            </ul>
        </>

    );
}

export default UsersPage