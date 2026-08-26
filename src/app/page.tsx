import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Project 1 - Soft Focus */}
      <section className="w-full min-h-screen flex items-center justify-center py-20">
        <div className="relative w-[90%] max-w-5xl h-[70vh] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400 tracking-widest uppercase">Project Image 1</p>
        </div>
      </section>

      {/* Project 2 - Slow Drift */}
      <section className="w-full min-h-screen flex items-center justify-center py-20 bg-gray-50">
        <div className="relative w-[80%] max-w-4xl h-[60vh] bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 tracking-widest uppercase">Project Image 2</p>
        </div>
      </section>

      {/* Project 3 - Studio Wall Cast */}
      <section className="w-full min-h-screen flex items-center justify-center py-20">
        <div className="relative w-[85%] max-w-5xl h-[80vh] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400 tracking-widest uppercase">Project Image 3</p>
        </div>
      </section>

      {/* Space at the bottom for scrolling */}
      <div className="h-40 w-full" />
    </div>
  );
}
