import { login } from "../auth.js";

export function showLoginModal(onSuccess) {

    const password = prompt("Administrator Password");

    if (password === null) return;

    if (login(password)) {
        onSuccess();
    } else {
        alert("Incorrect password.");
    }

}