# React-MUI-Boilerplate

<!-- ![screen](./README.jpg) -->

MUI 스터디
<br>

<a href="https://mui.com/material-ui/getting-started/" target="_blank">https://mui.com/material-ui/getting-started/</a>
<br>


## 폴더 구조
```
|- public
|- src
  |- assets
    |- images
    |- scss # 레이아웃은 Sass or Pure css로 작성한다고 가정하였습니다.
      |- base
        |- _common.scss
        ...
      ...
      |- ui.scss
  |- components
    |- layout # 레이아웃 페이지
      |- Header.tsx
      ...
    |- pages # 페이지
    ...
  ...
  |- theme # MUI 컴포넌트 커스텀
    |- components # 기본 MUI의 스타일을 재정의
      |- index.tsx # 컴포넌트 임포트
      ...
    |- index.tsx # 작성한 커스텀 코드 import
    |- breakpoint.tsx # 반응형 정의
    |- typography.tsx # 타이포그래피
    |- palette.tsx # 색상 정의
```

## Terminal

```
최초 실행시
> npm install
> npm start

빌드
> npm run build

gh-pages 배포
> npm run deploy
```
