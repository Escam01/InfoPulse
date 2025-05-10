export default function Button() {
  return (
    <>
      <button className="px-8 z-30 py-4 bg-indigo-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-indigo-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:2px_2px_2px_#000000] hover:[text-shadow:2px_2px_2px_#000000] ">
        Открыть
      </button>
    </>
  );
}
