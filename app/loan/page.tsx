import Image from "next/image";
import Container from "@/components/ui/Container";
import { Building2, Car, CheckCircle, ShieldCheck } from "lucide-react";

export default function Loans() {
  const subtitle = "Loan Products";
  const title = "Loans";
  const description =
    "Flexible financing solutions designed to help members achieve their personal and business goals.";
  const currentPage = "Loans";
  const backgroundImage = "/loans 1.webp";
  return (
    <>

      {/* Hero */}
      <section className="relative h-105 overflow-hidden">

        <Image
          src={backgroundImage}
          alt="YPA Loans"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-900/80 to-blue-800/60" />


        <Container className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-4xl text-center text-white">

            <span className="
              inline-block rounded-full 
              bg-white/10 px-6 py-2
              text-sm font-semibold uppercase
              tracking-[0.25em]
              backdrop-blur-md
            ">
              {subtitle}
            </span>


            <h1 className="
              mt-6 
              text-5xl 
              font-bold 
              md:text-6xl
            ">
              {title}
            </h1>


            <p className="
              mx-auto mt-6
              max-w-3xl
              text-lg
              leading-8
              text-white/90
            ">
              {description}
            </p>


            <div className="mt-8 flex justify-center gap-3 text-white/80">

              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>

              <span className="font-semibold text-yellow-400">
                {currentPage}
              </span>

            </div>

          </div>

        </Container>

      </section>



      {/* Loan Introduction */}
      <section className="bg-white py-20">

        <Container>

          <div className="mx-auto max-w-6xl">


            <div className="text-center">

              <h2 className="
                text-5xl
                font-bold
                text-sky-500
              ">
                Financing That Moves You Forward
              </h2>


              <div className="
                mx-auto mt-5
                h-1 w-24
                rounded-full
                bg-red-700
              "></div>


              <p className="
                mx-auto
                mt-8
                max-w-4xl
                text-lg
                leading-9
                text-slate-600
              ">
                At YPA Wealth Depot, we provide reliable and affordable loan
                solutions designed to support personal growth, business
                expansion, asset acquisition, and long-term financial success.
              </p>

            </div>



           {/* Loan Cards */}
<div className="mt-16 grid gap-10 md:grid-cols-2">


{/* YPA Project Loans */}
<div className="group h-[520px] [perspective:1000px]">

  <div
    className="
      relative
      h-full
      w-full
      transition-transform
      duration-700
      [transform-style:preserve-3d]
      group-hover:[transform:rotateY(180deg)]
    "
  >


    {/* FRONT */}
    <div
      className="
        absolute
        inset-0
        rounded-3xl
        bg-white
        border
        border-blue-100
        p-10
        shadow-xl
        [backface-visibility:hidden]
      "
    >

      <div className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-blue-100
      ">
        <Building2
          className="text-sky-500"
          size={35}
        />
      </div>


      <h3 className="
        mt-8
        text-3xl
        font-bold
        text-slate-900
      ">
        YPA Project Loans
      </h3>


      <p className="
        mt-5
        text-lg
        leading-8
        text-slate-600
      ">
        Empowering YPA members with affordable financing for projects like
        goat rearing, beekeeping, and maize farming to build sustainable
        wealth and improve livelihoods.
      </p>


      <ul className="mt-8 space-y-4">

        {[
          "Flexible repayment plans",
          "Support for business growth",
          "Affordable interest rates",
          "Member-focused solutions",
        ].map((item)=>(
          <li
            key={item}
            className="flex items-center gap-3 text-slate-700"
          >
            <CheckCircle 
              className="text-sky-500"
              size={20}
            />

            {item}

          </li>
        ))}

      </ul>


      <p className="
        mt-8
        text-sm
        font-semibold
        text-sky-500
      ">
       
      </p>


    </div>



    {/* BACK IMAGE */}
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-3xl
        transform-[rotateY(180deg)]
        backface-hidden
      "
    >

      <Image
        src="/goats.png"
        alt="Project Loans"
        fill
        className="object-cover"
      />


      <div className="
        absolute
        inset-0
        bg-blue-950/70
        flex
        items-end
        p-10
        text-white
      ">

        <div>

          <h3 className="
            text-3xl
            font-bold
          ">
            Grow Your Project
          </h3>


          <p className="
            mt-3
            text-white/90
          ">
            Finance agriculture, businesses, and income-generating projects.
          </p>

        </div>

      </div>

    </div>


  </div>

</div>





{/* Car Logbook Loans */}
<div className="group h-130 perspective-[1000px]">

  <div
    className="
      relative
      h-full
      w-full
      transition-transform
      duration-700
      transform-3d
      group-hover:transform-[rotateY(180deg)]
    "
  >


    {/* FRONT */}
    <div
      className="
        absolute
        inset-0
        rounded-3xl
        bg-gradient-to-br
        from-sky-500
        to-blue-700
        p-10
        text-white
        shadow-xl
        backface-hidden
      "
    >

      <div className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-white/20
      ">
        <Car size={35}/>
      </div>



      <h3 className="
        mt-8
        text-3xl
        font-bold
      ">
        Car Logbook Loans
      </h3>


      <p className="
        mt-5
        text-lg
        leading-8
        text-blue-100
      ">
        Unlock the value of your vehicle and access quick financing while
        continuing to use your car.
      </p>



      <ul className="mt-8 space-y-4">

        {[
          "Fast loan processing",
          "Keep using your vehicle",
          "Competitive repayment terms",
          "Secure documentation process",
        ].map((item)=>(
          <li
            key={item}
            className="flex items-center gap-3"
          >

            <ShieldCheck size={20}/>

            {item}

          </li>
        ))}

      </ul>


      <p className="
        mt-8
        text-sm
        font-semibold
        text-white
      ">
        
      </p>


    </div>



    {/* BACK IMAGE */}
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-3xl
        transform-[rotateY(180deg)]
        backface-hidden
      "
    >

      <Image
        src="/ad2.webp"
        alt="Car Logbook Loans"
        fill
        className="object-cover"
      />


      <div className="
        absolute
        inset-0
        bg-blue-950/70
        flex
        items-end
        p-10
        text-white
      ">

        <div>

          <h3 className="
            text-3xl
            font-bold
          ">
            Drive Your Dreams
          </h3>


          <p className="
            mt-3
            text-white/90
          ">
            Get financing while keeping your vehicle on the road.
          </p>

        </div>


      </div>

    </div>


  </div>

</div>


</div>


          </div>

        </Container>

      </section>





      {/* CTA */}
<section className="
  relative
  overflow-hidden
  py-24
">

  {/* Background Image */}
  <Image
    src="/loan.webp"
    alt="Apply for loan"
    fill
    className="object-cover"
  />


  {/* Overlay */}
  <div className="
    absolute
    inset-0
    bg-blue-950/80
  "/>



  <Container>

    <div className="
      relative
      z-10
      mx-auto
      text-center
      text-white
     
    ">


      <h2 className="
        text-4xl
        font-bold
        md:text-5xl
      ">
        Ready To Grow Your Future?
      </h2>


      <p className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-white/85
      ">
      
      </p>



      <button className="
        mt-10
        rounded-full
        bg-sky-500
        px-10
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-sky-600
      ">
        Apply For A Loan
      </button>


    </div>


  </Container>


</section>


    </>
  );
}