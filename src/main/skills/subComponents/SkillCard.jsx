import Image from "next/image";
const SkillCard = ({
  image,
  skilName,
  description,
  translate,
  width = "w-[120px]",
  height = "h-[120px]",
}) => {
  return (
    <div className="w-full bg-slate-50 rounded-3xl p-8 shadow-xl flex items-center gap-10">
      <div className={`relative ${width} ${height} overflow-hidden`}>
        <Image
          className={`object-cover ${translate}`}
          src={image}
          alt=""
          fill
        ></Image>
      </div>
      <div className="w-2/3 flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{skilName}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
