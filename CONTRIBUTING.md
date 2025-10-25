# 🤝 기여 가이드

한문철 AI 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법과 컨벤션을 안내합니다.

## 📋 목차

- [이슈 컨벤션](#-이슈-컨벤션)
- [PR 컨벤션](#-pr-컨벤션)
- [코딩 컨벤션](#-코딩-컨벤션)
- [커밋 컨벤션](#-커밋-컨벤션)
- [브랜치 전략](#-브랜치-전략)

## 🐛 이슈 컨벤션

### 이슈 제목 규칙

```
[유형] 간단한 설명
```

**유형:**

- `[BUG]` - 버그 리포트
- `[FEATURE]` - 기능 요청
- `[QUESTION]` - 질문
- `[AI-ANALYSIS]` - AI 분석 관련 이슈
- `[DOCS]` - 문서 관련
- `[REFACTOR]` - 리팩토링

**예시:**

- `[BUG] 영상 업로드 시 500 에러 발생`
- `[FEATURE] 분석 결과 PDF 다운로드 기능 추가`
- `[AI-ANALYSIS] 과실비율 산정 정확도 개선 필요`

### 이슈 라벨

- `bug` - 버그
- `enhancement` - 기능 개선
- `feature` - 새로운 기능
- `question` - 질문
- `ai-analysis` - AI 분석 관련
- `documentation` - 문서
- `refactor` - 리팩토링
- `needs-triage` - 분류 필요
- `high-priority` - 높은 우선순위
- `medium-priority` - 보통 우선순위
- `low-priority` - 낮은 우선순위

## 🔄 PR 컨벤션

### PR 제목 규칙

```
[유형] 간단한 설명
```

**유형:**

- `[FEAT]` - 새로운 기능
- `[FIX]` - 버그 수정
- `[DOCS]` - 문서 업데이트
- `[STYLE]` - 코드 스타일 변경
- `[REFACTOR]` - 리팩토링
- `[TEST]` - 테스트 추가/수정
- `[CHORE]` - 빌드, 설정 등

**예시:**

- `[FEAT] 영상 분석 결과 PDF 다운로드 기능 추가`
- `[FIX] 영상 업로드 시 발생하는 500 에러 수정`
- `[DOCS] API 문서 업데이트`

### PR 체크리스트

- [ ] 코드가 프로젝트의 코딩 스타일을 따름
- [ ] 자체 리뷰를 완료함
- [ ] 코드에 적절한 주석을 추가함
- [ ] 문서가 필요한 경우 업데이트함
- [ ] FSD 아키텍처 규칙을 준수함
- [ ] TypeScript 타입이 올바르게 정의됨
- [ ] ESLint 경고가 없음

## 💻 코딩 컨벤션

### FSD 아키텍처 규칙

- 상위 레이어는 하위 레이어를 import할 수 있음
- 하위 레이어는 상위 레이어를 import할 수 없음
- 같은 레이어 내에서는 서로 import 가능

### TypeScript 규칙

- 모든 함수와 변수에 타입을 명시
- `any` 타입 사용 금지
- 인터페이스는 `PascalCase` 사용
- 타입은 `UPPER_CASE` 사용

### React 컴포넌트 규칙

- 함수형 컴포넌트 사용
- Props 인터페이스는 컴포넌트명 + Props
- 컴포넌트명은 `PascalCase` 사용
- 파일명은 `kebab-case` 사용

### CSS/Tailwind 규칙

- Tailwind CSS 클래스 사용 우선
- 커스텀 CSS는 최소화
- 반응형 디자인 고려
- 다크모드 지원

## 📝 커밋 컨벤션

### 커밋 메시지 형식

```
<타입>(<스코프>): <설명>

[선택적 본문]

[선택적 푸터]
```

**타입:**

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 등

**스코프:**

- `ui`: UI 컴포넌트
- `api`: API 관련
- `ai`: AI 분석 기능
- `legal`: 법률 관련 기능
- `auth`: 인증 관련
- `video`: 영상 처리

**예시:**

```
feat(ai): 영상 분석 결과 PDF 다운로드 기능 추가

- 분석 결과를 PDF 형태로 다운로드할 수 있는 기능 구현
- PDF 템플릿에 과실비율, 분석이유, 관련 판례 포함
- 다운로드 버튼을 분석 결과 페이지에 추가

Closes #123
```

## 🌿 브랜치 전략

### 브랜치 명명 규칙

- `main` - 프로덕션 브랜치
- `develop` - 개발 브랜치
- `feature/이슈번호-기능명` - 기능 개발
- `bugfix/이슈번호-버그명` - 버그 수정
- `hotfix/이슈번호-긴급수정` - 긴급 수정

**예시:**

- `feature/123-video-analysis-pdf`
- `bugfix/456-upload-error-fix`
- `hotfix/789-critical-security-fix`

### 브랜치 전략

1. `main`에서 `develop` 브랜치 생성
2. `develop`에서 기능 브랜치 생성
3. 기능 완성 후 `develop`에 PR
4. `develop`에서 `main`으로 PR (릴리즈)

## 🚀 개발 환경 설정

### 필수 요구사항

- Node.js 18.x 이상
- npm 9.x 이상
- Git 2.x 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/hanmoonchul-ai.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 린트 검사
npm run lint
```

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든지 이슈를 생성해주세요.

---

감사합니다! 🎉
