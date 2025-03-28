(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const f=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
 `,i="user",r={getUser:()=>{try{const t=localStorage.getItem(i);return t?JSON.parse(t):null}catch(t){return console.error("Error parsing user data:",t),null}},setUser:t=>{try{localStorage.setItem(i,JSON.stringify(t))}catch(e){console.error("Error saving user data:",e)}},removeUser:()=>{try{localStorage.removeItem(i)}catch(t){console.error("Error removing user data:",t)}},isAuthenticated:()=>{try{return!!localStorage.getItem(i)}catch(t){return console.error("Error checking authentication status:",t),!1}}},p=(t="/")=>{const e=r.isAuthenticated();return`
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${t==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
      <li><a href="/profile" class="${t==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
      ${e?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" class="${t==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
    </ul>
  </nav>
`},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,b=(t,e="/")=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}
      ${p(e)}
        ${t}
      ${g()}      
    </div>
  </div>
`,v=()=>b(`
    <main role="main" class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>
    
      <div class="space-y-4">
    
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
          </div>
          <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
    
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
          </div>
          <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
    
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
          </div>
          <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
    
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
          </div>
          <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
    
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
          </div>
          <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
      </div>
    </main>
    `,"/"),x=()=>{const t=r.getUser(),{username:e="",email:s="",bio:a=""}=t,o=`
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
                  value="${e}"
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
                  value="${s}"
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
                >${a}</textarea>
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
  `;return b(o,"/profile")},h=()=>`
  <main role="main" class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="사용자 이름" 
            class="w-full p-2 border rounded"
          >
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="비밀번호" 
            class="w-full p-2 border rounded"
          >
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,y=()=>`
  <main role="main" class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,m={"/":v,"/profile":x,"/login":h,"/404":y},c={login:t=>{t.preventDefault();const e=document.getElementById("username").value;e.trim()&&(r.setUser({username:e,email:"",bio:""}),n("/"))},profile:t=>{t.preventDefault();const s={...r.getUser(),email:document.getElementById("email").value,bio:document.getElementById("bio").value};r.setUser(s),alert("프로필이 업데이트되었습니다.")},logout:t=>{t&&t.preventDefault(),r.removeUser(),n("/login")}},w=()=>{const t=document.getElementById("login-form");t&&t.addEventListener("submit",c.login);const e=document.getElementById("profile-form");e&&e.addEventListener("submit",c.profile);const s=document.getElementById("logout");s&&s.addEventListener("click",c.logout)},n=t=>{window.history.pushState({},"",t),u()},E=()=>{let t=window.location.pathname;return(t===""||t==="/")&&(t="/"),t},u=()=>{const t=E();if(r.isAuthenticated()){if(t==="/login"){n("/");return}}else if(t==="/profile"){n("/login");return}const e=m[t]||m["/404"],s=document.getElementById("root");s.innerHTML=typeof e=="function"?e():e,w()};document.addEventListener("click",t=>{const e=t.target.closest("a");if(e&&!t.defaultPrevented){const s=e.getAttribute("href");s&&s!=="#"&&(t.preventDefault(),n(s))}});window.addEventListener("popstate",u);window.addEventListener("DOMContentLoaded",()=>{u()});
