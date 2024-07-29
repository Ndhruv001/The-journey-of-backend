
function ButtonComponent({onClick}) {
  return (
    <button
            className="bg-white transition-all  duration-0 hover:duration-1000 hover:rounded-full  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClick}
          >
            Explore
          </button>
  );
}

export default ButtonComponent;
