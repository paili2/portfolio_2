import Image from "next/image";
const SkillCardTest = ({
  image,
  skilName,
  translate = "translate-y-[0px]",
  width = "w-full",
  height = "h-[500px]",
}) => {
  return (
    <div className="w-full h-[300px] bg-slate-50 rounded-3xl shadow-xl flex flex-col justify-center items-center gap-10 overflow-hidden p-10">
      <h3 className="text-4xl font-bold">{skilName}</h3>
      <div
        className={`relative ${width} ${height} ${translate} flex justify-center items-center`}
      >
        <Image
          className={`w-full h-full object-contain`}
          src={image}
          alt=""
          fill
        ></Image>
      </div>
    </div>
  );
};

export default SkillCardTest;
