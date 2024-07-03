import cookie from "js-cookie"
import { GetServerSideProps } from "next"
import jwtDecode, { JwtPayload } from "jwt-decode"
import { format } from "date-fns"
import axiosFetch from "axios"
import { useSession, getSession } from "next-auth/react"

export const eq = (a, b) => a === b

export  const IS_PRODUCTION = eq(process.env.NODE_ENV, "production")

export const IS_DEVELOPMENT = !IS_PRODUCTION

export const API_HOST = process.env.NEXT_PUBLIC_API_HOST
export const baseURL = `https://${API_HOST}`

// const stage = IS_DEVELOPMENT ? process.env.NEXT_PUBLIC_STAGING_DEV : process.env.NEXT_PUBLIC_STAGING_PROD

axiosFetch.defaults.baseURL = baseURL
// axiosFetch.defaults.headers.common["Authorization"] = "Bearer " + getToken()
// axiosFetch.defaults.auth = {
//  username: process.env.NEXT_PUBLIC_BASIC_AUTH || "123",
//  password: process.env.NEXT_PUBLIC_BASIC_AUTH || "123"
// }

axiosFetch.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (
    config.url === "/auth/login" ||
    config.headers["x-request-id"] === "basic") {
    config.auth = {
      username: process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME || "china",
      password: process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD || "ZmRha2poZmFza3VkaGZzOktBSHNqZGtsc2FqZmRxaW9mbnNha2xkbjEyMjMxMg"
    }
    config.headers = {
      ...config.headers,
      'cache-control': 'ignore-cache',
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
      'Content-Type': 'application/json',
    }
    return config
  }

  if (config.headers["x-request-id"] === "update-password") {
    return config
  }

  config.headers = {
    ...config.headers,
    Authorization: "Bearer " + getToken(),
      'cache-control': 'ignore-cache',
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
      'Content-Type': 'application/json',
  }
  return config


}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axiosFetch.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname !== "/login"
      ) {
        window.location.href = "/login",
        clearCookie("accessToken_admin")
      }
    }
  }
  return Promise.reject(error)
})

export const axios = axiosFetch

export const getBasePath = (service) => {
  return `/${service}/`
}

export const serviceURL = (service, path) => {
  return getBasePath(service) + path
}

export const setToken = (value) => cookie.set("accessToken_admin", value)
export const setCookie = (key, value) => cookie.set(key, value)
export const removeCookie = (key) => cookie.remove(key)
export const getToken = () => cookie.get("accessToken_admin")
export const getCookie = (val) => cookie.get(val)

export const removeToken = () => {
  cookie.remove("accessToken_admin")
  cookie.remove("user_id")
}

export const clearCookie = (key) => cookie.remove(key)
export const formHelperText = "tidak boleh kosong"

export const isConsultant = parseInt(getCookie("is_consultant")) === 1

export const isJwtExpired = (token) => {
  let isJwtExpired = false
  if (token) {
    try {
      const { exp } = jwtDecode<JwtPayload>(token)
      const currentTime = new Date().getTime() / 1000
      isJwtExpired = currentTime > (exp || 0)
    } catch {
      isJwtExpired = true
    }
  } else {
    isJwtExpired = true
  }

  return isJwtExpired
}

export const jwtDecoder = (token) => {
  if (token) {
    try {
      return jwtDecode<JwtPayload>(token)
    } catch(err) {
      return null
    }
  }
  return null
}

export const isJSONString = (str) => {
  try {
    JSON.parse(str)
  } catch {
    return false
  }

  return true
}

const dateIsValid = (date) => {
  return !Number.isNaN(new Date(date).getTime())
}

export const dateFormat = (val = new Date().toISOString(), str = "dd MMMM yyyy") => {
  return format(new Date(dateIsValid(val) ? val : new Date().toISOString()), str)
}

export const endDateFormat = (val = new Date().toISOString(), str = "dd MMMM yyyy, HH.mm") => {
  return format(new Date(dateIsValid(val) ? val : new Date().toISOString()), str)
}

const fullYear = new Date().getFullYear()

export const periodDate = `startDate=${dateFormat(new Date(fullYear - 2, 0, 0,).toISOString(), "uuuu-MM-dd kk:mm")}&endDate=${dateFormat(new Date(fullYear + 1, 0, 0).toISOString(), "uuuu-MM-dd kk:mm")}`
export const currentYear = new Date().getUTCFullYear() 

export const getServerSideProps = async (context) => {
  const token = context.req.cookies["accessToken_admin"]
  const isAuthenticated = !isJwtExpired(token)

  if (isAuthenticated) {
    return {
      props: {
        isAuthenticated,
      }
    }
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }
}

// export * from "./theme"
// export * from "./constant"
// export * from "./mock"

export const stringToColor = (string) => {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = "#"

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

export const stringAvatar = (name) => {
  return {
    children: `${name.split(" ") ? name.split(" ")[0][0] : name[0]}${name.split(" ") ? name.split(" ")[1] ? name.split(" ")[1][0] : "" : name[0]}`,
  }
}

export const isMinus = (val) => Number(val) < 0 ? "(" + money(Math.abs(val)) +  ")" : money(val)

export const getBlob = async (img) => {
  const dataTransfer = new DataTransfer()
  const imgRes = await fetch(img)
  const blob = await imgRes.blob()
  const file = new File([blob], new Date().toISOString() + ".png", { type: "image/png" })
  dataTransfer.items.add(file)
  return dataTransfer.files
}

export const formatDate = (isoDate) => {
  const indonesianDate = new Date(isoDate);
    
  indonesianDate.setMinutes(indonesianDate.getMinutes() - indonesianDate.getTimezoneOffset());
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timeZone: 'Asia/Jakarta',
  };

  return indonesianDate.toLocaleString('id-ID', options);
}

export const truncateText = (text, maxLength) => {
  const words = text?.split('');
  if (words?.length > maxLength) {
    return words.slice(0, maxLength).join('') + '...';
  }
  return text;
};