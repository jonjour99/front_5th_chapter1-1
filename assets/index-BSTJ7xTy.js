(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();const g=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
 `,i="user",n={getUser:()=>{try{return JSON.parse(localStorage.getItem(i)||"{}")}catch(t){return console.error("Error parsing user data:",t),{}}},setUser:t=>{localStorage.setItem(i,JSON.stringify(t))},removeUser:()=>{localStorage.removeItem(i)},isAuthenticated:()=>!!localStorage.getItem(i)},v=(t="/")=>{const e=n.isAuthenticated();return`
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${t==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
      <li><a href="/profile" class="${t==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
      ${e?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" class="${t==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
    </ul>
  </nav>
`},x=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,f=(t,e="/")=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
      ${v(e)}
        ${t}
      ${x()}      
    </div>
  </div>
`,h=()=>f(`
    <main class="p-4">
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
    `,"/"),y=()=>{const t=JSON.parse(localStorage.getItem("user")||"{}"),{username:e="",email:l="",bio:r=""}=t,s=`
        <main class="p-4">
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
                  value="${l}"
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
                >${r}</textarea>
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
  `;return f(s,"/profile")},m=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="사용자 이름을 입력하세요" 
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
`,w=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
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
 `,E=()=>n.isAuthenticated(),L=["/profile"],p={"/":h,"/profile":()=>!E()&&L.includes("/profile")?(window.history.replaceState({},"","/login"),m()):y(),"/login":m,"/404":w},u={login:t=>{t.preventDefault();const e=document.getElementById("username").value;n.setUser({username:e,email:"",bio:""}),a("/")},profile:t=>{t.preventDefault();const l={...n.getUser(),username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};n.setUser(l),d()},logout:t=>{t.preventDefault(),n.removeUser(),a("/login")}},S=()=>{const t={"login-form":u.login,"profile-form":u.profile,logout:u.logout};Object.entries(t).forEach(([e,l])=>{const r=document.getElementById(e);if(!r)return;const s=r instanceof HTMLFormElement?"submit":"click";r.addEventListener(s,l)})},b=window.BASE_PATH||"/front_5th_chapter1-1",a=t=>{window.history.pushState({},"",b+t),d()},I=()=>{let t=window.location.pathname;return t.startsWith(b)&&(t=t.substring(b.length)),(t===""||t==="/")&&(t="/"),t},d=()=>{const t=I();if(n.isAuthenticated()){if(t==="/login"){a("/");return}}else if(t==="/profile"){a("/login");return}const e=p[t]||p["/404"],l=document.getElementById("root");l.innerHTML=typeof e=="function"?e():e,S()};document.addEventListener("click",t=>{if(t.target.matches("a")){t.preventDefault();const e=t.target.getAttribute("href");e!=="#"&&a(e)}});window.addEventListener("popstate",d);window.addEventListener("DOMContentLoaded",()=>{d()});
