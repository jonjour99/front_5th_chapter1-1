import { Layout } from "../Layout.js";
import { auth } from "../utils/auth.js"; // auth 모듈 추가

export const ProfilePage = () => {
  const user = auth.getUser(); // localStorage 직접 접근 대신 auth.getUser() 사용
  const { username = "", email = "", bio = "" } = user;

  const content = `
        <main role="main" class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${bio}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
  `;
  return Layout(content, "/profile");
};
