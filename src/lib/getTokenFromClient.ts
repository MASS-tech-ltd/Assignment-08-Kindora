import { authClient } from "@/lib/auth-client";

const getTokenFromClient = async () => {
    const { data, error } = await authClient.token();
    if (error || !data?.token) {
        throw new Error(error?.message || "JWT token not found!");
    }
    const token = data.token;
    return token;
};

export default getTokenFromClient;