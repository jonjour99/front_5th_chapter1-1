import { routes } from "../routes.js";
import { auth } from "../utils/auth.js";
import { bindEvents } from "../utils/eventBinding.js";
import { handleLogout } from "../handler/formHandlers.js";

// 기본 경로 설정 (window.BASE_PATH를 사용하여 HTML에서 정의한 값을 가져옴)
const BASE_PATH = window.BASE_PATH || "/front_5th_chapter1-1";

// 내비게이션 함수
const navigate = (path) => {
  window.history.pushState({}, "", BASE_PATH + path);
  router();
};

const getCurrentPath = () => {
  // 현재 경로 가져오기 (BASE_PATH 고려)
  let path = window.location.pathname;

  // BASE_PATH 제거
  if (path.startsWith(BASE_PATH)) {
    path = path.substring(BASE_PATH.length);
  }

  // 경로가 비어있으면 루트로 설정
  if (path === "" || path === "/") {
    path = "/";
  }

  return path;
};

export const router = () => {
  const currentPath = getCurrentPath();

  // Auth state checks (로그인 상태 체크)
  if (auth.isAuthenticated()) {
    // 로그인된 사용자가 /login 페이지 접근 시도할 경우
    if (currentPath === "/login") {
      navigate("/");
      return;
    }
  } else {
    // 로그인되지 않은 사용자가 보호된 라우트 접근 시도할 경우
    if (currentPath === "/profile") {
      navigate("/login");
      return;
    }
  }

  // routes에 없는 경로는 404 페이지로 처리
  const PageComponent = routes[currentPath] || routes["/404"];
  const rootElement = document.getElementById("root");
  rootElement.innerHTML =
    typeof PageComponent === "function" ? PageComponent() : PageComponent;

  // Bind events after rendering
  bindEvents();
};

export { navigate, getCurrentPath, handleLogout, routes };
