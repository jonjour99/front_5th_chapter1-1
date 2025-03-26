import { routes } from "./routes.js";

// 현재 URL의 경로를 가져오는 함수
const getPathName = () => {
  return window.location.pathname;
};

// 라우팅 처리 함수
const handleRouting = () => {
  const path = getPathName();
  const route = routes[path] || routes["/404"]; // 경로가 없으면 404 페이지로 이동

  document.getElementById("root").innerHTML = route();
};

// 페이지 로드 시 라우팅 처리
document.addEventListener("DOMContentLoaded", () => {
  // 초기 라우팅 처리
  handleRouting();

  // 링크 클릭 이벤트를 가로채서 SPA처럼 동작하게 함
  document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.href) {
      const url = new URL(e.target.href);

      // 같은 도메인 내 링크인 경우
      if (url.origin === window.location.origin) {
        e.preventDefault();

        // 히스토리 API를 사용하여 URL 변경
        window.history.pushState({}, "", url.pathname);

        // 라우팅 처리
        handleRouting();
      }
    }
  });

  // 뒤로가기/앞으로가기 이벤트 처리
  window.addEventListener("popstate", () => {
    handleRouting();
  });
});

// 테스트 환경에서 사용할 수 있도록 전역으로 노출
window.handleRouting = handleRouting;
