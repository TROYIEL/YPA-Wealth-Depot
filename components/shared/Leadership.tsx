"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const leaders = [
  {
    name: "Obed Ben",
    role: "Managing Director",
    image: "/MD.webp",
    bio: `
    Obed Ben is the visionary Managing Director of Youth Platform Africa (YPA).
    He has over 18 years of leadership experience in agribusiness,
    financial inclusion and social enterprise.
    
    His leadership has helped build sustainable financial solutions
    that empower communities and create opportunities.
    `,
    experience:
      "18+ years in leadership, agribusiness and financial management.",
    email: "obed@ypawealthdepot.com",
  },


  {
    name: "JB Magezi",
    role: "Executive Director",
    image: "/ED.webp",
    bio: `
    JB Magezi provides strategic direction and ensures effective
    implementation of organizational goals.
    `,
    experience:
      "12+ years in management and organizational development.",
    email: "jb@ypawealthdepot.com",
  },


  {
    name: "Namatovu Mable",
    role: "General Manager",
    image: "/EGM.webp",
    bio: `
    Namatovu oversees operations and ensures excellent service delivery
    to members.
    `,
    experience:
      "10+ years in financial operations and administration.",
    email: "mable@ypawealthdepot.com",
  },
];



const staff = [

  {
    name:"Favia ",
    role:"Operations Manager",
    image:"/FAVIA.webp",
    bio:"Sarah manages daily operations and ensures smooth service delivery.",
    experience:"8+ years in operations management.",
    email:"sarah@ypawealthdepot.com"
  },


  {
    name:"AHEREZA GERALD",
    role:"Credit Officer",
    image:"/AHEREZA.webp",
    bio:"David helps members access responsible financial solutions.",
    experience:"6 years in SACCO operations.",
    email:"david@ypawealthdepot.com"
  },


  {
    name:"Najuna Troy",
    role:"Customer Relations Officer",
    image:"/troy.webp",
    bio:"Grace ensures members receive excellent support.",
    experience:"5 years in customer relations.",
    email:"grace@ypawealthdepot.com"
  }

];




export default function Leadership(){

const [selectedPerson,setSelectedPerson] = useState(null);



const Card = ({person,index}) => (

<motion.div

key={person.name}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index * 0.15
}}

onClick={()=>setSelectedPerson(person)}

className="
group cursor-pointer
overflow-hidden
rounded-2xl
bg-white
shadow-xl
"

>


<div className="
relative
h-87.5
overflow-hidden
">


<Image

src={person.image}

alt={person.name}

fill

sizes="
(max-width:768px) 100vw,
33vw
"

className="
object-cover
transition duration-500
group-hover:scale-110
"

/>



<div
className="
absolute inset-0
bg-linear-to-t
from-black/70
via-transparent
"
/>



<div
className="
absolute bottom-5 left-5
text-white
">

<h3 className="
text-2xl
font-bold
">

{person.name}

</h3>


<p className="
text-sm
text-slate-200
">

{person.role}

</p>


</div>


</div>


</motion.div>

);





return (

<section className="
bg-white
py-20
">


{/* HEADER */}

<div className="
mx-auto
mb-14
max-w-3xl
px-6
text-center
">


<span className="
text-sm
font-semibold
uppercase
tracking-[0.3em]
text-sky-500
">

Our Leadership

</span>


<h2 className="
mt-4
text-4xl
font-bold
text-slate-900
">

Meet The People Driving Our Vision

</h2>


<p className="
mt-4
text-slate-600
">

Experienced leaders committed to financial growth,
innovation and serving our members.

</p>


</div>





{/* LEADERS */}

<div className="
mx-auto
grid
max-w-6xl
gap-10
px-6
md:grid-cols-3
">


{
leaders.map((leader,index)=>(

<Card
key={leader.name}
person={leader}
index={index}
/>

))
}


</div>







{/* STAFF */}

<div className="
mx-auto
mt-24
max-w-6xl
px-6
">


<div className="
mb-12
text-center
">


<span className="
text-sm
font-semibold
uppercase
tracking-[0.3em]
text-sky-500
">


</span>


<h2 className="
mt-4
text-4xl
font-bold
text-sky-400
">

Staff Members

</h2>


<p className="
mt-4
text-red-600
">

Dedicated professionals committed to serving our members.

</p>


</div>





<div className="
grid
gap-10
md:grid-cols-3
">


{
staff.map((member,index)=>(

<Card

key={member.name}

person={member}

index={index}

/>

))
}


</div>


</div>









{/* MODAL */}


<AnimatePresence>


{
selectedPerson && (


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

onClick={()=>setSelectedPerson(null)}

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
px-5
"


>


<motion.div

initial={{
scale:.8
}}

animate={{
scale:1
}}

exit={{
scale:.8
}}

onClick={(e)=>e.stopPropagation()}

className="
relative
max-w-4xl
overflow-hidden
rounded-3xl
bg-white
shadow-2xl
"


>


<button

onClick={()=>setSelectedPerson(null)}

className="
absolute
right-5
top-5
z-10
rounded-full
bg-white
p-2
shadow
"

>

<X/>

</button>





<div className="
grid
md:grid-cols-2
">


<div className="
relative
h-[450px]
">


<Image

src={selectedPerson.image}

alt={selectedPerson.name}

fill

className="
object-cover
"

/>


</div>






<div className="
p-8
overflow-y-auto
max-h-[450px]
">


<h2 className="
text-3xl
font-bold
text-slate-900
">

{selectedPerson.name}

</h2>


<p className="
mt-2
font-semibold
text-sky-600
">

{selectedPerson.role}

</p>



<p className="
mt-6
leading-relaxed
text-slate-600
">

{selectedPerson.bio}

</p>



<div className="
mt-5
rounded-xl
bg-slate-100
p-4
">

<p className="font-semibold">

Experience

</p>


<p className="text-sm text-slate-600">

{selectedPerson.experience}

</p>


</div>





<div className="
mt-6
flex
gap-4
">


<a

href={`mailto:${selectedPerson.email}`}

className="
rounded-full
bg-sky-500
p-3
text-white
"

>

<Mail size={20}/>

</a>




<a

href="#"

className="
rounded-full
bg-slate-900
p-3
text-white
"

>

<Linkedin size={20}/>

</a>


</div>


</div>


</div>


</motion.div>



</motion.div>


)

}


</AnimatePresence>




</section>

);


}