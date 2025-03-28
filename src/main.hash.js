import { hashRouter, navigate } from "./router/hashRouter.js";

// 링크 클릭 이벤트 처리
document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href !== "#") {
      navigate(href);
    }
  }
});

// 브라우저 해시 변경 처리
window.addEventListener("hashchange", hashRouter);

// 초기 라우팅 처리
window.addEventListener("DOMContentLoaded", () => {
  // 초기 해시가 없으면 기본 경로로 설정
  if (!window.location.hash) {
    navigate("/");
  } else {
    hashRouter();
  }
});
