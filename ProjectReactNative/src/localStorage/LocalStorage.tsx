import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorageKey = {
    KEY_USER_PROFILE: "KEY_USER_PROFILE",
    KEY_GET_STARTED_FLAG: "KEY_GET_STARTED_FLAG",
    KEY_ACCESS_TOKEN: "ACCESS_TOKEN",
    KEY_REFRESH_TOKEN: "REFRESH_TOKEN",
    USER_ID: "USER_ID",
    EMAIL: "EMAIL",
    USER_NAME: "USER_NAME",
}

export const storeLocalData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
    }
}

export const storeLocalObjectData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
    }
}

export const getLocalData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (error) {
    }
}

export const getLocalObjectData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
}

export const removeLocalData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
    }
}