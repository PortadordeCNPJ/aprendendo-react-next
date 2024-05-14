import { getUsersById } from "../services/get-users-by-id";

const UserDetailsPage = async ({
    params,
}: {
    params: { userId: string };
}) => {
    const user = await getUsersById(params.userId);

    return (
        <>
            <h2>Usuário: {user.first_name} {user.last_name}</h2>
            <span>{user.email}</span>
        </>
    );
}

export default UserDetailsPage