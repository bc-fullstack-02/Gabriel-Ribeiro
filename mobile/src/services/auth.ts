import * as SecureStore from "expo-secure-store"

async function getAuthHeader(){
    try {
        const token = await SecureStore.getItemAsync("token");

    } catch (error) {
        
    }
}