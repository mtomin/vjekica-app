import axios from "axios";
const httpClient = axios.create({
  baseURL: "http://restapi.adequateshop.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "",
  },
});

export async function logIn(email, password) {
  const result = await httpClient.post("/authaccount/login", {
    email: email,
    password: password,
  });

  const userInfo = result.data?.data;

  if (userInfo?.Token) {
    localStorage.setItem("token", userInfo.Token);
    localStorage.setItem("userName", userInfo.Name);
    let authInterceptor = httpClient.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });

    sessionStorage.setItem("authInterceptor", authInterceptor);
  }

  return userInfo;
}

export function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  let authInterceptor = sessionStorage.getItem("authInterceptor");
  if (authInterceptor !== null) {
    httpClient.interceptors.request.eject(authInterceptor);
  }
}

export function CheckIfLoggedIn() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("userName");
  if (token && name) {
    return name;
  }
  return null;
}

export async function getUsers(page) {
  if (!page) {
    page = 1;
  }
  const result = await httpClient.get(`users?page=${page}`);
  return result?.data?.data;
}

export function IsLoggedIn() {
  return localStorage.getItem("token") && localStorage.getItem("userName");
}
