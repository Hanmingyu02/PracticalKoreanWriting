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
