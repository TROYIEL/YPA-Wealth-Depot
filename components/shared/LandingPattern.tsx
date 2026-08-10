import Image from "next/image";

export default function LandingPattern() {
  const logos = [
    { src: "/YPA logo .webp", alt: "YPA LOGO" },
    { src: "/mbuzi CHOMA logo_.webp", alt: "MBUZI CHOMA" },
    { src: "/Asor cash centre logo.webp", alt: "ASOR" },
    { src: "/JOHAKEE HOLDINGS.webp", alt: "JOHAKEE HOLDINGS" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="
            grid
            grid-cols-2
            items-center
            justify-items-center
            gap-x-8
            gap-y-10
            sm:grid-cols-4
            lg:gap-x-12
          "
        >
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-36 w-full items-center justify-center sm:h-40 lg:h-44"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={220}
                loading="lazy"
                className="
                  h-32
                  w-auto
                  max-w-55
                  object-contain
                  grayscale
                  opacity-90
                  transition
                  duration-300
                  ease-out
                  hover:grayscale-0
                  hover:opacity-100
                  hover:scale-105
                  sm:h-36
                  sm:max-w-62.5
                  lg:h-40
                  lg:max-w-70
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}