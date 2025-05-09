const Button = ({ used }) => {
  return (
    <button className="border-none rounded-3xl bg-white text-black py-1 px-3 font-bold text-sm">
      {used}
    </button>
  );
};

export default Button;
