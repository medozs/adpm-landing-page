import { useQuery } from "react-query"
import { axios, serviceURL } from "../../../utils"

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

export const useStatistic = (options) => {
    return useQuery(["statistic"], () => {
        return axios.get(serviceURL("api", "statistic"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useProductSection = (options, id) => {
    return useQuery(["section"], () => {
        return axios.get(serviceURL("api", "product/" + id + "/sections"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useSocmed = (options) => {
    return useQuery(["social-media"], () => {
        return axios.get(serviceURL("api", "socialmedia"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useProject = (options) => {
    return useQuery(["project-all"], () => {
        return axios.get(serviceURL("api", "projects"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useProjectByProduct = (options, id) => {
    return useQuery(["projectById"], () => {
        return axios.get(serviceURL("api", "product/" + id + "/projects"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useProduct = (options) => {
    return useQuery(["product"], () => {
        return axios.get(serviceURL("api", "products"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const usePartner = (options) => {
    return useQuery(["partnership"], () => {
        return axios.get(serviceURL("api", "partnership"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useProductGallery = (options, id) => {
    return useQuery(["gallery"], () => {
        return axios.get(serviceURL("api", "product/" + id + "/gallery"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}

export const useDocument = (options) => {
    return useQuery(["document"], () => {
        return axios.get(serviceURL("api", "document"), {
            auth: {
                username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "123",
                password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "123"
            }
        })
    }, options)
}