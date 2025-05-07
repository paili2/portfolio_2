import Image from "next/image";

const LicenseEducation = () => {
  return (
    <section className="h-screen bg-blue-500 px-10 py-6 overflow-hidden relative flex flex-col justify-center items-center">
      <div className="w-full h-full max-w-5xl mx-auto border-none rounded-2xl bg-blue-200 flex flex-col gap-10 p-10">
        <div className="flex items-center gap-5">
          <div className="w-[80px] h-[80px] border-none rounded-[999px] relative">
            <Image
              src="/profile.jpg"
              alt=""
              className="object-cover border-none rounded-[999px]"
              fill
            ></Image>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <span className="text-gray-500 font-bold">신입</span>
              <strong>정서령</strong>
            </div>
            <span className="font-bold ">Full Stack Developer</span>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col justify-center border-none rounded-4xl bg-white p-5 gap-3">
            <span>교육</span>
            <strong>을지대학교 스포츠아웃도어학과 졸업 2020.02</strong>
            <strong>
              AI(인공지능)활용 핀테크서비스 개발자 양성과정_육성 860시간 수료
              2024.09 ~ 2024. 02
            </strong>
            <strong>
              React기반 프론트엔드 프로젝트 198시간 2024.01 ~ 2025. 05
            </strong>
          </div>
          <div className="flex flex-col justify-center border-none rounded-4xl bg-white p-5 gap-3">
            <span>자격증</span>
            <strong>
              SQL개발자(SQLD자격) 한국데이터베이스진흥센터 2024.09
            </strong>
            <strong>정보처리기사(필기합격) 한국산업인력공단 2024.08</strong>
            <strong>
              데이터분석준전문가(ADsP) 한국데이터베이스진흥원 2024.06
            </strong>
            <strong>검색광고마케터 1급 한국정보통신진흥협회 2024.04</strong>
            <strong>SNS광고마케터 1급 한국정보통신진흥협회 2024.03</strong>
            <strong>그래픽기술자격(GTQ) 1급 한국생산성본부(KPC) 2020.10</strong>
            <strong>MOS PowerPoint Microsoft 2019.11</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseEducation;
