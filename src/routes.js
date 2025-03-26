import { HomePage } from "./pages/HomePage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";

// 로그인 상태를 체크하는 함수
const isLoggedIn = () => {
  // 실제로는 로컬 스토리지나 세션 스토리지에서 로그인 토큰을 확인하는 로직이 들어갈 수 있습니다.
  // 테스트 환경에서는 항상 false를 반환하도록 구현합니다.
  return false;
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
