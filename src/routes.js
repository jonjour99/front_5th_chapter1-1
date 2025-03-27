import { HomePage } from "./pages/HomePage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";
import { auth } from "./utils/auth.js";

// 로그인 상태를 체크하는 함수
const isLoggedIn = () => {
  return auth.isAuthenticated();
};

// 인증이 필요한 경로 목록
const protectedRoutes = ["/profile"];

export const routes = {
  "/": HomePage,
  "/profile": () => {
    // 로그인 상태가 아니면 로그인 페이지로 리다이렉션
    if (!isLoggedIn() && protectedRoutes.includes("/profile")) {
      // URL 변경
      window.history.replaceState({}, "", "/login");
      return LoginPage();
    }
    return ProfilePage();
  },
  "/login": LoginPage,
  "/404": NotFoundPage,
};
