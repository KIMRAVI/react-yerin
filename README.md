# 정예린 React 포트폴리오

React/TypeScript로 컴포넌트 기반 개발을 익히며 만든 포트폴리오입니다. 마크업·CSS 실력은 유지하면서 상태 관리, 접근성(a11y), 라이브러리 없이 직접 구현한 인터랙션 컴포넌트를 함께 보여주는 데 초점을 맞췄습니다.

## 기술 스택

- React 19 + TypeScript
- Vite
- React Router
- MUI (`@mui/material`, `@mui/x-data-grid`) — 일부 UI 가이드 화면
- SCSS Modules — 커스텀 컴포넌트 및 랜딩 페이지
- Oxlint

## 실행 방법

```bash
npm install
npm run dev       # 개발 서버 실행
npm run build     # 타입 체크 + 프로덕션 빌드
npm run lint      # Oxlint 검사
```

## 화면 목록

| 화면            | 경로                 | 설명                                                                       |
| --------------- | -------------------- | -------------------------------------------------------------------------- |
| Landing         | `/landing`           | 반응형 레이아웃, 스크롤 인터랙션, 폼 유효성 검사를 직접 구현한 랜딩 페이지 |
| Select          | `/guides/select`     | **라이브러리 없이** 마크업·CSS·ARIA만으로 구현한 커스텀 셀렉트박스         |
| ButtonGuide     | `/guides/button`     | MUI Button 가이드                                                          |
| TextFieldGuide  | `/guides/textfield`  | MUI TextField 가이드                                                       |
| AccordionGuide  | `/guides/accordion`  | MUI Accordion 가이드                                                       |
| CheckboxGuide   | `/guides/checkbox`   | MUI Checkbox 가이드                                                        |
| RadioGroupGuide | `/guides/radiogroup` | MUI RadioGroup 가이드                                                      |
| ListGuide       | `/guides/list`       | MUI List 가이드                                                            |
| ModalGuide      | `/guides/modal`      | MUI Modal 가이드                                                           |
| IconsGuide      | `/guides/icon`       | MUI Icon 가이드                                                            |
| TypographyGuide | `/guides/typography` | MUI Typography 가이드                                                      |

## 강조 포인트

- **반응형**: 모바일 퍼스트로 작성하고 브레이크포인트마다 레이아웃이 실제로 재배치되도록 구현 (`Landing`)
- **접근성**: `aria-*` 속성, `:focus-visible` 스타일, `prefers-reduced-motion` 대응, 키보드만으로 완전히 조작 가능한 커스텀 셀렉트박스 (`Select`)
- **직접 구현한 인터랙션**: 스크롤 기반 reveal 애니메이션, IntersectionObserver를 이용한 nav 활성 하이라이트, 카운트업 애니메이션, 커스텀 셀렉트박스의 키보드 내비게이션/타입어헤드
- **컴포넌트 라이브러리 활용 능력**: MUI를 이용한 빠른 UI 구성과, 라이브러리 없이 직접 마크업·CSS·ARIA로 구현하는 능력을 함께 제시
