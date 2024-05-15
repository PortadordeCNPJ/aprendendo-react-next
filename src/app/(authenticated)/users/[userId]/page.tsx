import { getUserById } from "../services/get-users-by-id";

const UserDetailsPage = async ({
    params,
}: {
    params: { userId: string };
}) => {
    console.log('teste');
    console.log(params);
    const user = await getUserById(params.userId);
    console.log(user);

    return (
        <>
            <h2>Usuário: {user.first_name} {user.last_name}</h2>
            <span>{user.email}</span>
        </>
    );
}

export default UserDetailsPage