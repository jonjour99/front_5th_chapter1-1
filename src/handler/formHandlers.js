import { auth } from "../utils/auth.js";
import { navigate, router } from "../router/router.js";

export const formHandlers = {
  login: (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // 비밀번호 검증 후 로그인 처리
    if (username && password) {
      auth.setUser({ username, email: "", bio: "" });
      navigate("/");
    }
  },

  profile: (event) => {
    event.preventDefault();
    const currentUser = auth.getUser();
    const updatedUser = {
      ...currentUser,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
    };
    auth.setUser(updatedUser);
    alert("프로필이 업데이트되었습니다.");
    router();
  },

  logout: (event) => {
    event.preventDefault();
    auth.removeUser();
    navigate("/login");
  },
};

export const handleLogout = formHandlers.logout;
