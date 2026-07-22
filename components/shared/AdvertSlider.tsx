import Image from "next/image";

const adverts = [
  "/ad1.webp",
  "/ad2.webp",
  "/ad3.webp",
  "/ad4.webp",
];

export default function AdvertSlider() {
  return (
    <section className="bg-slate-50 py-10 md:py-16">

      <div className="mb-8 px-4 text-center md:mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 md:text-sm">
          Latest Promotions
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Featured Adverts
        </h2>
      </div>


      <section className="overflow-hidden bg-slate-100 py-8 md:py-10">

        <div className="slider">
          <div className="slide-track">

            {[...adverts, ...adverts].map((image, index) => (

              <div
                key={index}
                className="
                mx-3
                h-[280px]
                w-[280px]
                shrink-0
                overflow-hidden
                rounded-xl
                bg-white
                shadow-xl

                sm:h-[350px]
                sm:w-[350px]

                md:mx-5
                md:h-[450px]
                md:w-[450px]

                lg:h-[500px]
                lg:w-[500px]
                "
              >

                <Image
                  src={image}
                  alt={`Advert ${index + 1}`}
                  width={2000}
                  height={2000}
                  sizes="
                  (max-width:640px) 280px,
                  (max-width:768px) 350px,
                  (max-width:1024px) 450px,
                  500px
                  "
                  className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                  "
                />

              </div>

            ))}

          </div>
        </div>

      </section>

    </section>
  );
}