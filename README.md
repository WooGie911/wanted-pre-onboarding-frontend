# 원티드 프리온보딩 프론트엔드 인턴십 선발과제

- 프로젝트 설치 및 실행방법

```
    $ git clone https://github.com/WooGie911/wanted-pre-onboarding-frontend.git
    $ yarn install
    $ yarn start
```

혹은

```
    $ git clone https://github.com/WooGie911/wanted-pre-onboarding-frontend.git
    $ npm install
    $ npm start
```

- 배포링크 : https://wanted-pre-onboarding-frontend-jnkl4dofb-rlawodnr1109.vercel.app/todo

<br><br>

## 사용한 라이브러리

- React
- React Router
- Axios
- Styled Components

<br><br>

## 트러블슈팅

- TodoLists 중 Todo들 각각의 체크박스와 수정하기 토글(?) 기능구현을 위해 Lists라는 component 내에 List라는 component를 작성하여 구현.

- CORS 문제를 해결하기 위해 package.json 파일 내에 proxy 를 작성하여 우회.

- node.js 의 버전 상 문제로 digital envelope routines 에러 발생. => node.js 버전 다운그레이드로 해결.

- 파일 구조 설정시에 파일내에서 소문자를 대문자로 바꾼 것이 vercel 배포 과정에서 인식하지 못하여 배포에 문제가 발생. => git config core.ignorecase false 설정을 통해 해결.

