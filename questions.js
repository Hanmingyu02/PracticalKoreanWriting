// 사용자가 제공한 용어·다듬은 말. 표제의 개수가 아닌 실제 항목을 모두 보존합니다.
// id는 브라우저 오답 기록에 사용하므로 변경하지 않습니다.
const JAPANESE_TERMS = [
  ['jp-kanji-01', '일본식 한자어', '망년회', ['송년 모임', '송년회']],
  ['jp-kanji-02', '일본식 한자어', '견습', ['수습']],
  ['jp-kanji-03', '일본식 한자어', '모포', ['담요']],
  ['jp-kanji-04', '일본식 한자어', '고수부지', ['둔치']],
  ['jp-kanji-05', '일본식 한자어', '구좌', ['계좌']],
  ['jp-kanji-06', '일본식 한자어', '노견', ['갓길']],
  ['jp-kanji-07', '일본식 한자어', '가불', ['임시 지급']],
  ['jp-kanji-08', '일본식 한자어', '가처분', ['임시 처분']],
  ['jp-kanji-09', '일본식 한자어', '마대', ['포대', '자루']],
  ['jp-kanji-10', '일본식 한자어', '익일', ['다음 날', '이튿날']],
  ['jp-kanji-11', '일본식 한자어', '거래선', ['거래처']],
  ['jp-kanji-12', '일본식 한자어', '종지부', ['마침표']],
  ['jp-kanji-13', '일본식 한자어', '대절', ['전세']],
  ['jp-kanji-14', '일본식 한자어', '도합', ['모두', '합계']],
  ['jp-kanji-15', '일본식 한자어', '보합세', ['주춤세', '멈춤세']],
  ['jp-kanji-16', '일본식 한자어', '불입', ['납입']],
  ['jp-kanji-17', '일본식 한자어', '고참', ['선임', '선임자', '선참', '선참자']],
  ['jp-kanji-18', '일본식 한자어', '다반사', ['예삿일', '흔한 일']],
  ['jp-kanji-19', '일본식 한자어', '수취인', ['받는 이', '받는 사람']],
  ['jp-kanji-20', '일본식 한자어', '잔고', ['잔액', '잔량']],
  ['jp-sound-01', '일본어 음차어', '모찌', ['떡']],
  ['jp-sound-02', '일본어 음차어', '유도리', ['여유', '여유분', '융통', '늘품']],
  ['jp-sound-03', '일본어 음차어', '나가리', ['무산']],
  ['jp-sound-04', '일본어 음차어', '나와바리', ['줄치기', '구획']],
  ['jp-sound-05', '일본어 음차어', '단도리', ['채비', '단속']],
  ['jp-sound-06', '일본어 음차어', '땡땡이', ['물방울']],
  ['jp-sound-07', '일본어 음차어', '땡땡이 무늬', ['물방울 무늬']],
  ['jp-sound-08', '일본어 음차어', '만땅', ['가득', '가득채움', '가득참']],
  ['jp-sound-09', '일본어 음차어', '쇼부', ['겨루기']],
  ['jp-sound-10', '일본어 음차어', '와사비', ['고추냉이']],
  ['jp-sound-11', '일본어 음차어', '지라시', ['선전지', '낱장 광고']],
  ['jp-sound-12', '일본어 음차어', '가오', ['체면', '무게']],
  ['jp-sound-13', '일본어 음차어', '쿠사리', ['핀잔']],
  ['jp-sound-14', '일본어 음차어', '노가다', ['막노동', '막일']],
  ['jp-sound-15', '일본어 음차어', '대빵', ['대장']],
  ['jp-sound-16', '일본어 음차어', '나시', ['민소매']],
  ['jp-sound-17', '일본어 음차어', '쓰키다시', ['곁들이찬']],
  ['jp-sound-18', '일본어 음차어', '아나고', ['붕장어']],
  ['jp-sound-19', '일본어 음차어', '가라', ['깃', '옷깃', '칼라']],
  ['jp-sound-20', '일본어 음차어', '간지', ['느낌']],
  ['jp-sound-21', '일본어 음차어', '무데뽀', ['막무가내']],
  ['jp-sound-22', '일본어 음차어', '잇파이', ['가득', '한껏', '많이', '가득들이']],
  ['jp-sound-23', '일본어 음차어', '곤조', ['고집', '근성']],
  ['jp-sound-24', '일본어 음차어', '기스', ['흠', '흠집']],
  ['jp-sound-25', '일본어 음차어', '분빠이하다', ['분배', '노느매기']],
  ['jp-sound-26', '일본어 음차어', '사시미', ['생선회']],
  ['jp-sound-27', '일본어 음차어', '와꾸', ['틀']],
  ['jp-sound-28', '일본어 음차어', '지리', ['맑은탕', '싱건탕']],
  ['jp-sound-29', '일본어 음차어', '보로터지다', ['드러나다', '들통나다']],
  ['jp-sound-30', '일본어 음차어', '비까번쩍하다', ['번쩍번쩍하다']],
  ['jp-sound-31', '일본어 음차어', '삑사리', ['실수', '음 이탈', '헛발질']],
].map(([id, group, term, replacements]) => ({ id, group, term, replacements }));

const CHINESE_TERMS = [
  ['가료', ['치료', '고침', '병 고침']],
  ['가용', ['쓸 수 있는']],
  ['개산', ['어림셈', '대략 계산']],
  ['개산하다', ['어림잡아 계산하다', '대략 계산하다']],
  ['개산급', ['어림 지급']],
  ['거양하다', ['들다', '올리다', '높이다', '드높이다']],
  ['게첩, 게첨', ['내붙임', '게시', '걸음', '내걸음']],
  ['견양', ['서식', '보기', '본', '본보기']],
  ['계류하다', ['(배 따위를) 매어 두다', '붙들어 매다']],
  ['계리', ['회계 처리']],
  ['금명간', ['오늘내일 사이']],
  ['금번', ['이번']],
  ['금회', ['이번']],
  ['내구 연한', ['사용 가능 햇수', '견딜 햇수']],
  ['내용 연수', ['사용 연한', '사용 가능 연수']],
  ['단차', ['고저 차', '높이 차이', '높낮이', '높낮이 차이']],
  ['당해', ['그']],
  ['동년', ['같은 해']],
  ['동일', ['같은 날', '그날']],
  ['동법', ['같은 법', '같은 방법', '같은 수법']],
  ['대장', ['장부']],
  ['별건', ['다른 건', '딴 건']],
  ['부락', ['마을']],
  ['불상', ['알 수 없음']],
  ['불시에', ['갑자기', '예고 없이']],
  ['불입하다', ['내다', '납입하다']],
  ['불출', ['내줌']],
  ['성료', ['성공적으로 마침', '성공적으로 끝남', '성대하게 마침']],
  ['수범 사례', ['모범 사례', '잘된 사례']],
  ['수의 시담', ['가격 협의']],
  ['시건장치', ['잠금장치', '자물쇠 장치']],
  ['양도양수', ['주고받음']],
  ['(아스팔트 등) 양생', ['(아스팔트 등) 굳히기']],
  ['여입 결의', ['회수 결정']],
  ['예가', ['예정 가격']],
  ['예산 지변 과목', ['예산 과목']],
  ['예찰', ['미리 살피기']],
  ['이격', ['어긋남', '벌림']],
  ['익일', ['이튿날', '다음 날']],
  ['익월', ['다음 달']],
  ['익년', ['다음 해', '이듬해']],
  ['일부인', ['날짜 도장']],
  ['입석', ['현장 참석']],
  ['자동 제세동기', ['자동 심장 충격기', '심장 충격기']],
  ['적기', ['알맞은 시기', '제때', '제철']],
  ['적의 조치', ['알맞게 처리', '적절한 조치']],
  ['지득하다', ['알게 되다', '알다']],
  ['차년도', ['다음 해', '다음 연도']],
  ['채납', ['받음', '기부받음', '받아들임']],
  ['기부 채납', ['기부받음', '기부받기']],
  ['첨두시', ['가장 붐빌 때']],
  ['초도 순시', ['첫 방문', '첫 둘러보기']],
  ['(경보, 사이렌 등을) 취명하다', ['(경보, 사이렌 등을) 울리다']],
  ['(공무원증, 출입증 등을) 패용하다', ['(공무원증, 출입증 등을) 달다', '차다']],
  ['하구언', ['강어귀둑', '강어귀의 둑']],
  ['행선지', ['가는 곳']],
].map(([term, replacements], index) => ({
  id: `cn-refine-${String(index + 1).padStart(2, '0')}`,
  group: '개선 대상 한자어', term, replacements,
}));

