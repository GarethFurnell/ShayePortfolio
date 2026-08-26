import AnimatedImage from "@/components/AnimatedImage";

const PROJECTS: Record<string, string[]> = {
  "woodstock-laundry-ss25": [
    "/images/ss25/0dd2a2252965533.6a5cd12e96e46.jpg",
    "/images/ss25/1988d5252965533.6a5cd129f1c93.jpg",
    "/images/ss25/ba6b5d252965533.6a5cd12920e7d.jpg"
  ],
  "woodstock-laundry-ss26": [
    "/images/ss26/2a534e252947577.6a5c0b1e03402.jpg",
    "/images/ss26/7ec4aa252947577.6a5c0b1d50bb7.jpg",
    "/images/ss26/ee450c252947577.6a5c0b20e6047.jpg"
  ],
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const projectSlug = (typeof resolvedParams.project === "string" ? resolvedParams.project : "woodstock-laundry-ss26");
  
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
