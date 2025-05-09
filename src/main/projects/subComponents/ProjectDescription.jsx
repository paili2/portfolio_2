const ProjectDescription = () => {
  return (
    <div className="text-[15px] flex flex-col gap-3">
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light shrink-0">개요</strong>
        <p className="text-sm">
          무신사(MUSSINSA) 홈페이지를 클론하는 프로젝트로, Next.js를 활용하여
          실제 서비스 구조에 가까운 웹 앱을 구현 중입니다. 현재는 프론트엔드
          중심으로 작업하고 있으며, 이후 백엔드 연동 예정입니다.
        </p>
      </div>
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light">주요 기능 및 구현 내용</strong>
        <div className="flex flex-col">
          <p className="text-sm">
            페이지 라우팅을 통해 카테고리(예: 랭킹) 전환 구조 구현
          </p>
          <p>헤더, 메인, 푸터 컴포넌트 분리</p>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <strong className="w-50  font-light ">계획 중 기능</strong>
        <div className="flex flex-col">
          <p>API 연동을 통한 로그인/회원가입 및 상품 데이터 처리</p>
          <p>장바구니 기능 구현 및 상태 관리 라이브러리 도입 예정</p>
        </div>
      </div>
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light">배운 점</strong>
        <div className="flex flex-col">
          <p>Next.js의 파일 기반 라우팅 및 서버 사이드 렌더링 이해</p>
          <p>프로젝트 구조를 실제 서비스처럼 구성하는 경험</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
