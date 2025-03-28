import { formHandlers } from "../handler/formHandlers.js";

export const bindEvents = () => {
  const handlers = {
    "login-form": formHandlers.login,
    "profile-form": formHandlers.profile,
    logout: formHandlers.logout,
  };

  Object.entries(handlers).forEach(([id, handler]) => {
    const element = document.getElementById(id);
    if (!element) return;

    // 기존 이벤트 리스너 제거 (중복 방지)
    const eventType = element instanceof HTMLFormElement ? "submit" : "click";
    const oldHandler = element[`${eventType}Handler`];
    if (oldHandler) {
      element.removeEventListener(eventType, oldHandler);
    }

    // 새 이벤트 리스너 등록 및 참조 저장
    element.addEventListener(eventType, handler);
    element[`${eventType}Handler`] = handler;
  });
};
