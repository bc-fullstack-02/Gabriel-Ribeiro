import * as SecureStore from "expo-secure-store"

export async function getAuthHeader(){
    
        const token = await SecureStore.getItemAsync("token");
        const authHeader = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }
        return authHeader;
    
}