import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080"

const Fetcher = async (url: string) => {
    try {
        const { data } = await axios.get(url)
        return data
    }
    catch (err: any) {
        throw new Error(err)
    }
}

export default Fetcher