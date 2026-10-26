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

// 사용자 제공 2~4쪽 어법 오류 수정 문장. 원문의 표현과 비고를 보존합니다.
const GRAMMAR_QUESTIONS = [
  {
    "id": "grammar-subject-01",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "문제는 주행 거리 증가를 대가로 화재·폭발의 위험성이 증가해 안전성이 떨어진다는 단점이 존재했다.",
    "answers": [
      "문제는 주행 거리 증가를 대가로 화재·폭발의 위험성이 증가해 안전성이 떨어진다는 단점이 존재한다는 점이다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-02",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "유의할 점은 교육 급여 수급 학생이라도 지원금을 신청하지 않으면 지원금을 받지 못하므로 반드시 신청해야 한다.",
    "answers": [
      "유의할 점은 교육 급여 수급 학생이라도 지원금을 신청하지 않으면 지원금을 받지 못하므로 반드시 신청해야 한다는 점이다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-03",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "우리 시가 그동안의 침체에서 벗어나 사통팔달의 팔색조 같은 매력있는 도시로 키워 나가겠다.",
    "answers": [
      "우리 시를 그동안의 침체에서 벗어나 사통팔달의 팔색조 같은 매력 있는 도시로 키워 나가겠다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-04",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "다양한 계층의 독서 활동과 정보 접근에 대한 기회가 확대하고 있다.",
    "answers": [
      "다양한 계층의 독서 활동과 정보 접근에 대한 기회를 확대하고 있다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-05",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "이번 봉사 활동은 OO회 12명의 회원들이 장애가 있거나 거동이 불편한 어르신과 노인 부부 등 생활에 어려움이 있는 7가구를 대상으로 방문 손잡이와 낡은 방충망 교체, 노후화된 전선 정비 작업을 실시했다.",
    "answers": [
      "이번 봉사 활동에서는 OO회 12명의 회원들이 장애가 있거나 거동이 불편한 어르신과 노인 부부 등 생활에 어려움이 있는 7가구를 대상으로 방문 손잡이와 낡은 방충망 교체, 노후화된 전선 정비 작업을 실시했다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-06",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "축하 공연은 OO군 출신 풍물 전공자로 구성된 풍물굿패 OO, 전국국악경연대회 명창부 대통령상을 수상한 천OO 명창, OO군 홍보대사로 활약하고 있는 가수 OO와 가수 OO가 출연한다.",
    "answers": [
      "축하 공연에는 OO군 출신 풍물 전공자로 구성된 풍물굿패 OO, 전국국악경연대회 명창부 대통령상을 수상한 천OO 명창, OO군 홍보대사로 활약하고 있는 가수 OO와 가수 OO가 출연한다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-07",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "이번 자진신고 기간 운영은 아직 동물등록을 하지 않았거나 소유자의 변경사항에 대해 변경신고를 하지 않은 시민에게 과태료 부과를 면제해 소유자가 자발적으로 동물등록 또는 변경신고를 하도록 하고자 시행한다.",
    "answers": [
      "이번 자진신고는 아직 동물등록을 하지 않았거나 소유자의 변경사항에 대해 변경신고를 하지 않은 시민에게 과태료 부과를 면제해 소유자가 자발적으로 동물등록 또는 변경신고를 하도록 하고자 시행한다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-08",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "주최 기관 발표자료는 OO연구원 OO본부 백OO 부연구위원이 '항공부문 수요회복(단기) 전망', OO협회 성OO 실장이 '항공산업 경쟁력 제고를 위한 항공수요 회복 전략'에 관한 주제로 발표를 진행하였다.",
    "answers": [
      "주최 기관 발표는 OO연구원 OO본부 백OO 부연구위원이 '항공부문 수요회복(단기) 전망', OO협회 성OO 실장이 '항공산업 경쟁력 제고를 위한 항공수요 회복 전략'에 관한 주제로 진행하였다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-09",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "이번 여름 특강은 본관, OO분관, OO분관에서 '방 안을 가득 채우는 여름 라탄 클래스' 등 13개 강좌를 운영할 예정이다.",
    "answers": [
      "이번 여름 특강은 본관, OO분관, OO분관에서 '방 안을 가득 채우는 여름 라탄 클래스' 등 13개 강좌가 운영될 예정이다."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-10",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "OO도 내 어린이들이 인공 지능과 VR 등 4차 산업혁명 기술 체험 기회를 제공.",
    "answers": [
      "OO도 내 어린이들에게 인공 지능과 VR 등 4차 산업혁명 기술을 체험할 수 있는 기회를 제공함."
    ],
    "strict": true
  },
  {
    "id": "grammar-subject-11",
    "category": "어법·어문 규범",
    "group": "주어와 서술어의 호응 오류 · 2쪽",
    "question": "기존 화천대교는 지난 1985년 국방부가 군사작전과 병력수송, 보급로 확보를 위해 건설한 교량으로, 38년의 세월이 거치며 매우 노후한 상황이었다.",
    "answers": [
      "기존 화천대교는 지난 1985년 국방부가 군사작전과 병력수송, 보급로 확보를 위해 건설한 교량으로, 38년의 세월을 거치며 매우 노후한 상황이었다."
    ],
    "strict": true
  },
  {
    "id": "grammar-object-01",
    "category": "어법·어문 규범",
    "group": "목적어와 서술어의 호응 오류 · 3쪽 상단",
    "question": "OO군은 일자리 창출 및 안전한 통학로 확보와 어린이교통사고 제로화를 위한 초등학교 등하굣길 교통안전지킴이 모집을 다음과 같이 모집합니다.",
    "answers": [
      "OO군은 일자리 창출 및 안전한 통학로 확보와 어린이 교통사고 제로화를 위한 초등학교 등하굣길 교통안전지킴이를 다음과 같이 모집합니다."
    ],
    "strict": true
  },
  {
    "id": "grammar-object-02",
    "category": "어법·어문 규범",
    "group": "목적어와 서술어의 호응 오류 · 3쪽 상단",
    "question": "전년 대비 사업비를 올해 사업비를 120% 증액한 바 있다.",
    "answers": [
      "올해 사업비를 전년 대비 120% 증액한 바 있다."
    ],
    "strict": true
  },
  {
    "id": "grammar-object-03",
    "category": "어법·어문 규범",
    "group": "목적어와 서술어의 호응 오류 · 3쪽 상단",
    "question": "앞으로 방역 인프라를 확충에 최선을 다하겠다.",
    "answers": [
      "앞으로 방역 인프라를 확충하는 데에 최선을 다하겠다."
    ],
    "strict": true
  },
  {
    "id": "grammar-object-04",
    "category": "어법·어문 규범",
    "group": "목적어와 서술어의 호응 오류 · 3쪽 상단",
    "question": "시사회는 총 3회 시사타임을 운영하여 회차별로 50명을 선착순으로 '약고추장 산나물비빔밥'을 선보인다.",
    "answers": [
      "시사회는 총 3회 시사타임을 운영하여 회차별로 50명에게 선착순으로 '약고추장 산나물비빔밥'을 선보인다."
    ],
    "strict": true
  },
  {
    "id": "grammar-object-05",
    "category": "어법·어문 규범",
    "group": "목적어와 서술어의 호응 오류 · 3쪽 상단",
    "question": "범시민적 역량을 결집을 위한 퍼포먼스를 진행했다.",
    "answers": [
      "범시민적 역량을 결집하기 위한 퍼포먼스를 진행했다."
    ],
    "strict": true
  },
  {
    "id": "grammar-modifier-01",
    "category": "어법·어문 규범",
    "group": "수식어와 피수식어의 호응 오류 · 3쪽 하단",
    "question": "올해로 3년 차를 맞이하는 '한-OO 파트너십 세미나'는 우리 측이 제19차 OO 각료회의(2019년 11월, 아부다비) 계기 제안한 1.5트랙 협의체로, 우리나라와 OO 간 상호 이해를 높이고 구체적인 협력 분야를 발굴하기 위한 정책·학술 교류 플랫폼입니다.",
    "answers": [
      "올해로 3년 차를 맞이하는 '한-OO 파트너십 세미나'는 우리 측이 제19차 OO 각료회의(2019년 11월, 아부다비)를 계기로 제안한 1.5트랙 협의체로, 우리나라와 OO 간 상호 이해를 높이고 구체적인 협력 분야를 발굴하기 위한 정책·학술 교류 플랫폼입니다."
    ],
    "strict": true,
    "note": "부사어와 서술어 간 호응 오류"
  },
  {
    "id": "grammar-modifier-02",
    "category": "어법·어문 규범",
    "group": "수식어와 피수식어의 호응 오류 · 3쪽 하단",
    "question": "이날 캠프에는 가족 소통 및 이해 교육을 시작으로 온 가족 캠핑장 놀이, 바비큐 체험, 아버지 모임을 진행해 가족 간 상호이해와 친밀감을 증진시킬 수 있는 계기를 마련했다.",
    "answers": [
      "이날 캠프에서는 가족 소통 및 이해 교육을 시작으로 온 가족 캠핑장 놀이, 바비큐 체험, 아버지 모임을 진행해 가족 간 상호이해와 친밀감을 증진시킬 수 있는 계기를 마련했다."
    ],
    "strict": true,
    "note": "부사어와 서술어 간 호응 오류"
  },
  {
    "id": "grammar-modifier-03",
    "category": "어법·어문 규범",
    "group": "수식어와 피수식어의 호응 오류 · 3쪽 하단",
    "question": "직원들의 이해도를 높이기 위하여 이해충돌 방지법의 제정 의의와 보상에 대한 사례로 특강을 진행했다.",
    "answers": [
      "직원들의 이해도를 높이기 위하여 이해충돌 방지법의 제정 의의와 보상 사례를 주요 내용으로 특강을 진행했다."
    ],
    "strict": true,
    "note": "부사어와 서술어 간 호응 오류"
  },
  {
    "id": "grammar-modifier-04",
    "category": "어법·어문 규범",
    "group": "수식어와 피수식어의 호응 오류 · 3쪽 하단",
    "question": "따뜻한 사회상을 보여 주는 인물들의 이야기로 감동인 소설이다.",
    "answers": [
      "따뜻한 사회상을 보여 주는 인물들의 이야기로 감동을 주는 소설이다."
    ],
    "strict": true,
    "note": "관형어와 피수식어 간 호응 오류"
  },
  {
    "id": "grammar-connection-01",
    "category": "어법·어문 규범",
    "group": "접속 오류 · 4쪽",
    "question": "OO항의 수출 감소는 단일품목으로는 OO항의 수출 최대 효자 품목인 전선류 수출이 전년 동기 대비 68% 감소한 데 따른 것으로 지난해 전선류의 수출 실적이 역대 최고치를 기록했고 전선류 수출이 프로젝트의 성격에 따라 부정기적으로 이루어진다는 점을 고려하면 OO항의 연간 수출 실적에 대한 기대는 여전히 밝은 편이다.",
    "answers": [
      "OO항의 수출 감소는 단일품목으로는 OO항의 수출 최대 효자 품목인 전선류 수출이 전년 동기 대비 68% 감소한 데 따른 것이지만 지난해 전선류의 수출 실적이 역대 최고치를 기록했고 전선류 수출이 프로젝트의 성격에 따라 부정기적으로 이루어진다는 점을 고려하면 OO항의 연간 수출 실적에 대한 기대는 여전히 밝은 편이다."
    ],
    "strict": true,
    "note": "절과 절의 내용이 논리적으로 연결되지 않는 경우"
  },
  {
    "id": "grammar-connection-02",
    "category": "어법·어문 규범",
    "group": "접속 오류 · 4쪽",
    "question": "이 도서는 주인공 스스로 고민을 해결하는 과정을 그려낸 그림책으로 시간이 흐르지만 여전히 옛이야기가 주는 힘과 재미를 함께 느낄 수 있다.",
    "answers": [
      "이 도서는 주인공 스스로 고민을 해결하는 과정을 그려낸 그림책으로 시간이 흘러도 여전히 옛이야기가 주는 힘과 재미를 함께 느낄 수 있다."
    ],
    "strict": true,
    "note": "절과 절의 내용이 논리적으로 연결되지 않는 경우"
  },
  {
    "id": "grammar-connection-03",
    "category": "어법·어문 규범",
    "group": "접속 오류 · 4쪽",
    "question": "OO북도농업기술원은 지난 10일부터 14일까지 과수 선진국인 루마니아, 튀르키예 해외 현지에서 OO의 주요 농산물인 포도 신품종 육성 및 건조감의 수출 시장 개척을 위한 연구과제 협약 체결과 중장기 협력 방안을 논의했다고 밝혔다.",
    "answers": [
      "OO북도농업기술원은 지난 10일부터 14일까지 과수 선진국인 루마니아, 튀르키예 해외 현지에서 OO의 주요 농산물인 포도 신품종 육성 및 건조감의 수출 시장 개척을 위한 연구과제 협약을 체결하고 중장기 협력 방안을 논의했다고 밝혔다."
    ],
    "strict": true,
    "note": "대등 접속된 성분들의 종류가 다른 경우"
  },
  {
    "id": "grammar-connection-04",
    "category": "어법·어문 규범",
    "group": "접속 오류 · 4쪽",
    "question": "이러한 상황이 계속되면 수정 불량과 알이 여무는 비율이 줄어드는 피해가 우려된다.",
    "answers": [
      "이러한 상황이 계속되면 수정이 불량한 사례가 늘어나고 알이 여무는 비율이 줄어드는 피해가 우려된다."
    ],
    "strict": true,
    "note": "대등 접속된 성분들의 종류가 다른 경우"
  }
];
QUESTIONS.push(...GRAMMAR_QUESTIONS);

// 사용자 제공 5~7쪽 어법 오류. 중의성의 복수 수정안은 각각 정답으로 인정합니다.
const MORE_GRAMMAR_QUESTIONS = [
  {
    "id": "grammar-omission-01",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "아이디어의 발상과 실현, 마케팅 전략 등의 기본 이론 교육과 전자상거래 사업에 유용한 실무 지식 및 경험을 제공하는 교육으로 구성되어 있다.",
    "answers": [
      "이 프로그램은 아이디어의 발상과 실현, 마케팅 전략 등의 기본 이론교육과 전자상거래 사업에 유용한 실무 지식 및 경험을 제공하는 교육으로 구성되어 있다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-02",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "자세한 내용은 OO군 홈페이지 알림사항 또는 OO군 청소년안전망(☎050-700-2761~2)으로 문의하면 된다.",
    "answers": [
      "자세한 내용은 OO군 홈페이지 알림사항을 참조하거나 OO군청소년안전망(☎050-700-2761~2)으로 문의하면 된다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-03",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "또한 프로그램 전후에 혈압, 혈당, 체성분 검사 등 건강 측정을 통해 개별 건강상태 및 프로그램 효과 파악할 것이다.",
    "answers": [
      "또한 프로그램 전후에 혈압, 혈당, 체성분 검사 등 건강 측정을 통해 개별 건강상태 및 프로그램 효과를 파악할 것이다."
    ],
    "strict": true,
    "note": "조사, 어휘 생략 등"
  },
  {
    "id": "grammar-omission-04",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "금번 집수리 봉사 이루어진 주택은 OO군 OOO면에 거주하는 뇌병변 장애인 가구가 거주하는 곳으로 거동이 불편함에도 주택의 출입문이 높아 이동에 어려움이 있었고, 집 내부 또한 곰팡이가 심해 거주환경이 매우 좋지 않은 상황이었다.",
    "answers": [
      "금번 집수리 봉사가 이루어진 주택은 OO군 OOO면에 거주하는 뇌병변 장애인 가구가 거주하는 곳으로 거동이 불편함에도 주택의 출입문이 높아 이동에 어려움이 있었고, 집 내부 또한 곰팡이가 심해 거주환경이 매우 좋지 않은 상황이었다."
    ],
    "strict": true,
    "note": "조사, 어휘 생략 등"
  },
  {
    "id": "grammar-omission-05",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "장차 도래할 수소경제 시대에 각 기관의 안전 업무와 관련된 감사의 역할과 방향에 대해 고찰하는 시간을 가졌다.",
    "answers": [
      "장차 도래할 수소경제 시대에 필요할 각 기관의 안전 업무와 관련된 감사의 역할과 방향에 대해 고찰하는 시간을 가졌다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-06",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "7월 20일에는 OO연구소 이OO 이사가 '지구의 마지막 경고'를 9월 27일에는 OO문화센터에서 김OO 작곡가의 '문화행사, 지역예술가와의 만남'이 진행된다.",
    "answers": [
      "7월 20일에는 OO연구소 이OO 이사가 '지구의 마지막 경고'라는 제목으로 강의하고, 9월 27일에는 OO문화센터에서 김OO 작곡가의 '문화행사, 지역예술가와의 만남'을 진행한다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-07",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "세미나 2부에서는 1부의 기조 강연을 바탕으로 전문가와 청소년 그리고 학부모 대표가 인터넷·게임 중독 예방을 위해 OO시와 OO센터의 역할에 대해 토론하고 정책을 제안한다.",
    "answers": [
      "세미나 2부에서는 1부의 기조 강연을 바탕으로 전문가와 청소년 그리고 학부모 대표가 청소년의 인터넷·게임 중독 예방을 위해 OO시와 OO센터의 역할에 대해 토론하고 정책을 제안한다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-08",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "드론 캠프는 드론 체험이 어려운 도서 지역 어린이에게 드론 조종·안전 교육과 함께 직접 드론을 날릴 수 있는 체험형 교육이다.",
    "answers": [
      "드론 캠프는 드론 체험이 어려운 도서 지역 어린이에게 드론 조종·안전 교육과 함께 직접 드론을 날릴 수 있는 기회를 제공하는 체험형 교육이다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-omission-09",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "뿐만 아니라 OO원은 코로나19 장기화로 가로막힌 국내외 판로 개척을 위한 맞춤형 지원프로그램 확대, 해양수산 중소기업 대상 경영안정자금 대출지원 등 실질적인 지원책을 강구하여 실현한 바 있다.",
    "answers": [
      "그뿐만 아니라 OO원은 코로나19 장기화로 가로막힌 국내외 판로 개척을 위한 맞춤형 지원프로그램 확대, 해양수산 중소기업 대상 경영안정자금 대출지원 등 실질적인 지원책을 강구하여 실현한 바 있다."
    ],
    "strict": true,
    "note": "조사, 어휘 생략 등"
  },
  {
    "id": "grammar-omission-10",
    "category": "어법·어문 규범",
    "group": "생략 오류 · 5쪽",
    "question": "더불어, 나무 장난감은 미세플라스틱 등의 건강 문제로부터 자유롭다는 장점도 있다고 이번 열린 강좌의 포부를 밝혔다.",
    "answers": [
      "이와 더불어, 나무 장난감은 미세플라스틱 등의 건강 문제로부터 자유롭다는 장점도 있다고 이번 열린 강좌의 포부를 밝혔다."
    ],
    "strict": true,
    "note": "필수 성분 생략"
  },
  {
    "id": "grammar-vocabulary-01",
    "category": "어법·어문 규범",
    "group": "어휘 사용 오류 · 6쪽 상단",
    "question": "신청 서류 작성·구비 후 이메일 접수",
    "answers": [
      "신청 서류 작성·구비 후 이메일로 제출"
    ],
    "strict": true
  },
  {
    "id": "grammar-vocabulary-02",
    "category": "어법·어문 규범",
    "group": "어휘 사용 오류 · 6쪽 상단",
    "question": "OO도에서는 추후 시설원예 농가들을 대상으로 난방비 절감을 위해 필요 장비 및 시설에 대한 수요 조사를 받아 지원할 예정이다.",
    "answers": [
      "OO도에서는 추후 시설원예 농가들을 대상으로 난방비 절감을 위해 필요 장비 및 시설에 대한 수요 조사를 실시하여 지원할 예정이다."
    ],
    "strict": true
  },
  {
    "id": "grammar-vocabulary-03",
    "category": "어법·어문 규범",
    "group": "어휘 사용 오류 · 6쪽 상단",
    "question": "노후화된 가로등·보안등은 야간 안전사고와 통행 불편에 큰 위험이 있어 이를 해소하기 위해 LED등기구 교체 사업을 실시하였다.",
    "answers": [
      "노후화된 가로등·보안등은 야간 안전사고와 통행에 큰 위험이 있어 이를 해소하기 위해 LED등기구 교체 사업을 실시하였다."
    ],
    "strict": true
  },
  {
    "id": "grammar-ambiguity-01",
    "category": "어법·어문 규범",
    "group": "중의성 오류 · 6쪽 중단",
    "question": "시장은 건설업계 관계자들과 시민의 안전에 관하여 논의하였다.",
    "answers": [
      "시장은 건설업계 관계자들을 만나 시민의 안전에 관하여 논의하였다.",
      "시장은 건설업계 관계자들을 비롯한 시민의 안전에 관하여 논의하였다."
    ],
    "strict": true,
    "sourceAnswer": "① 시장은 건설업계 관계자들을 만나 시민의 안전에 관하여 논의하였다. ② 시장은 건설업계 관계자들을 비롯한 시민의 안전에 관하여 논의하였다."
  },
  {
    "id": "grammar-ambiguity-02",
    "category": "어법·어문 규범",
    "group": "중의성 오류 · 6쪽 중단",
    "question": "유아 해설 프로그램 운영",
    "answers": [
      "유아를 위한 해설 프로그램 운영",
      "유아(를) 위한 해설 프로그램 운영"
    ],
    "strict": true,
    "sourceAnswer": "유아(를) 위한 해설 프로그램 운영"
  },
  {
    "id": "grammar-ambiguity-03",
    "category": "어법·어문 규범",
    "group": "중의성 오류 · 6쪽 중단",
    "question": "박물관은 면적 3,000㎡의 작품 보관을 위한 장소를 마련하였다.",
    "answers": [
      "박물관은 면적 3,000㎡인 작품을 보관하기 위한 장소를 마련하였다.",
      "박물관은 작품을 보관하기 위해 면적 3,000㎡의 장소를 마련하였다."
    ],
    "strict": true,
    "sourceAnswer": "① 박물관은 면적 3,000㎡인 작품을 보관하기 위한 장소를 마련하였다. ② 박물관은 작품을 보관하기 위해 면적 3,000㎡의 장소를 마련하였다."
  },
  {
    "id": "grammar-ending-01",
    "category": "어법·어문 규범",
    "group": "어미 오류 · 6쪽 하단",
    "question": "신청 자격은 2020년 12월 31일부터 신청일 현재까지 OO도 내에 주민등록이 되어 있는 개인 또는 농어업경영체로 등록된 농가이다.",
    "answers": [
      "신청 자격은 2020년 12월 31일부터 신청일 현재까지 OO도 내에 주민등록이 되어 있는 개인 또는 농어업경영체로 등록된 농가에 주어진다."
    ],
    "strict": true
  },
  {
    "id": "grammar-ending-02",
    "category": "어법·어문 규범",
    "group": "어미 오류 · 6쪽 하단",
    "question": "OO시가 의료시설 주변의 보행 안전을 강화해 초일류 글로벌 도시에 걸맞는 선도적 보행 환경을 조성한다.",
    "answers": [
      "OO시가 의료시설 주변의 보행 안전을 강화해 초일류 글로벌 도시에 걸맞은 선도적 보행 환경을 조성한다."
    ],
    "strict": true
  },
  {
    "id": "grammar-ending-03",
    "category": "어법·어문 규범",
    "group": "어미 오류 · 6쪽 하단",
    "question": "영국의 유럽연합 탈퇴(브렉시트)에 대비하는 영국과의 사업 협력을 확대하고",
    "answers": [
      "영국의 유럽연합 탈퇴(브렉시트)에 대비하여 영국과의 사업 협력을 확대하고"
    ],
    "strict": true
  },
  {
    "id": "grammar-particle-01",
    "category": "어법·어문 규범",
    "group": "조사 오류 · 7쪽 상단",
    "question": "배움의 의지를 가지고 노력하시는 학습자분들에 존경을 표하고",
    "answers": [
      "배움의 의지를 가지고 노력하시는 학습자분들에게 존경을 표하고"
    ],
    "strict": true
  },
  {
    "id": "grammar-particle-02",
    "category": "어법·어문 규범",
    "group": "조사 오류 · 7쪽 상단",
    "question": "청소년 부모로써",
    "answers": [
      "청소년 부모로서"
    ],
    "strict": true
  },
  {
    "id": "grammar-particle-03",
    "category": "어법·어문 규범",
    "group": "조사 오류 · 7쪽 상단",
    "question": "아울러, 군은 기업의 애로사항을 접수함을 물론",
    "answers": [
      "아울러, 군은 기업의 애로사항을 접수함은 물론"
    ],
    "strict": true
  },
  {
    "id": "grammar-order-01",
    "category": "어법·어문 규범",
    "group": "어순 오류 · 7쪽 중단",
    "question": "OO군 농업기술센터 소장 정O란은 새 기술 정보네트워크 구축과 협동 경영 등을 통해 고부가가치 창출 능력을 높여 소득증대에 기여하고자 매년 실시하고 있는 2023년에도 품목별 전문 농업기술교육을 오는 26일부터 6월 21일까지 실시한다고 말했다.",
    "answers": [
      "OO군 농업기술센터 소장 정O란은 새 기술 정보네트워크 구축과 협동 경영 등을 통해 고부가가치 창출 능력을 높여 소득증대에 기여하고자 매년 실시하고 있는 품목별 전문 농업기술교육을 오는 2023년에도 26일부터 6월 21일까지 실시한다고 말했다."
    ],
    "strict": true
  }
];
QUESTIONS.push(...MORE_GRAMMAR_QUESTIONS);

// 사용자 제공 어문 규범 및 준말. 동일한 수정 전후와 별도 참고 설명은 학습노트에만 저장합니다.
const LANGUAGE_RULE_QUESTIONS = [
  {
    "id": "language-initial-01",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "남여",
    "answers": [
      "남녀"
    ],
    "strict": true
  },
  {
    "id": "language-initial-02",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "년간",
    "answers": [
      "연간"
    ],
    "strict": true
  },
  {
    "id": "language-initial-03",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "실천률",
    "answers": [
      "실천율"
    ],
    "strict": true
  },
  {
    "id": "language-initial-04",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "자부담율",
    "answers": [
      "자부담률"
    ],
    "strict": true
  },
  {
    "id": "language-initial-05",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "증감율",
    "answers": [
      "증감률"
    ],
    "strict": true
  },
  {
    "id": "language-initial-06",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "집행율",
    "answers": [
      "집행률"
    ],
    "strict": true
  },
  {
    "id": "language-initial-07",
    "category": "어법·어문 규범",
    "group": "두음법칙을 지키지 않은 경우 · 7~8쪽",
    "question": "회계 년도",
    "answers": [
      "회계 연도"
    ],
    "strict": true
  },
  {
    "id": "language-sai-01",
    "category": "어법·어문 규범",
    "group": "사이시옷 원칙을 지키지 않은 경우 · 7~8쪽",
    "question": "갈비집",
    "answers": [
      "갈빗집"
    ],
    "strict": true
  },
  {
    "id": "language-sai-02",
    "category": "어법·어문 규범",
    "group": "사이시옷 원칙을 지키지 않은 경우 · 7~8쪽",
    "question": "우유값",
    "answers": [
      "우윳값"
    ],
    "strict": true
  },
  {
    "id": "language-sai-03",
    "category": "어법·어문 규범",
    "group": "사이시옷 원칙을 지키지 않은 경우 · 7~8쪽",
    "question": "최소값",
    "answers": [
      "최솟값"
    ],
    "strict": true
  },
  {
    "id": "language-sai-04",
    "category": "어법·어문 규범",
    "group": "사이시옷 원칙을 지키지 않은 경우 · 7~8쪽",
    "question": "둘쨋날",
    "answers": [
      "둘째 날"
    ],
    "strict": true
  },
  {
    "id": "language-sai-05",
    "category": "어법·어문 규범",
    "group": "사이시옷 원칙을 지키지 않은 경우 · 7~8쪽",
    "question": "백짓장",
    "answers": [
      "백지장"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-01",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "'음성 자동응답시스템(ARS)'와",
    "answers": [
      "'음성 자동응답시스템(ARS)'과"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-02",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "'지속가능발전 기본법 시행(22. 7. 5.)'와",
    "answers": [
      "'지속가능발전 기본법 시행(22. 7. 5.)'과"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-03",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "계약담당자(OOO 전임)으로",
    "answers": [
      "계약담당자(OOO 전임)로"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-04",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "꾸러미 417박스(약 1,000만 원)을",
    "answers": [
      "꾸러미 417박스(약 1,000만 원)를"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-05",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "이메일(OOOO@OOOO)를",
    "answers": [
      "이메일(OOOO@OOOO)을"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-06",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "전담팀(TF)를",
    "answers": [
      "전담팀(TF)을"
    ],
    "strict": true
  },
  {
    "id": "language-bracket-07",
    "category": "어법·어문 규범",
    "group": "괄호 뒤 조사를 잘못 사용한 경우 · 7~8쪽",
    "question": "학생 참여 정원(5개소)로",
    "answers": [
      "학생 참여 정원(5개소)으로"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-01",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "공·사립",
    "answers": [
      "공사립"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-02",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "국내·외",
    "answers": [
      "국내외"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-03",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "군·경",
    "answers": [
      "군경"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-04",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "노·사",
    "answers": [
      "노사"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-05",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "민·관",
    "answers": [
      "민관"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-06",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "민-관",
    "answers": [
      "민관"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-07",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "상·중·하",
    "answers": [
      "상중하"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-08",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "시·공간",
    "answers": [
      "시공간"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-09",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "오·폐수",
    "answers": [
      "오폐수"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-10",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "유·무선",
    "answers": [
      "유무선"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-11",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "융·복합",
    "answers": [
      "융복합"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-12",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "인·허가",
    "answers": [
      "인허가"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-13",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "전·현직",
    "answers": [
      "전현직"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-14",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "전·후",
    "answers": [
      "전후"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-15",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "증·개축",
    "answers": [
      "증개축"
    ],
    "strict": true
  },
  {
    "id": "language-middle-dot-16",
    "category": "어법·어문 규범",
    "group": "한 단어로 굳어진 말의 문장 부호 오류 · 8쪽 상단",
    "question": "출·퇴근",
    "answers": [
      "출퇴근"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-01",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "네비게이션",
    "answers": [
      "내비게이션"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-02",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "라이센스",
    "answers": [
      "라이선스"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-03",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "로얄",
    "answers": [
      "로열"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-04",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "로타리",
    "answers": [
      "로터리"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-05",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "메세지",
    "answers": [
      "메시지"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-06",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "벤처캐피탈",
    "answers": [
      "벤처캐피털"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-07",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "쉐프",
    "answers": [
      "셰프"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-08",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "스케쥴",
    "answers": [
      "스케줄"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-09",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "스텀프",
    "answers": [
      "스탬프"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-10",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "썸머",
    "answers": [
      "서머"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-11",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "어플리케이션",
    "answers": [
      "애플리케이션"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-12",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "워크샵",
    "answers": [
      "워크숍"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-13",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "컨텐츠",
    "answers": [
      "콘텐츠"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-14",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "컬쳐",
    "answers": [
      "컬처"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-15",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "클라쓰",
    "answers": [
      "클래스"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-16",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "데크",
    "answers": [
      "덱"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-17",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "트롯",
    "answers": [
      "트로트"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-18",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "파트너쉽",
    "answers": [
      "파트너십"
    ],
    "strict": true
  },
  {
    "id": "language-loanword-19",
    "category": "어법·어문 규범",
    "group": "외래어 표기법을 지키지 않은 경우 · 7~8쪽",
    "question": "팰럴림픽",
    "answers": [
      "패럴림픽"
    ],
    "strict": true
  },
  {
    "id": "language-typo-01",
    "category": "어법·어문 규범",
    "group": "오탈자 · 7~8쪽",
    "question": "내딛었다",
    "answers": [
      "내디뎠다"
    ],
    "strict": true
  },
  {
    "id": "language-typo-02",
    "category": "어법·어문 규범",
    "group": "오탈자 · 7~8쪽",
    "question": "일사분란",
    "answers": [
      "일사불란"
    ],
    "strict": true
  },
  {
    "id": "language-contract-chi-01",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -치 않다",
    "question": "필요하지 않다",
    "answers": [
      "필요치 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)으로 끝날 때 ‘-치 않다’로 씁니다."
  },
  {
    "id": "language-contract-chi-02",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -치 않다",
    "question": "간편하지 않다",
    "answers": [
      "간편치 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)으로 끝날 때 ‘-치 않다’로 씁니다."
  },
  {
    "id": "language-contract-chi-03",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -치 않다",
    "question": "각별하지 않다",
    "answers": [
      "각별치 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)으로 끝날 때 ‘-치 않다’로 씁니다."
  },
  {
    "id": "language-contract-chi-04",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -치 않다",
    "question": "의심하지 않다",
    "answers": [
      "의심치 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)으로 끝날 때 ‘-치 않다’로 씁니다."
  },
  {
    "id": "language-contract-chi-05",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -치 않다",
    "question": "사용하지 않다",
    "answers": [
      "사용치 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)으로 끝날 때 ‘-치 않다’로 씁니다."
  },
  {
    "id": "language-contract-ji-01",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -지 않다",
    "question": "녹록하지 않다",
    "answers": [
      "녹록지 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)을 제외한 자음으로 끝날 때 ‘-지 않다’로 씁니다."
  },
  {
    "id": "language-contract-ji-02",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -지 않다",
    "question": "익숙하지 않다",
    "answers": [
      "익숙지 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)을 제외한 자음으로 끝날 때 ‘-지 않다’로 씁니다."
  },
  {
    "id": "language-contract-ji-03",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -지 않다",
    "question": "탐탁하지 않다",
    "answers": [
      "탐탁지 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)을 제외한 자음으로 끝날 때 ‘-지 않다’로 씁니다."
  },
  {
    "id": "language-contract-ji-04",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -지 않다",
    "question": "갑갑하지 않다",
    "answers": [
      "갑갑지 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)을 제외한 자음으로 끝날 때 ‘-지 않다’로 씁니다."
  },
  {
    "id": "language-contract-ji-05",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · -지 않다",
    "question": "깨끗하지 않다",
    "answers": [
      "깨끗지 않다"
    ],
    "strict": true,
    "instruction": "아래 기본 표현을 줄여 적으세요.",
    "answerLabel": "줄인 표현",
    "reference": "‘하’의 앞말이 모음이나 유성음(ㄴ, ㄹ, ㅁ, ㅇ)을 제외한 자음으로 끝날 때 ‘-지 않다’로 씁니다."
  }
];
QUESTIONS.push(...LANGUAGE_RULE_QUESTIONS);
const STUDY_ONLY_ITEMS = [
  {
    "id": "language-typo-pending-cheongryeom",
    "category": "어법·어문 규범",
    "group": "오탈자 · 원문 확인 필요",
    "question": "청렴도",
    "answers": [
      "청렴도"
    ],
    "note": "사진상 수정 전후가 동일하게 보입니다. 원문 확인 전까지 문제로 출제하지 않습니다."
  },
  {
    "id": "language-reference-seoseum",
    "category": "어법·어문 규범",
    "group": "‘-하지 않다’의 준말 · 쏙쏙 길잡이",
    "question": "‘서슴치’가 아닌 ‘서슴지’",
    "answers": [
      "서슴지"
    ],
    "note": "‘서슴지’는 어간이 ㅁ으로 끝나는데도 ‘서슴치’가 아니고 ‘서슴지’인 이유: 기본형이 ‘서슴하다’가 아니고 ‘서슴다’이기 때문에 위의 경우에 해당되지 않아서 ‘하’를 완전히 줄여 ‘서슴지’로 써요. (제공 자료의 설명)"
  }
];

// 사용자가 제공한 표현 수정 표 (이번 제공 범위: 16~17쪽). 원문과 복수 수정안을 보존합니다.
const EXPRESSION_QUESTIONS = [
  {
    "id": "expression-16a-01",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "검사·감독의 결과 관련",
    "answers": [
      "검사·감독 결과와 관련하여"
    ],
    "sourceAnswer": "검사·감독 결과와 관련하여",
    "strict": true
  },
  {
    "id": "expression-16a-02",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "경품이 공정거래위원회의 '경품류 제공에 관한 불공정 거래 행위의 유형 및 기준 지정 고시(제2000-11호)'위반 여부",
    "answers": [
      "경품이 공정거래위원회의 '경품류 제공에 관한 불공정 거래 행위의 유형 및 기준 지정 고시(제2000-11호)'에 위반되는지 여부"
    ],
    "sourceAnswer": "경품이 공정거래위원회의 '경품류 제공에 관한 불공정 거래 행위의 유형 및 기준 지정 고시(제2000-11호)'에 위반되는지 여부",
    "strict": true
  },
  {
    "id": "expression-16a-03",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "계약시",
    "answers": [
      "계약 시",
      "계약할 때"
    ],
    "sourceAnswer": "계약 시(→ 계약할 때)",
    "strict": true
  },
  {
    "id": "expression-16a-04",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "계획 수립 과정에 녹색 성장 관련 전문가 그룹인 녹색성장위원회 및 녹색 성장 기획 연구단을 통해 자문과 의견을 수렴하고",
    "answers": [
      "계획 수립 과정에서 녹색 성장 관련 전문가 그룹인 녹색성장위원회와 녹색 성장 기획 연구단에 자문하고"
    ],
    "sourceAnswer": "계획 수립 과정에서 녹색 성장 관련 전문가 그룹인 녹색성장위원회와 녹색 성장 기획 연구단에 자문하고",
    "strict": true
  },
  {
    "id": "expression-16a-05",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "계획인 바",
    "answers": [
      "계획인바",
      "계획입니다. 이에"
    ],
    "sourceAnswer": "계획인바(→ 계획입니다. 이에)",
    "strict": true
  },
  {
    "id": "expression-16a-06",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "공동 실시하는",
    "answers": [
      "공동으로 실시하는"
    ],
    "sourceAnswer": "공동으로 실시하는",
    "strict": true
  },
  {
    "id": "expression-16a-07",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "공사로 인해 출입문이 상시 개방중입니다.",
    "answers": [
      "공사를 하고 있어서 출입문을 계속 열어 놓고 있습니다."
    ],
    "sourceAnswer": "공사를 하고 있어서 출입문을 계속 열어 놓고 있습니다.",
    "strict": true
  },
  {
    "id": "expression-16a-08",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "공설묘지를 활용 방안도 검토 중이다.",
    "answers": [
      "공설묘지를 활용하는 방안도 검토하고 있다."
    ],
    "sourceAnswer": "공설묘지를 활용하는 방안도 검토하고 있다.",
    "strict": true
  },
  {
    "id": "expression-16a-09",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "공연 종료 후 사용 장비 및 물품은 제자리 정리 정돈이 필요하며, 공연장의 시설·설비·비품을 파손·분실할 경우 원상 복구를 하여야 합니다.",
    "answers": [
      "공연을 마치면 공연에 사용한 장비와 물품을 정리해 주시기 바랍니다. 시설, 설비, 비품 등을 파손하거나 분실한 경우에는 원상 복구를 해야 합니다."
    ],
    "sourceAnswer": "공연을 마치면 공연에 사용한 장비와 물품을 정리해 주시기 바랍니다. 시설, 설비, 비품 등을 파손하거나 분실한 경우에는 원상 복구를 해야 합니다.",
    "strict": true
  },
  {
    "id": "expression-16a-10",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "과거사를 극복하고 미래 지향적인 양국 간 관계 발전을 위한",
    "answers": [
      "과거사를 극복하고 미래 지향적인 양국 간 관계를 발전시키기 위한"
    ],
    "sourceAnswer": "과거사를 극복하고 미래 지향적인 양국 간 관계를 발전시키기 위한",
    "strict": true
  },
  {
    "id": "expression-16a-11",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "관련 적용법은?",
    "answers": [
      "관련 적용법 조항은 무엇인지?"
    ],
    "sourceAnswer": "관련 적용법 조항은 무엇인지?",
    "strict": true
  },
  {
    "id": "expression-16a-12",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "교원 능력 제고를 위한 인프라 구축",
    "answers": [
      "교원 능력을 높이기 위한 기반 구축"
    ],
    "sourceAnswer": "교원 능력을 높이기 위한 기반 구축",
    "strict": true
  },
  {
    "id": "expression-16a-13",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 첫 번째 표",
    "question": "교육관 건립 등 시설 정비 끝낼 방침이다.",
    "answers": [
      "교육관 건립 등 시설 정비를 끝낼 방침이다."
    ],
    "sourceAnswer": "교육관 건립 등 시설 정비를 끝낼 방침이다.",
    "strict": true
  },
  {
    "id": "expression-16b-01",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "교육을 실시하게",
    "answers": [
      "교육을 하게"
    ],
    "sourceAnswer": "교육을 하게",
    "strict": true
  },
  {
    "id": "expression-16b-02",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "교육을 실시한다.",
    "answers": [
      "교육을 한다."
    ],
    "sourceAnswer": "교육을 한다.",
    "strict": true
  },
  {
    "id": "expression-16b-03",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "교육의 질 제고를 위해 '마이스터고' 인증시스템 구축",
    "answers": [
      "교육의 질을 높이도록 '마이스터고' 인증 체계 마련"
    ],
    "sourceAnswer": "교육의 질을 높이도록 '마이스터고' 인증 체계 마련",
    "strict": true
  },
  {
    "id": "expression-16b-04",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "구직자의 채용 기회",
    "answers": [
      "구직자의 취업 기회"
    ],
    "sourceAnswer": "구직자의 취업 기회",
    "strict": true
  },
  {
    "id": "expression-16b-05",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "구체화시켜",
    "answers": [
      "구체화해"
    ],
    "sourceAnswer": "구체화해",
    "strict": true
  },
  {
    "id": "expression-16b-06",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "'위기에 강한 국민', '할 수 있다'는 자신감, 경제난국 극복에 기여",
    "answers": [
      "국민에게 '할 수 있다'는 자신감을 심어 경제 위기 극복에 기여"
    ],
    "sourceAnswer": "국민에게 '할 수 있다'는 자신감을 심어 경제 위기 극복에 기여",
    "strict": true
  },
  {
    "id": "expression-16b-07",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "국립OOO문화전당을 건립 중에 있으며",
    "answers": [
      "국립OOO문화전당을 건립하고 있으며"
    ],
    "sourceAnswer": "국립OOO문화전당을 건립하고 있으며",
    "strict": true
  },
  {
    "id": "expression-16b-08",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "규정법 위반 시",
    "answers": [
      "규정법을 위반했을 때"
    ],
    "sourceAnswer": "규정법을 위반했을 때",
    "strict": true
  },
  {
    "id": "expression-16b-09",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "근로능력 없는 장애율 80% 이상자",
    "answers": [
      "근로 능력이 없으며 장애율이 80% 이상인 사람"
    ],
    "sourceAnswer": "근로 능력이 없으며 장애율이 80% 이상인 사람",
    "strict": true
  },
  {
    "id": "expression-16b-10",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기 참석한 경우에는 별도 참석하실 필요가 없습니다.",
    "answers": [
      "이미 참석했으면 또 참석하실 필요가 없습니다."
    ],
    "sourceAnswer": "이미 참석했으면 또 참석하실 필요가 없습니다.",
    "strict": true
  },
  {
    "id": "expression-16b-11",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기간 동안",
    "answers": [
      "기간",
      "동안"
    ],
    "sourceAnswer": "기간/동안",
    "strict": true
  },
  {
    "id": "expression-16b-12",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기반한",
    "answers": [
      "기반을 둔",
      "기초한"
    ],
    "sourceAnswer": "기반을 둔/기초한",
    "strict": true
  },
  {
    "id": "expression-16b-13",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "담보증 금액의 만기도래분",
    "answers": [
      "기존 보증 금액 가운데 만기가 된 것"
    ],
    "sourceAnswer": "기존 보증 금액 가운데 만기가 된 것",
    "strict": true
  },
  {
    "id": "expression-16b-14",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기재 필",
    "answers": [
      "반드시 기재"
    ],
    "sourceAnswer": "반드시 기재",
    "strict": true
  },
  {
    "id": "expression-16b-15",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기존의 교과 위주의 수업에",
    "answers": [
      "기존의 교과 위주 수업에"
    ],
    "sourceAnswer": "기존의 교과 위주 수업에",
    "strict": true
  },
  {
    "id": "expression-16b-16",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "기한내 미납부시 참가 포기자로 간주",
    "answers": [
      "이때까지 납부하지 않으면 참가 의사가 없는 것으로 여김"
    ],
    "sourceAnswer": "이때까지 납부하지 않으면 참가 의사가 없는 것으로 여김",
    "strict": true
  },
  {
    "id": "expression-16b-17",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "나타나고 있다.",
    "answers": [
      "나타났다."
    ],
    "sourceAnswer": "나타났다.",
    "strict": true
  },
  {
    "id": "expression-16b-18",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "노동력 경영비 절감이 가능하다.",
    "answers": [
      "노동력과 경영비를 줄일 수 있다."
    ],
    "sourceAnswer": "노동력과 경영비를 줄일 수 있다.",
    "strict": true
  },
  {
    "id": "expression-16b-19",
    "category": "표현",
    "group": "표현 수정 · 16쪽 · 두 번째 표",
    "question": "녹색성장을 통한 변화되는 모습 및 기대 효과 분석 등을 실시할 계획이다.",
    "answers": [
      "녹색 성장으로 변화되는 모습과 기대 효과를 분석하는 등의 일을 할 계획이다."
    ],
    "sourceAnswer": "녹색 성장으로 변화되는 모습과 기대 효과를 분석하는 등의 일을 할 계획이다.",
    "strict": true
  },
  {
    "id": "expression-17a-01",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "누전 차단기가 동작되어",
    "answers": [
      "누전 차단기가 작동하여"
    ],
    "sourceAnswer": "누전 차단기가 작동하여",
    "strict": true
  },
  {
    "id": "expression-17a-02",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "다수인이 왕래하는 장소에 6. 1.(금)까지 첨부합니다.",
    "answers": [
      "사람들이 많이 오가는 곳에 6. 1.(금)까지 부착할 예정입니다."
    ],
    "sourceAnswer": "사람들이 많이 오가는 곳에 6. 1.(금)까지 부착할 예정입니다.",
    "strict": true
  },
  {
    "id": "expression-17a-03",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "다양한 지식과 정보 제공을 위하여",
    "answers": [
      "다양한 지식과 정보를 제공하고자"
    ],
    "sourceAnswer": "다양한 지식과 정보를 제공하고자",
    "strict": true
  },
  {
    "id": "expression-17a-04",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "단순 업무 효율성 향상에만",
    "answers": [
      "단순히 업무 효율성을 향상하는 데에만"
    ],
    "sourceAnswer": "단순히 업무 효율성을 향상하는 데에만",
    "strict": true
  },
  {
    "id": "expression-17a-05",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "담당자를 위한 문화 예술 전문 역량 강화를 위해",
    "answers": [
      "담당자의 문화 예술 전문 역량 강화를 위해"
    ],
    "sourceAnswer": "담당자의 문화 예술 전문 역량 강화를 위해",
    "strict": true
  },
  {
    "id": "expression-17a-06",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "대비·대응 안전 당부",
    "answers": [
      "대비·대응 협조 요청"
    ],
    "sourceAnswer": "대비·대응 협조 요청",
    "strict": true
  },
  {
    "id": "expression-17a-07",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "국내 여행자를 대상, 「관광진흥법」에 따라 강력한 행정처분 조치를 취할 예정입니다.",
    "answers": [
      "국내 여행자를 대상으로 「관광진흥법」에 따라 강력한 행정처분 조치를 취할 예정입니다."
    ],
    "sourceAnswer": "국내 여행자를 대상으로 「관광진흥법」에 따라 강력한 행정처분 조치를 취할 예정입니다.",
    "strict": true
  },
  {
    "id": "expression-17a-08",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "대통령 방한 시",
    "answers": [
      "대통령이 방한했을 때"
    ],
    "sourceAnswer": "대통령이 방한했을 때",
    "strict": true
  },
  {
    "id": "expression-17a-09",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "대학 자료 반납 시, 필히 연체여부를 확인하고 연체 시 이용자에게 연체료를 수납한 후, 운영자 홈페이지에서 반납 처리함.",
    "answers": [
      "이용자가 대학 자료를 반납할 때 운영자는 반드시 연체 여부를 확인하고 연체되면 이용자에게 연체료를 받은 다음, 운영자 누리집에서 반납 처리함."
    ],
    "sourceAnswer": "이용자가 대학 자료를 반납할 때 운영자는 반드시 연체 여부를 확인하고 연체되면 이용자에게 연체료를 받은 다음, 운영자 누리집에서 반납 처리함.",
    "strict": true
  },
  {
    "id": "expression-17a-10",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "대형 포털 해당 메일 차단 요청, 경찰 수사 요청 등 적극 대응으로 피해를 최소화하기 위해",
    "answers": [
      "대형 포털에 해당 전자우편을 차단 요청하거나 경찰에 수사 요청을 하는 등 피해를 최소화하고자"
    ],
    "sourceAnswer": "대형 포털에 해당 전자우편을 차단 요청하거나 경찰에 수사 요청을 하는 등 피해를 최소화하고자",
    "strict": true
  },
  {
    "id": "expression-17a-11",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "도시 철도 이용 시 불편한 사항에 대하여 제언해 주시면",
    "answers": [
      "도시 철도를 이용하면서 겪은 불편한 점을 말씀해 주시면"
    ],
    "sourceAnswer": "도시 철도를 이용하면서 겪은 불편한 점을 말씀해 주시면",
    "strict": true
  },
  {
    "id": "expression-17a-12",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "도시계획 도로 공사를 진행 중에 있습니다.",
    "answers": [
      "도시계획 도로 공사를 진행하고 있습니다."
    ],
    "sourceAnswer": "도시계획 도로 공사를 진행하고 있습니다.",
    "strict": true
  },
  {
    "id": "expression-17a-13",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "동법에 의해",
    "answers": [
      "이 법에 따라"
    ],
    "sourceAnswer": "이 법에 따라",
    "strict": true
  },
  {
    "id": "expression-17a-14",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 첫 번째 표",
    "question": "응시 원서 등에 허위 기재",
    "answers": [
      "응시 원서 등 각종 서류의 허위 기재"
    ],
    "sourceAnswer": "응시 원서 등 각종 서류의 허위 기재",
    "strict": true
  },
  {
    "id": "expression-17b-01",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "또한 지식 재산 정책에 대한 국민의 접근성을 더욱 강화하기 위해 올해부터는 국민이 직접 정책 설명 공개 과제를 요청하는 '국민 신청 설명제'를 분기별로 시행할 예정이다.",
    "answers": [
      "또한 올해부터 국민이 직접 정책 설명의 공개 과제를 요청하는 '국민 신청 설명제'를 분기별로 시행할 예정이다."
    ],
    "sourceAnswer": "또한 올해부터 국민이 직접 정책 설명의 공개 과제를 요청하는 '국민 신청 설명제'를 분기별로 시행할 예정이다.",
    "strict": true
  },
  {
    "id": "expression-17b-02",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "또한 \"해외 한식당 교육은 그 대상 지역을 점점 확대하고 정례화하는 방향으로 추진하겠다\"라며 \"외국의 유명 요리 학교와도 이에 대해 협력해 나가고 있다\"고 덧붙였다.",
    "answers": [
      "또한 관계자는 \"해외 한식당 교육은 그 대상 지역을 점점 확대하고 정례화하는 방향으로 추진하겠다.\"라며 \"외국의 유명 요리 학교와도 이에 대해 협력해 나가고 있다.\"라고 덧붙였다."
    ],
    "sourceAnswer": "또한 관계자는 \"해외 한식당 교육은 그 대상 지역을 점점 확대하고 정례화하는 방향으로 추진하겠다.\"라며 \"외국의 유명 요리 학교와도 이에 대해 협력해 나가고 있다.\"라고 덧붙였다.",
    "strict": true
  },
  {
    "id": "expression-17b-03",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "마라톤처럼 일정 시간 내에",
    "answers": [
      "마라톤처럼 정해진 시간 안에"
    ],
    "sourceAnswer": "마라톤처럼 정해진 시간 안에",
    "strict": true
  },
  {
    "id": "expression-17b-04",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "마스터플랜을 마련하여",
    "answers": [
      "종합 계획을 마련하여",
      "기본 설계를 마련하여"
    ],
    "sourceAnswer": "(종합 계획을/기본 설계를) 마련하여",
    "strict": true
  },
  {
    "id": "expression-17b-05",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "만전을 기하여",
    "answers": [
      "허술함이 없도록 하여"
    ],
    "sourceAnswer": "허술함이 없도록 하여",
    "strict": true
  },
  {
    "id": "expression-17b-06",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "많은 데 기인한 것으로 보인다.",
    "answers": [
      "많기 때문인 것으로 보인다."
    ],
    "sourceAnswer": "많기 때문인 것으로 보인다.",
    "strict": true
  },
  {
    "id": "expression-17b-07",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "매 1년마다",
    "answers": [
      "1년마다",
      "매년",
      "해마다"
    ],
    "sourceAnswer": "1년마다/매년/해마다",
    "strict": true
  },
  {
    "id": "expression-17b-08",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "정상 간 채택 문서에 최초로 영문화함으로써",
    "answers": [
      "정상 간 채택 문서에 최초로 밝혀옴으로써"
    ],
    "sourceAnswer": "정상 간 채택 문서에 최초로 밝혀옴으로써",
    "strict": true
  },
  {
    "id": "expression-17b-09",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "모델로 설립",
    "answers": [
      "본보기로 하여 설립"
    ],
    "sourceAnswer": "본보기로 하여 설립",
    "strict": true
  },
  {
    "id": "expression-17b-10",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "무대 작업은 안전 관리 담당자의 안전 교육 실시 후에 시작하시기 바랍니다.",
    "answers": [
      "무대 작업은 안전 관리 담당자에게서 안전 교육을 받은 후에 시작해야 합니다."
    ],
    "sourceAnswer": "무대 작업은 안전 관리 담당자에게서 안전 교육을 받은 후에 시작해야 합니다.",
    "strict": true
  },
  {
    "id": "expression-17b-11",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "무한OO, 행복OO 등의 슬로건이 많이 나왔다는 점이 군정 구호였던 행복OO의 영향을 많이 받았음을 말해 줌.",
    "answers": [
      "무한OO, 행복OO 등 군정 구호 행복OO의 영향을 받은 구호가 많음."
    ],
    "sourceAnswer": "무한OO, 행복OO 등 군정 구호 행복OO의 영향을 받은 구호가 많음.",
    "strict": true
  },
  {
    "id": "expression-17b-12",
    "category": "표현",
    "group": "표현 수정 · 17쪽 · 두 번째 표",
    "question": "응시자가 선발 예정 인원수와 같거나 미달이더라도",
    "answers": [
      "응시자가 선발 예정 인원수와 같거나 그에 미달하더라도"
    ],
    "sourceAnswer": "응시자가 선발 예정 인원수와 같거나 그에 미달하더라도",
    "strict": true
  }
];
QUESTIONS.push(...EXPRESSION_QUESTIONS);

// 사용자 제공 18~20쪽 표현 수정. 괄호의 선택 표현과 권장 대체안을 각각 허용합니다.
const MORE_EXPRESSION_QUESTIONS = [
  {
    "id": "expression-18a-01",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "바로 감염대상 여부 확인 및 감염 절차를 완료할 수 있다.",
    "answers": [
      "감염 대상임이 확인되면 곧바로 감염 절차를 마칠 수 있다."
    ],
    "sourceAnswer": "감염 대상임이 확인되면 곧바로 감염 절차를 마칠 수 있다.",
    "strict": true
  },
  {
    "id": "expression-18a-02",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "범칙금 부과 또는 형사 처벌을 받게 되고",
    "answers": [
      "범칙금을 부과받거나 형사 처벌을 받게 되고"
    ],
    "sourceAnswer": "범칙금을 부과받거나 형사 처벌을 받게 되고",
    "strict": true
  },
  {
    "id": "expression-18a-03",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "법무부는 여러분의 외국인 등록, 귀화 신청 등을 담당하는 정부 기관으로 잘 알고 계실 것입니다.",
    "answers": [
      "법무부는 여러분의 외국인 등록, 귀화 신청 처리 등을 담당하는 정부 기관입니다."
    ],
    "sourceAnswer": "법무부는 여러분의 외국인 등록, 귀화 신청 처리 등을 담당하는 정부 기관입니다.",
    "strict": true
  },
  {
    "id": "expression-18a-04",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "베트남 정부는 현재 베트남 내에서 내·외국인 관광객 등을 대상으로 곰 사육 농장에서 살아 있는 곰쓸개에 튜브를 연결하여 동남아 지역에 대한 여행 수요가 급증하고 있는 상황에서 생쓸개즙의 음용을 알선하는 사람 또는 업체에 대하여 '동물보호법' 등 관련 법률 위반혐의로 강력한 단속을 취할 예정입니다.",
    "answers": [
      "현재 베트남 등 동남아시아 지역 내 곰 사육 농장에서 살아 있는 곰쓸개에 튜브를 연결하여 쓸개즙을 음용하는 내외국인 관광객이 급증하고 있어, 베트남 정부는 생쓸개즙의 음용을 알선하는 사람이나 업체를 '동물보호법' 등 관련 법률 위반 혐의로 강력히 단속할 예정입니다."
    ],
    "sourceAnswer": "현재 베트남 등 동남아시아 지역 내 곰 사육 농장에서 살아 있는 곰쓸개에 튜브를 연결하여 쓸개즙을 음용하는 내외국인 관광객이 급증하고 있어, 베트남 정부는 생쓸개즙의 음용을 알선하는 사람이나 업체를 '동물보호법' 등 관련 법률 위반 혐의로 강력히 단속할 예정입니다.",
    "strict": true
  },
  {
    "id": "expression-18a-05",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "신종 플루 감염으로 보여짐.",
    "answers": [
      "신종 플루 감염으로 보임."
    ],
    "sourceAnswer": "신종 플루 감염으로 보임.",
    "strict": true
  },
  {
    "id": "expression-18a-06",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "보증 사례에 대해서는",
    "answers": [
      "보증 사례는"
    ],
    "sourceAnswer": "보증 사례는",
    "strict": true
  },
  {
    "id": "expression-18a-07",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "의무 복무 군인에게 발병한 중증 질환은 복무관련성이 낮아도",
    "answers": [
      "의무 복무 군인에게 발병한 중증 질환은 복무와 관련성이 낮아도"
    ],
    "sourceAnswer": "의무 복무 군인에게 발병한 중증 질환은 복무와 관련성이 낮아도",
    "strict": true
  },
  {
    "id": "expression-18a-08",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "불참한 관계로",
    "answers": [
      "불참하였으므로"
    ],
    "sourceAnswer": "불참하였으므로",
    "strict": true
  },
  {
    "id": "expression-18a-09",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "불편함이 많았다.",
    "answers": [
      "불편이 컸다."
    ],
    "sourceAnswer": "불편이 컸다.",
    "strict": true
  },
  {
    "id": "expression-18a-10",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "불임의 승인 조건을 숙지하신 후, 동 문서 접수 후",
    "answers": [
      "불임의 승인 조건을 충분히 살펴보고 문서를 제출하신 뒤"
    ],
    "sourceAnswer": "불임의 승인 조건을 충분히 살펴보고 문서를 제출하신 뒤",
    "strict": true
  },
  {
    "id": "expression-18a-11",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 첫 번째 표",
    "question": "비교 시",
    "answers": [
      "비교할 때"
    ],
    "sourceAnswer": "비교할 때",
    "strict": true
  },
  {
    "id": "expression-18b-01",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "비상구 유도등은 녹색 바탕으로 되어 있고 밖으로 대피할 수 있는 출입구(바닥으로부터 1.5m 이상 높이 설치)를 표시하며, 통로 유도등은 백색 바탕에 녹색 화살표로 대피 방향(바닥으로부터 1m 이하 위치 설치)을 표시하고 있습니다.",
    "answers": [
      "비상구 유도등은 대피할 수 있는 출입구를 표시합니다. 녹색 바탕으로 되어 있고, 바닥에서 1.5m 이상 높은 곳에 설치되어 있습니다. 통로 유도등은 대피 방향을 표시합니다. 백색 바탕에 녹색 화살표가 그려져 있고, 바닥에서 1m 이하 낮은 곳에 설치되어 있습니다."
    ],
    "sourceAnswer": "비상구 유도등은 대피할 수 있는 출입구를 표시합니다. 녹색 바탕으로 되어 있고, 바닥에서 1.5m 이상 높은 곳에 설치되어 있습니다. 통로 유도등은 대피 방향을 표시합니다. 백색 바탕에 녹색 화살표가 그려져 있고, 바닥에서 1m 이하 낮은 곳에 설치되어 있습니다.",
    "strict": true
  },
  {
    "id": "expression-18b-02",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "새로운 아이디어와 구체적인 실천 계획을 세운다.",
    "answers": [
      "새로운 아이디어를 발굴하고 구체적인 실천 계획을 세운다."
    ],
    "sourceAnswer": "새로운 아이디어를 발굴하고 구체적인 실천 계획을 세운다.",
    "strict": true
  },
  {
    "id": "expression-18b-03",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "서식이 있는 내규 일체 개정 완료 후, 개정 전문 송부 요망.",
    "answers": [
      "서식이 있는 내규 모두를 개정하고 (나서) 개정 전문을 보내 주시기 바랍니다.",
      "서식이 있는 내규 모두를 개정하고 개정 전문을 보내 주시기 바랍니다.",
      "서식이 있는 내규 모두를 개정하고 나서 개정 전문을 보내 주시기 바랍니다."
    ],
    "sourceAnswer": "서식이 있는 내규 모두를 개정하고 (나서) 개정 전문을 보내 주시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-18b-04",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "선거 공보는 투표 안내문과 함께 6. 3.(일)까지 발송됩니다.",
    "answers": [
      "선거 공보는 모든 세대에 투표 안내문과 함께 6. 3.(일)까지 발송됩니다."
    ],
    "sourceAnswer": "선거 공보는 모든 세대에 투표 안내문과 함께 6. 3.(일)까지 발송됩니다.",
    "strict": true
  },
  {
    "id": "expression-18b-05",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "선결제를 하고",
    "answers": [
      "미리 결제하고"
    ],
    "sourceAnswer": "미리 결제하고",
    "strict": true
  },
  {
    "id": "expression-18b-06",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "선정되었음을 알고 있으시죠?",
    "answers": [
      "선정되었음을 알고 계실 것입니다."
    ],
    "sourceAnswer": "선정되었음을 알고 계실 것입니다.",
    "strict": true,
    "note": "공문서일 경우"
  },
  {
    "id": "expression-18b-07",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "설명회 참석 시에는 대중교통수단을 이용해 주시기 바라며, 교육은 공단 실무 책임자가 직접 진행할 예정입니다.",
    "answers": [
      "설명회에 참석할 때에는 대중교통을 이용해 주시기 바랍니다. 교육은 공단 실무 책임자가 직접 진행할 예정입니다."
    ],
    "sourceAnswer": "설명회에 참석할 때에는 대중교통을 이용해 주시기 바랍니다. 교육은 공단 실무 책임자가 직접 진행할 예정입니다.",
    "strict": true
  },
  {
    "id": "expression-18b-08",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "시민의 녹색 생활화를 녹색 성장의 3대 분야로 설정, 5개 자치구와 관계 기관이 공동으로 추진",
    "answers": [
      "시민의 녹색 생활화를 녹색 성장의 3대 분야로 설정하고, 5개 자치구와 관계 기관이 공동으로 추진"
    ],
    "sourceAnswer": "시민의 녹색 생활화를 녹색 성장의 3대 분야로 설정하고, 5개 자치구와 관계 기관이 공동으로 추진",
    "strict": true
  },
  {
    "id": "expression-18b-09",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "성수동에 위치한",
    "answers": [
      "성수동에 있는",
      "성수동에 자리 잡은"
    ],
    "sourceAnswer": "성수동에 있는/성수동에 자리 잡은",
    "strict": true
  },
  {
    "id": "expression-18b-10",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "슬로건 선정 시 시사점",
    "answers": [
      "구호 선정 방향"
    ],
    "sourceAnswer": "구호 선정 방향",
    "strict": true
  },
  {
    "id": "expression-18b-11",
    "category": "표현",
    "group": "표현 수정 · 18쪽 · 두 번째 표",
    "question": "시민의 삶의 질 개선과 도시 위상 강화 방향을 추진해 나간다.",
    "answers": [
      "시민의 삶의 질을 개선하고 도시 위상을 강화해 나간다."
    ],
    "sourceAnswer": "시민의 삶의 질을 개선하고 도시 위상을 강화해 나간다.",
    "strict": true
  },
  {
    "id": "expression-19a-01",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "시설물 사용과 무대 작업은 담당 직원의 입회 하에 시행되어야 합니다.",
    "answers": [
      "시설물 사용과 무대 작업은 담당 직원이 있을 때에만 시행할 수 있습니다."
    ],
    "sourceAnswer": "시설물 사용과 무대 작업은 담당 직원이 있을 때에만 시행할 수 있습니다.",
    "strict": true
  },
  {
    "id": "expression-19a-02",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "시야를 확보하기 어렵고 누전 차단기가 작동하여",
    "answers": [
      "잘 보이지 않는 데다가 누전 차단기가 작동하여"
    ],
    "sourceAnswer": "잘 보이지 않는 데다가 누전 차단기가 작동하여",
    "strict": true
  },
  {
    "id": "expression-19a-03",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "신종 플루 전염병 위기 단계를 '경계'에서 최고 단계인 '심각'으로 격상(11. 3.)됨에 따라",
    "answers": [
      "신종 플루 전염병 위기 단계를 '경계'에서 최고 단계인 '심각'으로 격상(11. 3.)함에 따라"
    ],
    "sourceAnswer": "신종 플루 전염병 위기 단계를 '경계'에서 최고 단계인 '심각'으로 격상(11. 3.)함에 따라",
    "strict": true
  },
  {
    "id": "expression-19a-04",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "쓰레기통 결박하고 현수막 등은 제거함.",
    "answers": [
      "쓰레기통은 고정해 두고 현수막 등은 제거함."
    ],
    "sourceAnswer": "쓰레기통은 고정해 두고 현수막 등은 제거함.",
    "strict": true
  },
  {
    "id": "expression-19a-05",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "계약 체결을 아래 밝힌바와 같이 의뢰하오니",
    "answers": [
      "계약 체결을 아래와 같이 의뢰하오니"
    ],
    "sourceAnswer": "계약 체결을 아래와 같이 의뢰하오니",
    "strict": true
  },
  {
    "id": "expression-19a-06",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "악성 이메일 유포를 인지한 즉시",
    "answers": [
      "악성 전자우편을 발견한 즉시"
    ],
    "sourceAnswer": "악성 전자우편을 발견한 즉시",
    "strict": true
  },
  {
    "id": "expression-19a-07",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "악취 발생 우려 및 집중 호우 시 침출수 지하 토양 오염 우려",
    "answers": [
      "악취가 발생할 수 있고 집중 호우 때 지하 토양이 침출수로 오염될 수 있음."
    ],
    "sourceAnswer": "악취가 발생할 수 있고 집중 호우 때 지하 토양이 침출수로 오염될 수 있음.",
    "strict": true
  },
  {
    "id": "expression-19a-08",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "승인 및 계약 안내 알림",
    "answers": [
      "승인 및 계약 안내",
      "승인 및 계약 알림"
    ],
    "sourceAnswer": "승인 및 계약 안내/승인 및 계약 알림",
    "strict": true
  },
  {
    "id": "expression-19a-09",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "안전 관리자 개인의 안전 교육으로 판단되어",
    "answers": [
      "안전 관리자가 안전 교육을 받은 것으로 판단되어"
    ],
    "sourceAnswer": "안전 관리자가 안전 교육을 받은 것으로 판단되어",
    "strict": true
  },
  {
    "id": "expression-19a-10",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "안전 관리자 교육대상자 포함 여부 질의에 대해",
    "answers": [
      "안전 관리자 교육 대상자에 포함되는지를 묻는 질문에"
    ],
    "sourceAnswer": "안전 관리자 교육 대상자에 포함되는지를 묻는 질문에",
    "strict": true
  },
  {
    "id": "expression-19a-11",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "애국심 함양의 테마파크로",
    "answers": [
      "애국심을 함양할 수 있는 공원으로"
    ],
    "sourceAnswer": "애국심을 함양할 수 있는 공원으로",
    "strict": true
  },
  {
    "id": "expression-19a-12",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "약 30여 명",
    "answers": [
      "약 30명",
      "30여 명"
    ],
    "sourceAnswer": "약 30명/30여 명",
    "strict": true
  },
  {
    "id": "expression-19a-13",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "연간 삼모작 재배도",
    "answers": [
      "한 해 동안에 삼모작도"
    ],
    "sourceAnswer": "한 해 동안에 삼모작도",
    "strict": true
  },
  {
    "id": "expression-19a-14",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "연구 개발과 인재 양성 간 연계 시스템 구축",
    "answers": [
      "연구 개발과 인재 양성 사이의 연계 체제 구축"
    ],
    "sourceAnswer": "연구 개발과 인재 양성 사이의 연계 체제 구축",
    "strict": true
  },
  {
    "id": "expression-19a-15",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "연구비 수혜율 제고를 위해",
    "answers": [
      "연구비 수혜율을 높이도록"
    ],
    "sourceAnswer": "연구비 수혜율을 높이도록",
    "strict": true
  },
  {
    "id": "expression-19a-16",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 첫 번째 표",
    "question": "연시회를 갖는다.",
    "answers": [
      "연시회를 연다.",
      "기술 시연회를 연다."
    ],
    "sourceAnswer": "연시회를 연다. (→ 기술 시연회를 연다.)",
    "strict": true
  },
  {
    "id": "expression-19b-01",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "요인을 발굴 개선",
    "answers": [
      "요인을 발굴하여 개선"
    ],
    "sourceAnswer": "요인을 발굴하여 개선",
    "strict": true
  },
  {
    "id": "expression-19b-02",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "요청(2000.7.27.)한 바",
    "answers": [
      "요청한바(2000. 7. 27.)",
      "요청하여(2000. 7. 27.)"
    ],
    "sourceAnswer": "요청한바(2000. 7. 27.) [→ 요청하여(2000. 7. 27.)]",
    "strict": true
  },
  {
    "id": "expression-19b-03",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "우리 부 소관 공공기관의 수는 28개",
    "answers": [
      "우리 부가 맡은 공공기관의 수는 28개"
    ],
    "sourceAnswer": "우리 부가 맡은 공공기관의 수는 28개",
    "strict": true
  },
  {
    "id": "expression-19b-04",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "우리 위원회에서 개최한 토론회에 귀 기관의 직원이 참석하여 상시 학습 인정을 아래와 같이 요청하오니 협조하여 주시기 바랍니다.",
    "answers": [
      "우리 위원회에서 개최한 토론회에 아래와 같이 참석한 귀 기관 직원의 상시 학습 인정을 요청하오니 협조하여 주시기 바랍니다."
    ],
    "sourceAnswer": "우리 위원회에서 개최한 토론회에 아래와 같이 참석한 귀 기관 직원의 상시 학습 인정을 요청하오니 협조하여 주시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-19b-05",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "상담 및 교육 프로그램 운영 및 상담 관련 업무 보조",
    "answers": [
      "상담 및 교육 프로그램 운영과 상담 관련 업무 보조"
    ],
    "sourceAnswer": "상담 및 교육 프로그램 운영과 상담 관련 업무 보조",
    "strict": true
  },
  {
    "id": "expression-19b-06",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "법적 기준에 부적합하게 운영하고 있는 매립장은 조사되지 않음.",
    "answers": [
      "법적 기준에 부적합하게 운영하는 매립장은 조사되지 않음."
    ],
    "sourceAnswer": "법적 기준에 부적합하게 운영하는 매립장은 조사되지 않음.",
    "strict": true
  },
  {
    "id": "expression-19b-07",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "워크숍을 붙임과 같이 개최하기에 초청하오니 참석 여부를 알려 주시기 바랍니다.",
    "answers": [
      "워크숍을 붙임과 같이 개최하오니 참석 여부를 알려 주시기 바랍니다."
    ],
    "sourceAnswer": "워크숍을 붙임과 같이 개최하오니 참석 여부를 알려 주시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-19b-08",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "위 호와 관련, 2000년 공공 도서관 개관 시간 연장 문화 프로그램 계획 보고서",
    "answers": [
      "위 호와 관련하여, 2000년 공공 도서관의 개관 시간 연장에 따른 문화 프로그램 계획 보고서"
    ],
    "sourceAnswer": "위 호와 관련하여, 2000년 공공 도서관의 개관 시간 연장에 따른 문화 프로그램 계획 보고서",
    "strict": true
  },
  {
    "id": "expression-19b-09",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "「공직선거법」에 의거 처벌될 수 있습니다.",
    "answers": [
      "「공직선거법」에 따라 처벌될 수 있습니다."
    ],
    "sourceAnswer": "「공직선거법」에 따라 처벌될 수 있습니다.",
    "strict": true
  },
  {
    "id": "expression-19b-10",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "일반 질환에 대한 의료 지원에 있어 본인 일부 부담제를 도입한다.",
    "answers": [
      "일반 질환에 대한 의료 지원은 본인 일부 부담제를 도입한다."
    ],
    "sourceAnswer": "일반 질환에 대한 의료 지원은 본인 일부 부담제를 도입한다.",
    "strict": true
  },
  {
    "id": "expression-19b-11",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "이메일 수신 시",
    "answers": [
      "전자우편을 받으면"
    ],
    "sourceAnswer": "전자우편을 받으면",
    "strict": true
  },
  {
    "id": "expression-19b-12",
    "category": "표현",
    "group": "표현 수정 · 19쪽 · 두 번째 표",
    "question": "이미 잘 알려진 대외적 이미지나 일반 대중에게 인지시키기 쉬운 언어 유희적 표현 등으로 대중적 홍보성 강화",
    "answers": [
      "잘 알려진 이미지나 대중의 관심을 끌 수 있는 언어유희를 사용하여 홍보성 강화"
    ],
    "sourceAnswer": "잘 알려진 이미지나 대중의 관심을 끌 수 있는 언어유희를 사용하여 홍보성 강화",
    "strict": true
  },
  {
    "id": "expression-20a-01",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "이번 행사는 사회 복무 제도에 대한 국민 인식을 높이기 위해 마련되었다.",
    "answers": [
      "OO청은 사회 복무 제도의 국민 인식 수준을 높이고자 이번 행사를 마련하였다."
    ],
    "sourceAnswer": "OO청은 사회 복무 제도의 국민 인식 수준을 높이고자 이번 행사를 마련하였다.",
    "strict": true
  },
  {
    "id": "expression-20a-02",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "이번 행사에는 본청 직원뿐만 아니라 지방청에서 실무를 맡은 직원을 포함한 통계 혁신 담당자 50여 명이 참석하여",
    "answers": [
      "이번 행사에는 본청과 지방청에서 통계 혁신 업무를 맡고 있는 50여 명이 참석하여"
    ],
    "sourceAnswer": "이번 행사에는 본청과 지방청에서 통계 혁신 업무를 맡고 있는 50여 명이 참석하여",
    "strict": true
  },
  {
    "id": "expression-20a-03",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "이에 따라 OO시는 귀사에 취업 박람회 행사 당일 지역의 유망 직업을 소개하는 기업의 직업 홍보관 운영에 참가하여 주시기 바랍니다.",
    "answers": [
      "이에 따라 OO시는 귀사에 직업 홍보관 운영에 협조해 주실 것을 요청합니다."
    ],
    "sourceAnswer": "이에 따라 OO시는 귀사에 직업 홍보관 운영에 협조해 주실 것을 요청합니다.",
    "strict": true
  },
  {
    "id": "expression-20a-04",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "이전 신청서 제출은 무효 처리함.",
    "answers": [
      "이전에 제출한 신청서는 무효로 처리함."
    ],
    "sourceAnswer": "이전에 제출한 신청서는 무효로 처리함.",
    "strict": true
  },
  {
    "id": "expression-20a-05",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "일괄 공사하는 것으로 변경과 추후 도로 굴착 공사 승인 등 OO광역시와 직접 협의 처리하겠다는",
    "answers": [
      "일괄적으로 공사하는 것으로 변경하고 나중에 도로 굴착 공사를 승인하는 등 OO광역시와 직접 협의하여 처리하겠다는"
    ],
    "sourceAnswer": "일괄적으로 공사하는 것으로 변경하고 나중에 도로 굴착 공사를 승인하는 등 OO광역시와 직접 협의하여 처리하겠다는",
    "strict": true
  },
  {
    "id": "expression-20a-06",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "일자리 기업의 홍보 기회",
    "answers": [
      "기업의 일자리 홍보 기회"
    ],
    "sourceAnswer": "기업의 일자리 홍보 기회",
    "strict": true
  },
  {
    "id": "expression-20a-07",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "조사에 일체 응하지 않도록 주의하여 주시기 바랍니다.",
    "answers": [
      "조사 행위에 절대 응하지 마시기 바랍니다."
    ],
    "sourceAnswer": "조사 행위에 절대 응하지 마시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-20a-08",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "송금 요망",
    "answers": [
      "송금하시기 바랍니다."
    ],
    "sourceAnswer": "송금하시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-20a-09",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "자율화 방안이 차질 없이 추진 중",
    "answers": [
      "자율화 방안을 차질 없이 추진하는 중",
      "자율화 방안이 차질 없이 추진되는 중"
    ],
    "sourceAnswer": "자율화 방안을 차질 없이 추진하는 중/자율화 방안이 차질 없이 추진되는 중",
    "strict": true
  },
  {
    "id": "expression-20a-10",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "자체안의 경우 20OO 중기발전계획 비전을 정립하면서 도출",
    "answers": [
      "자체안은 20OO 중기발전계획 비전을 정립하면서 도출"
    ],
    "sourceAnswer": "자체안은 20OO 중기발전계획 비전을 정립하면서 도출",
    "strict": true
  },
  {
    "id": "expression-20a-11",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "잡상 행위를 근절될 수 있습니다.",
    "answers": [
      "잡상 행위를 없앨 수 있습니다."
    ],
    "sourceAnswer": "잡상 행위를 없앨 수 있습니다.",
    "strict": true
  },
  {
    "id": "expression-20a-12",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 첫 번째 표",
    "question": "잡상 행위자를 발견한 시",
    "answers": [
      "열차 안에서 물건을 파는 사람이 있으면"
    ],
    "sourceAnswer": "열차 안에서 물건을 파는 사람이 있으면",
    "strict": true
  },
  {
    "id": "expression-20b-01",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "재난 및 재해 대비조치에는 단 한 번의 예비가 있을 수 없다는 것을 명심하여 주시기 바랍니다.",
    "answers": [
      "재난 및 재해 대비에는 절대 허술함이 없어야 함을 명심하시기 바랍니다."
    ],
    "sourceAnswer": "재난 및 재해 대비에는 절대 허술함이 없어야 함을 명심하시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-20b-02",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "도지사 지시 사항을 전 공직자가 알 수 있도록 도보에 게재하여 주시기 바랍니다.",
    "answers": [
      "도지사 지시 사항을 도내 공직자가 알 수 있도록 도보에 게재하여 주시기 바랍니다."
    ],
    "sourceAnswer": "도지사 지시 사항을 도내 공직자가 알 수 있도록 도보에 게재하여 주시기 바랍니다.",
    "strict": true
  },
  {
    "id": "expression-20b-03",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "신청 방법: 전자우편 또는 방문 접수",
    "answers": [
      "신청 방법: 전자우편 또는 방문 제출"
    ],
    "sourceAnswer": "신청 방법: 전자우편 또는 방문 제출",
    "strict": true
  },
  {
    "id": "expression-20b-04",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "정당한 사유 없이 선거 벽보를 훼손하거나 철거한 때에는 「공직선거법」에 의거 처벌될 수 있습니다.",
    "answers": [
      "정당한 사유 없이 선거 벽보를 훼손하거나 철거하면 「공직선거법」에 따라 처벌을 받습니다."
    ],
    "sourceAnswer": "정당한 사유 없이 선거 벽보를 훼손하거나 철거하면 「공직선거법」에 따라 처벌을 받습니다.",
    "strict": true
  },
  {
    "id": "expression-20b-05",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "정상회담 계기 공동성명을 통해",
    "answers": [
      "정상 회담을 계기로 공동 성명을 발표하여"
    ],
    "sourceAnswer": "정상 회담을 계기로 공동 성명을 발표하여",
    "strict": true
  },
  {
    "id": "expression-20b-06",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "제37조 및 OOOOOO부 및 OOO청 소관 「비영리 법인의 설립 및 감독에 관한 규칙」",
    "answers": [
      "제37조 그리고 OOOOOO부와 OOO청 소관 「비영리 법인의 설립 및 감독에 관한 규칙」"
    ],
    "sourceAnswer": "제37조 그리고 OOOOOO부와 OOO청 소관 「비영리 법인의 설립 및 감독에 관한 규칙」",
    "strict": true
  },
  {
    "id": "expression-20b-07",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "361만 명에 달하는 대상자가 서비스를 제공받을 수 있게 된다.",
    "answers": [
      "361만 명에 달하는 대상자가 서비스를 받을 수 있게 된다."
    ],
    "sourceAnswer": "361만 명에 달하는 대상자가 서비스를 받을 수 있게 된다.",
    "strict": true
  },
  {
    "id": "expression-20b-08",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "조사 내용은 모든 표본을 대상으로 조사하는 공통 조사 항목과 체류 자격에 따라 추가로 조사하는 항목들이 있습니다.",
    "answers": [
      "조사 내용은 공통 조사 항목과 체류 자격에 따른 조사 항목으로 구성되어 있습니다."
    ],
    "sourceAnswer": "조사 내용은 공통 조사 항목과 체류 자격에 따른 조사 항목으로 구성되어 있습니다.",
    "strict": true
  },
  {
    "id": "expression-20b-09",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "조사 행위를 허가하고 있지 않습니다.",
    "answers": [
      "조사 행위를 할 수 없습니다."
    ],
    "sourceAnswer": "조사 행위를 할 수 없습니다.",
    "strict": true
  },
  {
    "id": "expression-20b-10",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "종사자에 대한 서비스 교육을 실시한다.",
    "answers": [
      "종사자에게 서비스 교육을 실시한다."
    ],
    "sourceAnswer": "종사자에게 서비스 교육을 실시한다.",
    "strict": true
  },
  {
    "id": "expression-20b-11",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "주관 부서 및 조사 대상 기관",
    "answers": [
      "주관 부서와 조사 대상 기관"
    ],
    "sourceAnswer": "주관 부서와 조사 대상 기관",
    "strict": true
  },
  {
    "id": "expression-20b-12",
    "category": "표현",
    "group": "표현 수정 · 20쪽 · 두 번째 표",
    "question": "주의가 요구됩니다.",
    "answers": [
      "주의해야 합니다."
    ],
    "sourceAnswer": "주의해야 합니다.",
    "strict": true
  }
];
QUESTIONS.push(...MORE_EXPRESSION_QUESTIONS);
