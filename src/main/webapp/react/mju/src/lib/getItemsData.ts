import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/items/all"
})

const api = axios.create({
    baseURL: "http://localhost:8080/items/"
})

export const getItemsData =  async () => {
    try{
        const data = await instance.get("");
        console.log("[SUCCESS] GET data");
        return data.data.list;
    }catch (e) {
        console.log("[FAIL] GET data");
        return null;
    }
}

export const itemsApi = {
    allItem: () => api.get("all"),
    itemDetail: (id:number) =>
        api.get(`${id}`),
}