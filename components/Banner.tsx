export default function Banner() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundColor: "#212943" }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Hi, Im Jose
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl">
        I build modern web applications and love exploring React and Next.js.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
      >
        See My Work
      </a>
    </section>
  );
}
