# 바른 — 실용글쓰기 연습장

한국실용글쓰기 공부를 위한 정적 웹 앱입니다. 별도 서버, API 키, 빌드나 패키지 설치 없이 동작합니다.

## 기능

- 제공받은 사진을 바탕으로 문제 등록 예정 (현재 등록된 문제 없음)
- 한 순환 안에서 중복되지 않는 무작위 출제 및 영역 선택
- 오답 노트, 정답률, 연속 정답, 브라우저 학습 기록 저장
- 모바일 화면과 키보드 조작 지원

직접 만든 예제 문제는 모두 삭제했습니다. 제공받은 사진의 내용을 확인한 뒤 `questions.js`에 문제를 추가합니다. 기록에 사용하는 기존 문제 ID는 유지하세요. 다듬은 말은 문맥에 따라 선택해야 하며 모든 외래어나 한자어가 잘못된 표현이라는 뜻은 아닙니다.

## 로컬 실행

```sh
cd /workspace/PracticalKoreanWriting
python3 -m http.server 8000 --bind 0.0.0.0
```

일반 개발 환경에서는 브라우저로 서버에 접속합니다. 앱 자체는 `index.html`을 직접 열어도 실행할 수 있지만 기록 저장 동작은 브라우저 정책에 따라 달라질 수 있습니다. Google Fonts에 접근할 수 없어도 시스템 글꼴로 동작합니다.

## GitHub Pages 무료 배포

공개 저장소는 GitHub Free의 Pages를 사용할 수 있습니다. 비공개 저장소의 Pages 사용 가능 여부는 GitHub 요금제를 확인하세요.

1. 파일을 GitHub의 `main` 브랜치로 푸시합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.
3. **Actions → Deploy to GitHub Pages → Run workflow**를 실행합니다. 이후 `main`에 푸시할 때마다 자동 배포됩니다.
4. 성공한 배포의 주소는 `https://hanmingyu02.github.io/PracticalKoreanWriting/`입니다.

배포 워크플로는 웹 앱 파일 네 개만 업로드합니다. 로컬 학습 기록은 브라우저별로 관리되며 계정 간 동기화되지 않습니다.