const FOREIGN_TERMS = [
  ['거버넌스', ['정책', '행정', '관리', '민관 협력', '협치']],
  ['규제 프리존', ['규제 청정 지역', '규제 자유 구역', '규제 (대폭) 완화 지역', '무규제 지역']],
  ['규제 샌드박스', ['규제 유예', '규제 유예 제도']],
  ['니즈', ['수요', '바람']],
  ['데모데이', ['시연회']],
  ['드론', ['무인기']],
  ['라운드 테이블', ['원탁회의']],
  ['롤모델', ['본보기', '본보기상']],
  ['리스크', ['손실 우려', '손실 위험', '악재']],
  ['마스터플랜', ['종합 계획', '기본 계획', '기본 설계']],
  ['매뉴얼', ['설명서', '안내서', '지침', '지침서']],
  ['매칭', ['연결', '맞춤', '연계', '대응']],
  ['메가트렌드', ['대세', '거대 물결']],
  ['모멘텀', ['전환 국면', '동력', '추동력']],
  ['바우처', ['이용권', '상품권']],
  ['브라운 백 미팅, 브라운 백 세미나', ['도시락 토론회', '도시락 모임', '도시락 회의']],
  ['브로슈어', ['안내서', '소책자']],
  ['세션', ['부', '시간', '분과', '작업 시간']],
  ['스크린 도어', ['안전문']],
  ['스타트업', ['새싹 기업', '창업 초기 기업', '신생 기업']],
  ['싱크 탱크', ['두뇌 집단', '참모 집단']],
  ['아웃리치', ['현장 지원 활동', '현장 원조 활동', '거리 상담', '현장 봉사']],
  ['아카이브', ['자료 보관소', '자료 저장소', '기록 보관', '자료 전산화', '기록 보관소']],
  ['액션 플랜', ['실행 계획', '세부 계획']],
  ['어젠다', ['의제', '가치관']],
  ['오피니언 리더', ['여론 주도자', '여론 주도층']],
  ['원 스트라이크 아웃', ['즉시 퇴출', '즉시 퇴출제']],
  ['이니셔티브', ['주도권', '구상', '발의']],
  ['제로화', ['없애기', '줄이기', '예방']],
  ['쿼터', ['한도량', '수출입 한도량', '배당량', '수출입 배당량']],
  ['클러스터', ['산학 협력 지구', '연합 지구', '협력 지구', '협력 단지']],
  ['킥오프 회의', ['첫 회의', '첫 기획 회의']],
  ['태스크 포스, 태스크 포스팀, TF, TF팀, tf', ['특별팀', '전담팀', '전담 조직', '특별 전담 조직', '전담반']],
  ['테스트 베드', ['가늠터', '시험장', '시험대', '시험 무대', '성능 시험장']],
  ['투 트랙', ['양면', '두 갈래', '이원화']],
  ['팸 투어', ['사전 답사 여행', '홍보 여행', '초청 홍보 여행']],
  ['인력 풀', ['인력 자원', '인력 은행']],
  ['허브', ['중심', '중심지', '거점']],
  ['AI', ['인공 지능', '조류 인플루엔자']],
  ['B2B', ['기업 간 거래']],
  ['BI', ['브랜드 정체성']],
  ['G20', ['주요 20개국']],
  ['G2G', ['정부 간 거래']],
  ['ICT', ['정보 통신 기술']],
  ['IoT', ['사물 인터넷']],
  ['IR', ['기업 설명회', '기업 투자 설명회']],
  ['IT', ['정보 기술']],
  ['MOU', ['업무 협정', '업무 협약', '양해 각서']],
  ['O2O', ['온오프라인 연계', '온오프라인 연계 마케팅']],
  ['ODA', ['공적 개발 원조', '정부 개발 원조']],
  ['R&D', ['연구 개발']],
].map(([term, replacements], index) => ({
  id: `foreign-refine-${String(index + 1).padStart(2, '0')}`,
  group: '개선 대상 외래어·외국어', term, replacements,
}));

const QUESTIONS = [
  ...JAPANESE_TERMS.map(entry => ({ ...entry, category: '일본어 투 용어' })),
  ...CHINESE_TERMS.map(entry => ({ ...entry, category: '한자어 다듬기' })),
  ...FOREIGN_TERMS.map(entry => ({ ...entry, category: '외래어·외국어 다듬기' })),
].map(entry => ({
  id: entry.id,
  category: entry.category,
  group: entry.group,
  question: entry.term,
  answers: entry.replacements,
  explanation: `제공 자료의 ${entry.group} 항목: ${entry.term} → ${entry.replacements.join(', ')}`,
}));

