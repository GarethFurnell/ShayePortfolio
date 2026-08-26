"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PROJECTS = [
  { name: "Woodstock Laundry SS26", slug: "woodstock-laundry-ss26" },
  { name: "Woodstock Laundry SS25", slug: "woodstock-laundry-ss25" },
];

export default function Sidebar() {
  const searchParams = useSearchParams();
  const currentProject = searchParams.get("project") || "woodstock-laundry-ss26";

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 md:w-80 flex flex-col justify-between p-8 md:p-12 border-r border-gray-100 bg-white z-50">
      <div>
        <h1 className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-black">
          Film By Shaye
        </h1>
        <p className="text-xs text-gray-400 mb-8 max-w-[150px] leading-relaxed">
          light bender
        </p>
        
        <nav className="flex flex-col space-y-3">
          {PROJECTS.map((project) => {
            const isActive = currentProject === project.slug;
            return (
              <Link 
                key={project.slug} 
                href={`/?project=${project.slug}`}
                className={`text-xs transition-colors ${
                  isActive 
                    ? "text-black font-medium" 
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {project.name}
              </Link>
            );
          })}
          
          <span className="text-xs text-gray-300 italic cursor-not-allowed pt-2">
            coming soon...
          </span>
        </nav>
      </div>
      
      <div className="flex flex-col space-y-8 mt-12">
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-xs text-black hover:text-gray-500 transition-colors">CV</a>
          <a href="#" className="text-xs text-black hover:text-gray-500 transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/filmbyshaye?igsi=dnN1NnBjcHJiMmJx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          <a href="#" aria-label="Share" className="text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
