import SkilCard from "@/src/components/sections/skils/SkilCard";

const Page = () => {
  return (
    <div className="w-full max-w-screen-xl items-center mx-auto grid grid-cols-2 gap-20 ">
      <SkilCard
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
      <SkilCard
        justify={"end"}
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
      <SkilCard
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
      <SkilCard
        justify={"end"}
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
      <SkilCard
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
      <SkilCard
        justify={"end"}
        skilName={"HTML"}
        src={"/html.png"}
        explanation={"설명"}
      ></SkilCard>
    </div>
  );
};

export default Page;
