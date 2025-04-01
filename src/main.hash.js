import { HomePage, LoginPage, ProfilePage } from "./pages";
import { globalStore } from "./stores";
import { ForbiddenError, UnauthorizedError } from "./errors";
import { router } from "./router";
import { render } from "./render";
import { createHashRouter } from "./lib/createHashRouter.js";

router.set(
  createHashRouter({
    "/": HomePage,
    "/login": () => {
      const { loggedIn } = globalStore.getState();
      if (loggedIn) {
        throw new ForbiddenError();
      }
      return LoginPage();
    },
    "/profile": () => {
      const { loggedIn } = globalStore.getState();
      if (!loggedIn) {
        throw new UnauthorizedError();
      }
      return ProfilePage();
    },
  }),
);

function main() {
  router.get().subscribe(render);
  globalStore.subscribe(render);

  render();
}

main();
