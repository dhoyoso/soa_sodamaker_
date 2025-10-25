// components/video-section.tsx
export function VideoSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">See it in Action</h2>
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-xl">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
