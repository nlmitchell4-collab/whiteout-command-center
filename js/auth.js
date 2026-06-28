const PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export function isAdmin() {
    return sessionStorage.getItem("admin") === "true";
}

export function login(password) {

    if (password === PASSWORD) {

        sessionStorage.setItem("admin", "true");
        return true;

    }

    return false;

}

export function logout() {
    sessionStorage.removeItem("admin");
}