// 수정 전/후 표의 공백·괄호·문장부호를 그대로 보존합니다.
const CORRECTION_QUESTIONS = [
  {
    "id": "spelling-01",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "의심스런",
    "answers": [
      "의심스러운"
    ],
    "strict": true
  },
  {
    "id": "spelling-02",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "있읍니다",
    "answers": [
      "있습니다"
    ],
    "strict": true
  },
  {
    "id": "spelling-03",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "동·식물",
    "answers": [
      "동식물"
    ],
    "strict": true
  },
  {
    "id": "spelling-04",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "승·하차",
    "answers": [
      "승하차"
    ],
    "strict": true
  },
  {
    "id": "spelling-05",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "갯수",
    "answers": [
      "개수"
    ],
    "strict": true
  },
  {
    "id": "spelling-06",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "2000.9.7",
    "answers": [
      "2000. 9. 7."
    ],
    "strict": true
  },
  {
    "id": "spelling-07",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "10. 28-29간",
    "answers": [
      "10. 28.~29.에"
    ],
    "strict": true
  },
  {
    "id": "spelling-08",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "2000.11.2",
    "answers": [
      "2000. 11. 2."
    ],
    "strict": true
  },
  {
    "id": "spelling-09",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "2000.1.4",
    "answers": [
      "2000. 1. 4."
    ],
    "strict": true
  },
  {
    "id": "spelling-10",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "(처분 행위가 완료(소유권 이전 등기완료)되는 시점인지, 주무관청의 처분 허가를 받은 시점인지)",
    "answers": [
      "[처분 행위가 완료(소유권 이전 등기 완료)되는 시점인지, 주무관청의 처분 허가를 받은 시점인지]"
    ],
    "strict": true
  },
  {
    "id": "spelling-11",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "향토 기업으로써",
    "answers": [
      "향토 기업으로서"
    ],
    "strict": true,
    "note": "자격을 나타낼 때"
  },
  {
    "id": "spelling-12",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "신분으로써",
    "answers": [
      "신분으로서"
    ],
    "strict": true,
    "note": "자격을 나타낼 때"
  },
  {
    "id": "spelling-13",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "삼가하여 주십시오.",
    "answers": [
      "삼가 주십시오."
    ],
    "strict": true
  },
  {
    "id": "spelling-14",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "그리고,",
    "answers": [
      "그리고"
    ],
    "strict": true
  },
  {
    "id": "spelling-15",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "목표 년도",
    "answers": [
      "목표 연도"
    ],
    "strict": true
  },
  {
    "id": "spelling-16",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "년수",
    "answers": [
      "연수"
    ],
    "strict": true
  },
  {
    "id": "spelling-17",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "승인률",
    "answers": [
      "승인율"
    ],
    "strict": true
  },
  {
    "id": "spelling-18",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "실업율",
    "answers": [
      "실업률"
    ],
    "strict": true
  },
  {
    "id": "spelling-19",
    "category": "틀리기 쉬운 맞춤법",
    "group": "맞춤법",
    "question": "\"되었다\"고",
    "answers": [
      "\"되었다.\"라고"
    ],
    "strict": true
  },
  {
    "id": "spacing09-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "1/2 가량은",
    "answers": [
      "1/2가량은"
    ],
    "strict": true
  },
  {
    "id": "spacing09-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "10. 25.(금) 까지",
    "answers": [
      "10. 25.(금)까지"
    ],
    "strict": true
  },
  {
    "id": "spacing09-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "10월초",
    "answers": [
      "10월 초"
    ],
    "strict": true
  },
  {
    "id": "spacing09-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "10천㎡미만",
    "answers": [
      "1만㎡ 미만"
    ],
    "strict": true
  },
  {
    "id": "spacing09-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "10천㎡이상",
    "answers": [
      "1만㎡ 이상"
    ],
    "strict": true
  },
  {
    "id": "spacing09-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "15세이상",
    "answers": [
      "15세 이상"
    ],
    "strict": true
  },
  {
    "id": "spacing09-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "1년이상",
    "answers": [
      "1년 이상"
    ],
    "strict": true
  },
  {
    "id": "spacing09-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "2000년말",
    "answers": [
      "2000년 말"
    ],
    "strict": true
  },
  {
    "id": "spacing09-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "20일 경",
    "answers": [
      "20일경"
    ],
    "strict": true,
    "note": "20일 무렵"
  },
  {
    "id": "spacing09-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "하순 경",
    "answers": [
      "하순경"
    ],
    "strict": true,
    "note": "하순 무렵"
  },
  {
    "id": "spacing09-11",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "23만개",
    "answers": [
      "23만 개"
    ],
    "strict": true
  },
  {
    "id": "spacing09-12",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "2개월 간",
    "answers": [
      "2개월간"
    ],
    "strict": true
  },
  {
    "id": "spacing09-13",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "30%미만",
    "answers": [
      "30% 미만"
    ],
    "strict": true
  },
  {
    "id": "spacing09-14",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "3년이하",
    "answers": [
      "3년 이하"
    ],
    "strict": true
  },
  {
    "id": "spacing09-15",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "3일내",
    "answers": [
      "3일 내"
    ],
    "strict": true
  },
  {
    "id": "spacing09-16",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "3일자료",
    "answers": [
      "3일 자료"
    ],
    "strict": true
  },
  {
    "id": "spacing09-17",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "3천명",
    "answers": [
      "3천 명"
    ],
    "strict": true
  },
  {
    "id": "spacing09-18",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 9쪽",
    "question": "4개부처",
    "answers": [
      "4개 부처"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "50%이상",
    "answers": [
      "50% 이상"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "50만명",
    "answers": [
      "50만 명"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "50여년간",
    "answers": [
      "50여 년간"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "50여회",
    "answers": [
      "50여 회"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "5천억원",
    "answers": [
      "5천억 원"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "60여개국 3,000여명",
    "answers": [
      "60여 개국 3,000여 명"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "6시30분",
    "answers": [
      "6시 30분"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "각1부",
    "answers": [
      "각 1부"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "간소화 하게",
    "answers": [
      "간소화하게"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "개시 할",
    "answers": [
      "개시할"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-11",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "경기전",
    "answers": [
      "경기 전"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-12",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "경제팀내",
    "answers": [
      "경제 팀 내"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-13",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "계약 체결후",
    "answers": [
      "계약 체결 후"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-14",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "계약시",
    "answers": [
      "계약 시"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-15",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "계획인 바",
    "answers": [
      "계획인바"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-16",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "고용및",
    "answers": [
      "고용 및"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-17",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "고용안내",
    "answers": [
      "고용 안내"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-18",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "고용현황",
    "answers": [
      "고용 현황"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-19",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "공모건",
    "answers": [
      "공모 건"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-20",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "구비서류",
    "answers": [
      "구비 서류"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-21",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "국가를당사자로하는계약에관한법률",
    "answers": [
      "「국가를 당사자로 하는 계약에 관한 법률」"
    ],
    "strict": true,
    "note": "법률명을 나타낼 때"
  },
  {
    "id": "spacing10l-22",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "귀 사",
    "answers": [
      "귀사"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-23",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "귀주재국",
    "answers": [
      "귀 주재국"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-24",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "그 동안",
    "answers": [
      "그동안"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-25",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "근거 : ○○○○부",
    "answers": [
      "근거: ○○○○부"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-26",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "근무지역",
    "answers": [
      "근무 지역"
    ],
    "strict": true
  },
  {
    "id": "spacing10l-27",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 왼쪽",
    "question": "기업과 함께 하는",
    "answers": [
      "기업과 함께하는"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "기재착오",
    "answers": [
      "기재 착오"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "기한내",
    "answers": [
      "기한 내"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "기호 순에 따라",
    "answers": [
      "기호순에 따라"
    ],
    "strict": true,
    "note": "기호 순서대로"
  },
  {
    "id": "spacing10r-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "김처장",
    "answers": [
      "김 처장"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "대통령간",
    "answers": [
      "대통령 간"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "더이상은",
    "answers": [
      "더 이상은"
    ],
    "strict": true,
    "note": "더는"
  },
  {
    "id": "spacing10r-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "두가지",
    "answers": [
      "두 가지"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "매세대",
    "answers": [
      "매 세대"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "모집공고",
    "answers": [
      "모집 공고"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "문서 입니다.",
    "answers": [
      "문서입니다."
    ],
    "strict": true
  },
  {
    "id": "spacing10r-11",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "문어발 식",
    "answers": [
      "문어발식"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-12",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "받지 못 하셨다면",
    "answers": [
      "받지 못하셨다면"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-13",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "발사 될",
    "answers": [
      "발사될"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-14",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "발생시",
    "answers": [
      "발생 시"
    ],
    "strict": true,
    "note": "발생했을 때"
  },
  {
    "id": "spacing10r-15",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "발전시키는데",
    "answers": [
      "발전시키는 데"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-16",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "발전해 온 바",
    "answers": [
      "발전해 온바"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-17",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "발행사간",
    "answers": [
      "발행사 간"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-18",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "밤 부터",
    "answers": [
      "밤부터"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-19",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "방과후",
    "answers": [
      "방과 후"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-20",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "배치전",
    "answers": [
      "배치 전"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-21",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "법적기준",
    "answers": [
      "법적 기준"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-22",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "변동없음",
    "answers": [
      "변동 없음"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-23",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "사용가능한",
    "answers": [
      "사용 가능한",
      "사용할 수 있는"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-24",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "사용중인",
    "answers": [
      "사용 중인"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-25",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "선양활동 뿐만아니라",
    "answers": [
      "선양 활동뿐만 아니라"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-26",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "소득산정시",
    "answers": [
      "소득 산정 시"
    ],
    "strict": true
  },
  {
    "id": "spacing10r-27",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 10쪽 오른쪽",
    "question": "소비자물가",
    "answers": [
      "소비자 물가"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "수 차례",
    "answers": [
      "수차례"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "승인후",
    "answers": [
      "승인 후"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "시설수",
    "answers": [
      "시설 수"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "시행이전",
    "answers": [
      "시행 이전"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "시행한바 있고",
    "answers": [
      "시행한 바 있고"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "신청 할",
    "answers": [
      "신청할"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "실효성있게",
    "answers": [
      "실효성 있게"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "심사방법",
    "answers": [
      "심사 방법"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "안됩니다.",
    "answers": [
      "안 됩니다."
    ],
    "strict": true,
    "note": "‘안’이 ‘되다’를 부정할 때"
  },
  {
    "id": "spacing11l-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "안정화 되는",
    "answers": [
      "안정화되는"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-11",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "알려드립니다.",
    "answers": [
      "알려 드립니다."
    ],
    "strict": true
  },
  {
    "id": "spacing11l-12",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "양국가간",
    "answers": [
      "양 국가 간",
      "양국 간"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-13",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "어느선 까지이며",
    "answers": [
      "어느 선까지이며"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-14",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "업무내용",
    "answers": [
      "업무 내용"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-15",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "역량있고",
    "answers": [
      "역량 있고"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-16",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "연체여부",
    "answers": [
      "연체 여부"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-17",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "영수증 상의",
    "answers": [
      "영수증상의"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-18",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "용도외",
    "answers": [
      "용도 외"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-19",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "우리 나라",
    "answers": [
      "우리나라"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-20",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "우리경제",
    "answers": [
      "우리 경제"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-21",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "우리극장",
    "answers": [
      "우리 극장"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-22",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "우리부",
    "answers": [
      "우리 부"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-23",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "우주관련",
    "answers": [
      "우주 관련"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-24",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "원활해 지기를",
    "answers": [
      "원활해지기를"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-25",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "위호와 관련",
    "answers": [
      "위 호와 관련하여"
    ],
    "strict": true
  },
  {
    "id": "spacing11l-26",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 왼쪽",
    "question": "이 날",
    "answers": [
      "이날"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "이용 시간 : (오전) 09:00 ~ 12:00, (오후) 13:00 ~ 17:00, (야간) 18:00 ~ 22:00",
    "answers": [
      "이용 시간: (오전) 09:00~12:00, (오후) 13:00~17:00, (야간) 18:00~22:00"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "이중",
    "answers": [
      "이 중"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "입국 할",
    "answers": [
      "입국할"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "입국규제가",
    "answers": [
      "입국 규제가"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "재 교육을",
    "answers": [
      "재교육을"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "전년대비",
    "answers": [
      "전년 대비"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "정부합동단속이",
    "answers": [
      "정부 합동 단속이"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "정책간",
    "answers": [
      "정책 간"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "제 2000",
    "answers": [
      "제2000"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "제 4장",
    "answers": [
      "제4장"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-11",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "제 4차 제 1분과",
    "answers": [
      "제4차 제1분과"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-12",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "종합정책개발및성과관리",
    "answers": [
      "종합 정책 개발 및 성과 관리"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-13",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "주의깊게",
    "answers": [
      "주의 깊게"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-14",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "週단위로",
    "answers": [
      "주 단위로"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-15",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "지원가능한",
    "answers": [
      "지원 가능한"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-16",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "차질없이",
    "answers": [
      "차질 없이"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-17",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "착오없으시기",
    "answers": [
      "착오 없으시기"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-18",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "참가자앞",
    "answers": [
      "참가자 앞"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-19",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "○○부앞",
    "answers": [
      "○○부 앞"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-20",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "전달바람",
    "answers": [
      "전달 바람"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-21",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "참고바람",
    "answers": [
      "참고 바람"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-22",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "채용내용",
    "answers": [
      "채용 내용"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-23",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "첫 해인",
    "answers": [
      "첫해인"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-24",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "총28건",
    "answers": [
      "총 28건"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-25",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "추진중인",
    "answers": [
      "추진 중인"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-26",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "취임이후부터",
    "answers": [
      "취임 이후부터"
    ],
    "strict": true
  },
  {
    "id": "spacing11r-27",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 11쪽 오른쪽",
    "question": "취임후",
    "answers": [
      "취임 후"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-01",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "하는 바",
    "answers": [
      "하는바"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-02",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "학교, 지역사회가 함께 하는",
    "answers": [
      "학교와 지역 사회가 함께하는"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-03",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "학력 :",
    "answers": [
      "학력:"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-04",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "한 것 뿐이라며",
    "answers": [
      "한 것뿐이라며"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-05",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "한 자리",
    "answers": [
      "한자리"
    ],
    "strict": true,
    "note": "같은 자리"
  },
  {
    "id": "spacing-photo3-06",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "한다는데 의견을 같이 하였다.",
    "answers": [
      "한다는 데 의견을 같이하였다."
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-07",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "한반도 뿐 아니라",
    "answers": [
      "한반도뿐 아니라"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-08",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "허위기재",
    "answers": [
      "허위 기재"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-09",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "기초반과 활용반등",
    "answers": [
      "기초반과 활용반 등"
    ],
    "strict": true
  },
  {
    "id": "spacing-photo3-10",
    "category": "띄어쓰기",
    "group": "띄어쓰기 · 세 번째 사진",
    "question": "희생정도",
    "answers": [
      "희생 정도"
    ],
    "strict": true
  }
];
QUESTIONS.push(...CORRECTION_QUESTIONS);

// 사용자가 제공한 12~14쪽 낱말 표. 화살표는 바꿔 쓰면 좋은 말을 나타냅니다.
const WORD_QUESTIONS = [
  {
    "id": "word-12-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "패널",
    "answers": [
      "출연자",
      "토론자"
    ],
    "sourceAnswer": "출연자, 토론자",
    "strict": true
  },
  {
    "id": "word-12-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "20 SPACE",
    "answers": [
      "20 스페이스(SPACE)"
    ],
    "sourceAnswer": "20 스페이스(SPACE)",
    "strict": true
  },
  {
    "id": "word-12-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "3R’s(읽기·쓰기·기초 수학)",
    "answers": [
      "읽기·쓰기·기초 수학(3R’s)"
    ],
    "sourceAnswer": "읽기·쓰기·기초 수학(3R’s)",
    "strict": true
  },
  {
    "id": "word-12-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "BI",
    "answers": [
      "비아이(BI)",
      "대표 이미지"
    ],
    "sourceAnswer": "비아이(BI)/대표 이미지",
    "strict": true
  },
  {
    "id": "word-12-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "Bush 미 대통령",
    "answers": [
      "부시 미 대통령"
    ],
    "sourceAnswer": "부시 미 대통령",
    "strict": true
  },
  {
    "id": "word-12-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "DB",
    "answers": [
      "데이터베이스"
    ],
    "sourceAnswer": "데이터베이스",
    "strict": true
  },
  {
    "id": "word-12-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "E-mail",
    "answers": [
      "전자우편"
    ],
    "sourceAnswer": "전자우편",
    "strict": true
  },
  {
    "id": "word-12-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "GDP",
    "answers": [
      "국내 총생산"
    ],
    "sourceAnswer": "국내 총생산",
    "strict": true
  },
  {
    "id": "word-12-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "LED",
    "answers": [
      "엘이디(LED)",
      "발광 다이오드[LED]"
    ],
    "sourceAnswer": "엘이디(LED)/발광 다이오드[LED]",
    "strict": true
  },
  {
    "id": "word-12-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "Obama 미 대통령",
    "answers": [
      "오바마 미 대통령"
    ],
    "sourceAnswer": "오바마 미 대통령",
    "strict": true
  },
  {
    "id": "word-12-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "p21",
    "answers": [
      "21쪽"
    ],
    "sourceAnswer": "21쪽",
    "strict": true
  },
  {
    "id": "word-12-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 12쪽",
    "question": "p26~29",
    "answers": [
      "26~29쪽"
    ],
    "sourceAnswer": "26~29쪽",
    "strict": true
  },
  {
    "id": "word-13a-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "para. 1-2",
    "answers": [
      "1-2 문단"
    ],
    "sourceAnswer": "1-2 문단",
    "strict": true
  },
  {
    "id": "word-13a-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "PC",
    "answers": [
      "개인용 컴퓨터",
      "피시(PC)"
    ],
    "sourceAnswer": "개인용 컴퓨터/피시(PC)",
    "strict": true
  },
  {
    "id": "word-13a-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "R&D",
    "answers": [
      "연구 개발"
    ],
    "sourceAnswer": "연구 개발",
    "strict": true
  },
  {
    "id": "word-13a-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "SMS",
    "answers": [
      "문자 메시지"
    ],
    "sourceAnswer": "문자 메시지",
    "strict": true
  },
  {
    "id": "word-13a-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "Step 1.",
    "answers": [
      "1단계"
    ],
    "sourceAnswer": "1단계",
    "strict": true
  },
  {
    "id": "word-13a-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "T/F",
    "answers": [
      "특별 팀"
    ],
    "sourceAnswer": "특별 팀",
    "strict": true
  },
  {
    "id": "word-13a-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "TV",
    "answers": [
      "텔레비전"
    ],
    "sourceAnswer": "텔레비전",
    "strict": true
  },
  {
    "id": "word-13a-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "VS",
    "answers": [
      "대"
    ],
    "sourceAnswer": "대",
    "strict": true
  },
  {
    "id": "word-13a-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "WMD",
    "answers": [
      "대량 살상 무기"
    ],
    "sourceAnswer": "대량 살상 무기",
    "strict": true
  },
  {
    "id": "word-13a-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "감안하여",
    "answers": [
      "고려하여"
    ],
    "sourceAnswer": "고려하여",
    "strict": true
  },
  {
    "id": "word-13a-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "게재되어 있습니다.",
    "answers": [
      "나와 있습니다.",
      "실려 있습니다."
    ],
    "sourceAnswer": "나와 있습니다./실려 있습니다.",
    "strict": true
  },
  {
    "id": "word-13a-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "게재하여",
    "answers": [
      "실어"
    ],
    "sourceAnswer": "실어",
    "strict": true
  },
  {
    "id": "word-13a-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "계획을 달성할 수 있도록",
    "answers": [
      "계획을 이행할 수 있도록",
      "목표를 달성할 수 있도록"
    ],
    "sourceAnswer": "계획을 이행할 수 있도록/목표를 달성할 수 있도록",
    "strict": true
  },
  {
    "id": "word-13a-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "고객",
    "answers": [
      "승객"
    ],
    "sourceAnswer": "승객",
    "strict": true,
    "note": "교통수단 이용 손님"
  },
  {
    "id": "word-13a-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "공연장에 반입할",
    "answers": [
      "공연장에 들어올"
    ],
    "sourceAnswer": "공연장에 들어올",
    "strict": true
  },
  {
    "id": "word-13a-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "관할",
    "answers": [
      "담당"
    ],
    "sourceAnswer": "담당",
    "strict": true
  },
  {
    "id": "word-13a-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "교육바우처",
    "answers": [
      "교육 복지 이용권 제도",
      "교육 복지 상품권 제도"
    ],
    "sourceAnswer": "교육 복지 이용권 제도/교육 복지 상품권 제도",
    "strict": true
  },
  {
    "id": "word-13a-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "글로벌",
    "answers": [
      "국제적",
      "세계적"
    ],
    "sourceAnswer": "국제적/세계적",
    "strict": true
  },
  {
    "id": "word-13a-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "글로벌 네트워크",
    "answers": [
      "국제 협력망"
    ],
    "sourceAnswer": "국제 협력망",
    "strict": true
  },
  {
    "id": "word-13a-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "글로벌 스탠더드",
    "answers": [
      "국제 표준",
      "국제 기준"
    ],
    "sourceAnswer": "글로벌 스탠더드(→ 국제 표준/국제 기준)",
    "strict": true
  },
  {
    "id": "word-13a-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "글로벌화",
    "answers": [
      "세계화",
      "국제화"
    ],
    "sourceAnswer": "세계화/국제화",
    "strict": true
  },
  {
    "id": "word-13a-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "금년",
    "answers": [
      "올해"
    ],
    "sourceAnswer": "올해",
    "strict": true
  },
  {
    "id": "word-13a-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "금번",
    "answers": [
      "이번"
    ],
    "sourceAnswer": "이번",
    "strict": true
  },
  {
    "id": "word-13a-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "금일",
    "answers": [
      "오늘"
    ],
    "sourceAnswer": "오늘",
    "strict": true
  },
  {
    "id": "word-13a-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 첫 번째 표",
    "question": "기 통보한",
    "answers": [
      "이미 통보한",
      "이미 알려 드린"
    ],
    "sourceAnswer": "이미 통보한/이미 알려 드린",
    "strict": true
  },
  {
    "id": "word-13b-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "旣보증 금액",
    "answers": [
      "기존 보증 금액"
    ],
    "sourceAnswer": "기존 보증 금액",
    "strict": true
  },
  {
    "id": "word-13b-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "기여하는",
    "answers": [
      "이바지하는"
    ],
    "sourceAnswer": "이바지하는",
    "strict": true
  },
  {
    "id": "word-13b-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "기일을 엄수하여",
    "answers": [
      "날짜를 지켜"
    ],
    "sourceAnswer": "날짜를 지켜",
    "strict": true
  },
  {
    "id": "word-13b-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "꼼꼼이",
    "answers": [
      "꼼꼼히"
    ],
    "sourceAnswer": "꼼꼼히",
    "strict": true
  },
  {
    "id": "word-13b-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "다운/다운로드",
    "answers": [
      "내려받기"
    ],
    "sourceAnswer": "내려받기",
    "strict": true
  },
  {
    "id": "word-13b-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "다운로드하지",
    "answers": [
      "내려받지"
    ],
    "sourceAnswer": "내려받지",
    "strict": true
  },
  {
    "id": "word-13b-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "당초",
    "answers": [
      "기존"
    ],
    "sourceAnswer": "기존",
    "strict": true
  },
  {
    "id": "word-13b-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "對해외언론",
    "answers": [
      "대해외 언론"
    ],
    "sourceAnswer": "대해외 언론",
    "strict": true
  },
  {
    "id": "word-13b-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "도출",
    "answers": [
      "이끌어 냄"
    ],
    "sourceAnswer": "이끌어 냄",
    "strict": true
  },
  {
    "id": "word-13b-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "동 건은",
    "answers": [
      "이 건은"
    ],
    "sourceAnswer": "이 건은",
    "strict": true
  },
  {
    "id": "word-13b-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "동 사업의 일환으로",
    "answers": [
      "이러한 사업의 하나로"
    ],
    "sourceAnswer": "이러한 사업의 하나로",
    "strict": true
  },
  {
    "id": "word-13b-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "동봉",
    "answers": [
      "함께 보냄"
    ],
    "sourceAnswer": "함께 보냄",
    "strict": true
  },
  {
    "id": "word-13b-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "랜섬웨어",
    "answers": [
      "금품 요구 악성 프로그램"
    ],
    "sourceAnswer": "금품 요구 악성 프로그램",
    "strict": true
  },
  {
    "id": "word-13b-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "로그인",
    "answers": [
      "회원 들어가기"
    ],
    "sourceAnswer": "회원 들어가기",
    "strict": true
  },
  {
    "id": "word-13b-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "로드맵",
    "answers": [
      "이행안",
      "단계별 이행안"
    ],
    "sourceAnswer": "이행안/단계별 이행안",
    "strict": true
  },
  {
    "id": "word-13b-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "리더십",
    "answers": [
      "지도력",
      "통솔력"
    ],
    "sourceAnswer": "지도력/통솔력",
    "strict": true
  },
  {
    "id": "word-13b-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "마대",
    "answers": [
      "포대",
      "자루"
    ],
    "sourceAnswer": "포대/자루",
    "strict": true
  },
  {
    "id": "word-13b-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "마스터플랜",
    "answers": [
      "종합 계획",
      "기본 설계"
    ],
    "sourceAnswer": "종합 계획/기본 설계",
    "strict": true
  },
  {
    "id": "word-13b-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "마이스터",
    "answers": [
      "전문가"
    ],
    "sourceAnswer": "전문가",
    "strict": true
  },
  {
    "id": "word-13b-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "매뉴얼",
    "answers": [
      "설명서",
      "안내서",
      "지침"
    ],
    "sourceAnswer": "설명서/안내서/지침",
    "strict": true
  },
  {
    "id": "word-13b-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "매뉴얼",
    "answers": [
      "설명서",
      "안내서",
      "지침"
    ],
    "sourceAnswer": "매뉴얼(→ 설명서/안내서/지침)",
    "strict": true
  },
  {
    "id": "word-13b-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "면밀히",
    "answers": [
      "자세히"
    ],
    "sourceAnswer": "자세히",
    "strict": true
  },
  {
    "id": "word-13b-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "모니터링하고",
    "answers": [
      "관찰하고",
      "지켜보고"
    ],
    "sourceAnswer": "관찰하고/지켜보고",
    "strict": true
  },
  {
    "id": "word-13b-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "모델",
    "answers": [
      "본보기",
      "모형"
    ],
    "sourceAnswer": "본보기/모형",
    "strict": true
  },
  {
    "id": "word-13b-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "무대에 반입",
    "answers": [
      "무대에 들어오거나"
    ],
    "sourceAnswer": "무대에 들어오거나",
    "strict": true
  },
  {
    "id": "word-13b-26",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "반입되는",
    "answers": [
      "들어오는"
    ],
    "sourceAnswer": "들어오는",
    "strict": true
  },
  {
    "id": "word-13b-27",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 두 번째 표",
    "question": "무대에서 반출하려면",
    "answers": [
      "무대에서 내리려면"
    ],
    "sourceAnswer": "무대에서 내리려면",
    "strict": true
  },
  {
    "id": "word-13c-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "배터리가 내장되어 있습니다.",
    "answers": [
      "전지가 들어 있습니다."
    ],
    "sourceAnswer": "전지가 들어 있습니다.",
    "strict": true
  },
  {
    "id": "word-13c-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "복무규정에 의거함",
    "answers": [
      "복무규정에 따름"
    ],
    "sourceAnswer": "복무규정에 따름",
    "strict": true
  },
  {
    "id": "word-13c-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "부스",
    "answers": [
      "관",
      "공간"
    ],
    "sourceAnswer": "관/공간",
    "strict": true
  },
  {
    "id": "word-13c-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "부합하는",
    "answers": [
      "맞는",
      "들어맞는"
    ],
    "sourceAnswer": "맞는/들어맞는",
    "strict": true
  },
  {
    "id": "word-13c-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "부합하도록",
    "answers": [
      "맞도록"
    ],
    "sourceAnswer": "맞도록",
    "strict": true
  },
  {
    "id": "word-13c-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "브랜드 슬로건",
    "answers": [
      "대표 구호",
      "홍보 문구",
      "대표 가치 띄움말"
    ],
    "sourceAnswer": "대표 구호/홍보 문구/대표 가치 띄움말",
    "strict": true
  },
  {
    "id": "word-13c-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "브레인스토밍",
    "answers": [
      "난상 토론",
      "발상 모으기"
    ],
    "sourceAnswer": "난상 토론/발상 모으기",
    "strict": true
  },
  {
    "id": "word-13c-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "브로슈어",
    "answers": [
      "안내서",
      "소책자"
    ],
    "sourceAnswer": "안내서/소책자",
    "strict": true
  },
  {
    "id": "word-13c-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "비전",
    "answers": [
      "전망"
    ],
    "sourceAnswer": "전망",
    "strict": true
  },
  {
    "id": "word-13c-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "비전",
    "answers": [
      "이상",
      "전망"
    ],
    "sourceAnswer": "비전(→ 이상/전망)",
    "strict": true
  },
  {
    "id": "word-13c-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "비즈니스",
    "answers": [
      "사업"
    ],
    "sourceAnswer": "사업",
    "strict": true
  },
  {
    "id": "word-13c-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "비즈니스벨트",
    "answers": [
      "사업 지대"
    ],
    "sourceAnswer": "사업 지대",
    "strict": true
  },
  {
    "id": "word-13c-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "사료됨",
    "answers": [
      "생각함"
    ],
    "sourceAnswer": "생각함",
    "strict": true
  },
  {
    "id": "word-13c-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "산출 내역서",
    "answers": [
      "산출 명세서"
    ],
    "sourceAnswer": "산출 명세서",
    "strict": true
  },
  {
    "id": "word-13c-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "상기",
    "answers": [
      "위의",
      "위에 적은"
    ],
    "sourceAnswer": "위의/위에 적은",
    "strict": true
  },
  {
    "id": "word-13c-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "상이한",
    "answers": [
      "서로 다른"
    ],
    "sourceAnswer": "서로 다른",
    "strict": true
  },
  {
    "id": "word-13c-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "센타",
    "answers": [
      "센터"
    ],
    "sourceAnswer": "센터",
    "strict": true
  },
  {
    "id": "word-13c-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "소관",
    "answers": [
      "담당"
    ],
    "sourceAnswer": "담당",
    "strict": true
  },
  {
    "id": "word-13c-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "소명하고",
    "answers": [
      "밝히고"
    ],
    "sourceAnswer": "밝히고",
    "strict": true
  },
  {
    "id": "word-13c-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "소정양식",
    "answers": [
      "소정 양식",
      "규정 서식",
      "정해진 양식"
    ],
    "sourceAnswer": "소정 양식(→ 규정 서식/정해진 양식)",
    "strict": true
  },
  {
    "id": "word-13c-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "솔라시티",
    "answers": [
      "햇살 도시",
      "태양 에너지 도시"
    ],
    "sourceAnswer": "햇살 도시/태양 에너지 도시",
    "strict": true
  },
  {
    "id": "word-13c-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "송부했다고",
    "answers": [
      "보냈다고"
    ],
    "sourceAnswer": "보냈다고",
    "strict": true
  },
  {
    "id": "word-13c-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "수납한 후",
    "answers": [
      "받은 다음"
    ],
    "sourceAnswer": "받은 다음",
    "strict": true
  },
  {
    "id": "word-13c-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "수여하고자",
    "answers": [
      "주고자"
    ],
    "sourceAnswer": "주고자",
    "strict": true
  },
  {
    "id": "word-13c-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 13쪽 · 세 번째 표",
    "question": "대형 스크린을 통해",
    "answers": [
      "대형 화면을 통해"
    ],
    "sourceAnswer": "대형 화면을 통해",
    "strict": true
  },
  {
    "id": "word-14a-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "스크린도어",
    "answers": [
      "안전문"
    ],
    "sourceAnswer": "안전문",
    "strict": true
  },
  {
    "id": "word-14a-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "스포츠 클럽",
    "answers": [
      "운동 모임",
      "동호회"
    ],
    "sourceAnswer": "운동 모임/동호회",
    "strict": true
  },
  {
    "id": "word-14a-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "슬럿지",
    "answers": [
      "슬러지",
      "침전물"
    ],
    "sourceAnswer": "슬러지(→ 침전물)",
    "strict": true
  },
  {
    "id": "word-14a-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "승차권을 소지하지 아니하고",
    "answers": [
      "승차권 없이"
    ],
    "sourceAnswer": "승차권 없이",
    "strict": true
  },
  {
    "id": "word-14a-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "업데이트하고",
    "answers": [
      "갱신하고"
    ],
    "sourceAnswer": "갱신하고",
    "strict": true
  },
  {
    "id": "word-14a-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "업로드하여",
    "answers": [
      "올려"
    ],
    "sourceAnswer": "올려",
    "strict": true
  },
  {
    "id": "word-14a-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "연루되어",
    "answers": [
      "관련되어"
    ],
    "sourceAnswer": "관련되어",
    "strict": true
  },
  {
    "id": "word-14a-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "연시회",
    "answers": [
      "기술 시연회"
    ],
    "sourceAnswer": "기술 시연회",
    "strict": true
  },
  {
    "id": "word-14a-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "오니",
    "answers": [
      "오염 침전물"
    ],
    "sourceAnswer": "오염 침전물",
    "strict": true
  },
  {
    "id": "word-14a-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "요망",
    "answers": [
      "바람"
    ],
    "sourceAnswer": "바람",
    "strict": true
  },
  {
    "id": "word-14a-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "워크샵",
    "answers": [
      "워크숍",
      "공동 연수",
      "공동 수련"
    ],
    "sourceAnswer": "워크숍(→ 공동 연수, 공동 수련)",
    "strict": true
  },
  {
    "id": "word-14a-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "원스톱",
    "answers": [
      "일괄",
      "통합",
      "한자리"
    ],
    "sourceAnswer": "일괄/통합/한자리",
    "strict": true
  },
  {
    "id": "word-14a-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "웹싸이트",
    "answers": [
      "웹사이트",
      "누리집"
    ],
    "sourceAnswer": "웹사이트(→ 누리집)",
    "strict": true
  },
  {
    "id": "word-14a-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "유관기관",
    "answers": [
      "관계 기관"
    ],
    "sourceAnswer": "관계 기관",
    "strict": true
  },
  {
    "id": "word-14a-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "유비쿼터스",
    "answers": [
      "두루누리"
    ],
    "sourceAnswer": "두루누리",
    "strict": true
  },
  {
    "id": "word-14a-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "의하여",
    "answers": [
      "따라"
    ],
    "sourceAnswer": "따라",
    "strict": true
  },
  {
    "id": "word-14a-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "이메일",
    "answers": [
      "전자우편"
    ],
    "sourceAnswer": "전자우편",
    "strict": true
  },
  {
    "id": "word-14a-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "이미지 메이킹",
    "answers": [
      "이미지 만들기"
    ],
    "sourceAnswer": "이미지 만들기",
    "strict": true
  },
  {
    "id": "word-14a-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "이탈리안라이그라스",
    "answers": [
      "이탤리언 라이그라스"
    ],
    "sourceAnswer": "이탤리언 라이그라스",
    "strict": true
  },
  {
    "id": "word-14a-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "익년도",
    "answers": [
      "이듬해"
    ],
    "sourceAnswer": "이듬해",
    "strict": true
  },
  {
    "id": "word-14a-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "익일",
    "answers": [
      "다음 날",
      "이튿날"
    ],
    "sourceAnswer": "다음 날/이튿날",
    "strict": true
  },
  {
    "id": "word-14a-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "인센티브",
    "answers": [
      "특전",
      "성과급"
    ],
    "sourceAnswer": "특전/성과급",
    "strict": true
  },
  {
    "id": "word-14a-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "인프라",
    "answers": [
      "기반",
      "기반 시설",
      "기반시설",
      "기반(시설)"
    ],
    "sourceAnswer": "기반(시설)",
    "strict": true
  },
  {
    "id": "word-14a-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "일제",
    "answers": [
      "일절"
    ],
    "sourceAnswer": "일절",
    "strict": true,
    "note": "‘전혀’의 뜻으로 쓸 때"
  },
  {
    "id": "word-14a-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "일원으로",
    "answers": [
      "하나로"
    ],
    "sourceAnswer": "하나로",
    "strict": true
  },
  {
    "id": "word-14a-26",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 첫 번째 표",
    "question": "적발된 자는",
    "answers": [
      "적발된 사람은",
      "적발되면"
    ],
    "sourceAnswer": "적발된 사람은(→ 적발되면)",
    "strict": true
  },
  {
    "id": "word-14b-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "적의 조치를 취한 후",
    "answers": [
      "필요한 조치를 취한 뒤",
      "적절한 조치를 취한 뒤"
    ],
    "sourceAnswer": "(필요한/적절한) 조치를 취한 뒤",
    "strict": true
  },
  {
    "id": "word-14b-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "전년대비",
    "answers": [
      "전년 대비",
      "지난해보다"
    ],
    "sourceAnswer": "전년 대비(→ 지난해보다)",
    "strict": true
  },
  {
    "id": "word-14b-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "전년에 비해",
    "answers": [
      "지난해보다"
    ],
    "sourceAnswer": "지난해보다",
    "strict": true
  },
  {
    "id": "word-14b-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "접수",
    "answers": [
      "제출"
    ],
    "sourceAnswer": "제출",
    "strict": true,
    "note": "응시자 처지일 때"
  },
  {
    "id": "word-14b-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "정관 변경 허가를 득하지 않고",
    "answers": [
      "정관 변경 허가를 받지 않고"
    ],
    "sourceAnswer": "정관 변경 허가를 받지 않고",
    "strict": true
  },
  {
    "id": "word-14b-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "정보 공개 코너",
    "answers": [
      "정보 공개란"
    ],
    "sourceAnswer": "정보 공개란",
    "strict": true
  },
  {
    "id": "word-14b-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "정비 내역",
    "answers": [
      "정비 내용"
    ],
    "sourceAnswer": "정비 내용",
    "strict": true
  },
  {
    "id": "word-14b-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "정주 여건",
    "answers": [
      "정착 여건"
    ],
    "sourceAnswer": "정착 여건",
    "strict": true
  },
  {
    "id": "word-14b-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "정차한 후",
    "answers": [
      "멈춘 뒤"
    ],
    "sourceAnswer": "멈춘 뒤",
    "strict": true
  },
  {
    "id": "word-14b-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "제고하고",
    "answers": [
      "높이고"
    ],
    "sourceAnswer": "높이고",
    "strict": true
  },
  {
    "id": "word-14b-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "제로 플랜",
    "answers": [
      "없애기 계획"
    ],
    "sourceAnswer": "없애기 계획",
    "strict": true
  },
  {
    "id": "word-14b-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "조사료",
    "answers": [
      "거친 사료"
    ],
    "sourceAnswer": "거친 사료",
    "strict": true
  },
  {
    "id": "word-14b-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "조속히",
    "answers": [
      "즉시",
      "빨리"
    ],
    "sourceAnswer": "즉시/빨리",
    "strict": true
  },
  {
    "id": "word-14b-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "週단위로",
    "answers": [
      "주 단위로"
    ],
    "sourceAnswer": "주 단위로",
    "strict": true
  },
  {
    "id": "word-14b-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "지금 제출하시기 바람.",
    "answers": [
      "속히 제출하시기 바람."
    ],
    "sourceAnswer": "속히 제출하시기 바람.",
    "strict": true
  },
  {
    "id": "word-14b-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "지체 없이",
    "answers": [
      "바로",
      "곧바로"
    ],
    "sourceAnswer": "바로/곧바로",
    "strict": true
  },
  {
    "id": "word-14b-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "직접 수령",
    "answers": [
      "직접 받음"
    ],
    "sourceAnswer": "직접 받음",
    "strict": true
  },
  {
    "id": "word-14b-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "차월",
    "answers": [
      "다음 달"
    ],
    "sourceAnswer": "다음 달",
    "strict": true
  },
  {
    "id": "word-14b-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "차차월",
    "answers": [
      "다다음 달"
    ],
    "sourceAnswer": "다다음 달",
    "strict": true
  },
  {
    "id": "word-14b-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "다양한 채널을 이용해",
    "answers": [
      "다양한 경로를 이용해",
      "다양한 창구를 이용해"
    ],
    "sourceAnswer": "다양한 경로를 이용해/다양한 창구를 이용해",
    "strict": true
  },
  {
    "id": "word-14b-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "처리 방안 부재",
    "answers": [
      "처리가 어려움",
      "처리 방안이 없음"
    ],
    "sourceAnswer": "처리가 어려움/처리 방안이 없음",
    "strict": true
  },
  {
    "id": "word-14b-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "체크리스트",
    "answers": [
      "점검표"
    ],
    "sourceAnswer": "점검표",
    "strict": true
  },
  {
    "id": "word-14b-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "출두",
    "answers": [
      "출석"
    ],
    "sourceAnswer": "출석",
    "strict": true
  },
  {
    "id": "word-14b-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "취업 컨설팅",
    "answers": [
      "취업 상담"
    ],
    "sourceAnswer": "취업 상담",
    "strict": true
  },
  {
    "id": "word-14b-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 두 번째 표",
    "question": "컨트롤 타워",
    "answers": [
      "통제탑",
      "지휘 본부",
      "사령탑"
    ],
    "sourceAnswer": "통제탑, 지휘 본부, 사령탑",
    "strict": true
  },
  {
    "id": "word-14c-01",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "클러스터",
    "answers": [
      "연합",
      "지구"
    ],
    "sourceAnswer": "연합/지구",
    "strict": true
  },
  {
    "id": "word-14c-02",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "타 학교",
    "answers": [
      "다른 학교"
    ],
    "sourceAnswer": "다른 학교",
    "strict": true
  },
  {
    "id": "word-14c-03",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "토크 콘서트",
    "answers": [
      "이야기 공연"
    ],
    "sourceAnswer": "이야기 공연",
    "strict": true
  },
  {
    "id": "word-14c-04",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "홍보하여",
    "answers": [
      "알려"
    ],
    "sourceAnswer": "알려",
    "strict": true
  },
  {
    "id": "word-14c-05",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "통합시스템 구축·운영",
    "answers": [
      "통합 체제 구축·운용"
    ],
    "sourceAnswer": "통합 체제 구축·운용",
    "strict": true
  },
  {
    "id": "word-14c-06",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "통화스왑",
    "answers": [
      "통화스와프",
      "통화 교환"
    ],
    "sourceAnswer": "통화스와프(→ 통화 교환)",
    "strict": true
  },
  {
    "id": "word-14c-07",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "팀웍",
    "answers": [
      "팀워크",
      "결속(력)",
      "결속",
      "결속력"
    ],
    "sourceAnswer": "팀워크(→ 결속(력))",
    "strict": true
  },
  {
    "id": "word-14c-08",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "파이오니어",
    "answers": [
      "파이어니어",
      "개척자",
      "선구자"
    ],
    "sourceAnswer": "파이어니어(→ 개척자/선구자)",
    "strict": true
  },
  {
    "id": "word-14c-09",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "파일럿 테스트",
    "answers": [
      "예비 시험"
    ],
    "sourceAnswer": "예비 시험",
    "strict": true
  },
  {
    "id": "word-14c-10",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "팝업(창)",
    "answers": [
      "알림창"
    ],
    "sourceAnswer": "알림창",
    "strict": true
  },
  {
    "id": "word-14c-11",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "패러다임",
    "answers": [
      "틀",
      "체계",
      "방식"
    ],
    "sourceAnswer": "틀/체계/방식",
    "strict": true
  },
  {
    "id": "word-14c-12",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "포탈",
    "answers": [
      "포털"
    ],
    "sourceAnswer": "포털",
    "strict": true
  },
  {
    "id": "word-14c-13",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "표본",
    "answers": [
      "조사 대상자"
    ],
    "sourceAnswer": "조사 대상자",
    "strict": true
  },
  {
    "id": "word-14c-14",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "표제 회의",
    "answers": [
      "이번 회의"
    ],
    "sourceAnswer": "이번 회의",
    "strict": true
  },
  {
    "id": "word-14c-15",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "프로젝트",
    "answers": [
      "과제",
      "연구 과제",
      "(연구) 과제",
      "사업"
    ],
    "sourceAnswer": "(연구) 과제/사업",
    "strict": true
  },
  {
    "id": "word-14c-16",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "플랜",
    "answers": [
      "계획"
    ],
    "sourceAnswer": "계획",
    "strict": true
  },
  {
    "id": "word-14c-17",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "병역 의무를 필한 자",
    "answers": [
      "병역 의무를 마친 사람"
    ],
    "sourceAnswer": "병역 의무를 마친 사람",
    "strict": true
  },
  {
    "id": "word-14c-18",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "필히",
    "answers": [
      "반드시"
    ],
    "sourceAnswer": "반드시",
    "strict": true
  },
  {
    "id": "word-14c-19",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "하절기 한시적으로",
    "answers": [
      "여름철에 한시적으로"
    ],
    "sourceAnswer": "여름철에 한시적으로",
    "strict": true
  },
  {
    "id": "word-14c-20",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "학습시스템",
    "answers": [
      "학습 체제"
    ],
    "sourceAnswer": "학습 체제",
    "strict": true
  },
  {
    "id": "word-14c-21",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "해소하여",
    "answers": [
      "없애며"
    ],
    "sourceAnswer": "없애며",
    "strict": true
  },
  {
    "id": "word-14c-22",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "해커톤",
    "answers": [
      "마라톤 토론회",
      "끝장 토론"
    ],
    "sourceAnswer": "마라톤 토론회/끝장 토론",
    "strict": true
  },
  {
    "id": "word-14c-23",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "향후",
    "answers": [
      "앞으로"
    ],
    "sourceAnswer": "앞으로",
    "strict": true
  },
  {
    "id": "word-14c-24",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "혁파",
    "answers": [
      "없앰"
    ],
    "sourceAnswer": "없앰",
    "strict": true
  },
  {
    "id": "word-14c-25",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "혼파",
    "answers": [
      "섞어 심기",
      "섞어 뿌림"
    ],
    "sourceAnswer": "섞어 심기/섞어 뿌림",
    "strict": true
  },
  {
    "id": "word-14c-26",
    "category": "낱말",
    "group": "낱말(표기 포함) · 14쪽 · 세 번째 표",
    "question": "홈페이지",
    "answers": [
      "누리집"
    ],
    "sourceAnswer": "누리집",
    "strict": true
  }
];
QUESTIONS.push(...WORD_QUESTIONS);
