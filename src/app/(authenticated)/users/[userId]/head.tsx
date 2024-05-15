import { getUserById } from "../services/get-users-by-id";

const HeadUserId = async ({
    params,
}: {
    params: { userId: string };
}) => {
    const user = await getUserById(params.userId);

    return (
        <>
            <title>{user.firt_name} - Usuários - Sistema Olá Mundo</title>
        </>
    );
}

export default HeadUserId