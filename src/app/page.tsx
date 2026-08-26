import AnimatedImage from "@/components/AnimatedImage";

const PROJECTS: Record<string, string[]> = {
  "soft-focus": ["/images/000014.JPG", "/images/000018.JPG", "/images/000019.JPG"],
  "slow-drift": ["/images/000022.JPG", "/images/000028 2.JPG", "/images/000028.JPG"],
  "studio-wall-cast": ["/images/000032.JPG", "/images/000033.JPG", "/images/000034.JPG"],
  "shadows": ["/images/000037.JPG"],
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const projectSlug = (typeof resolvedParams.project === "string" ? resolvedParams.project : "soft-focus");
  
  const images = PROJECTS[projectSlug] || [];

  return (
    <div className="w-full flex flex-col items-center">
      {images.length > 0 ? (
        images.map((src, index) => (
          <section 
            key={`${projectSlug}-${index}`} 
            className="w-full min-h-screen flex items-center justify-center py-20 px-8"
          >
            <AnimatedImage 
              src={src} 
              alt={`Project image ${index + 1}`}
              delay={index * 0.4} 
              priority={true}
            />
          </section>
        ))
      ) : (
        <section className="w-full min-h-screen flex items-center justify-center">
          <p className="text-gray-400 tracking-widest uppercase text-sm">More images coming soon.</p>
        </section>
      )}

      {/* Space at the bottom for comfortable scrolling */}
      <div className="h-40 w-full" />
    </div>
  );
}
