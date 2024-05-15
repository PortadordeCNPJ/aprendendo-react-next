export async function getUsers() 
{
    const response = await fetch('https://reqres.in/api/users');
    const user = await response.json();

    return user?.data || [];
}