import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/items/16"
})

export const getItemsData =  async () => {
    try{
        const data = await instance.get("");
        console.log("[SUCCESS] GET data");
        return data.data;
    }catch (e) {
        console.log("[FAIL] GET data");
        return null;
    }
}