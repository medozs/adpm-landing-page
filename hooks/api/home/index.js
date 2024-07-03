import { useMutation, useQuery } from "react-query"
import { axios, serviceURL } from "../../../utils"
import { pageSize } from "../../../utils/constant"

export const useHero = (options) => {
    return useQuery(["hero"], () => {
        return axios.get(serviceURL("api", "hero"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}