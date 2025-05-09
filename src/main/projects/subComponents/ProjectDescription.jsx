const ProjectDescription = ({
  outline,
  implementation1,
  implementation2,
  plan1,
  plan2,
  learn1,
  learn2,
}) => {
  return (
    <div className="text-[15px] flex flex-col gap-3">
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light shrink-0">개요</strong>
        <p className="text-sm">{outline}</p>
      </div>
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light">주요 기능 및 구현 내용</strong>
        <div className="flex flex-col">
          <p className="text-sm">{implementation1}</p>
          <p>{implementation2}</p>
        </div>
      </div>
      {plan1 || plan2 ? (
        <div className="flex gap-1 items-start">
          <strong className="w-50  font-light ">계획 중 기능</strong>
          <div className="flex flex-col">
            <p>{plan1}</p>
            <p>{plan2}</p>
          </div>
        </div>
      ) : null}
      <div className="flex gap-1 items-start">
        <strong className="w-50 font-light">배운 점</strong>
        <div className="flex flex-col">
          <p>{learn1}</p>
          <p>{learn2}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
