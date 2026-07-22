export default function LandingPattern() {
    const logos = [
        { src: "/YPA logo .webp", alt: "YPA LOGO" },
        { src: "/mbuzi CHOMA logo_.webp", alt: "MBUZI CHOMA" },
        { src: "/Asor cash centre logo.webp", alt: "ASOR" },
        { src: "/JOHAKEE HOLDINGS.webp", alt: "JOHAKEE HOLDINGS" },
    ];
  
    return (
      <section className="bg-[#e9e9e9] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 items-center gap-x-14 gap-y-12 sm:grid-cols-4">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="
                    h-40 sm:h-24 w-auto object-contain
                    grayscale opacity-80
                    transition duration-300 ease-out
                    hover:grayscale-0 hover:opacity-100 hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }