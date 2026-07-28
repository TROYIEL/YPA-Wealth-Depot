"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  X,
} from "lucide-react";



type Person = {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  email: string;
  twitter?: string;
};


const leaders: Person[] = [
  {
    name: "Obed Ben",
    role: "Managing Director",
    image: "/MD.webp",
    bio: `
    Obed Ben is the visionary Managing Director of Youth Platform Africa (YPA).
    He has over 18 years of leadership experience in agribusiness,
    financial inclusion and social enterprise.
    `,
    experience:
      "18+ years in leadership, agribusiness and financial management.",
    email: "obed@ypawealthdepot.com",
    
    twitter: "#",
  },

  {
    name: "JB Magezi",
    role: "Executive Director",
    image: "/ED.webp",
    bio:
      "JB Magezi provides strategic direction and ensures effective implementation of organizational goals.",
    experience:
      "12+ years in management and organizational development.",
    email: "jb@ypawealthdepot.com",
    
    twitter: "#",
  },

  {
    name: "Namatovu Mable",
    role: "General Manager",
    image: "/EGM.webp",
    bio:
      "Namatovu oversees operations and ensures excellent service delivery to members.",
    experience:
      "10+ years in financial operations and administration.",
    email: "mable@ypawealthdepot.com",
    
    twitter: "#",
  },
];



const staff: Person[] = [
  {
    name: "Favia",
    role: "Operations Manager",
    image: "/FAVIA.webp",
    bio:
      "Favia manages daily operations and ensures smooth service delivery.",
    experience:
      "8+ years in operations management.",
    email: "favia@ypawealthdepot.com",
    twitter:"#",
  },

  {
    name: "AHEREZA GERALD",
    role: "Credit Officer",
    image: "/AHEREZA.webp",
    bio:
      "Gerald helps members access responsible financial solutions.",
    experience:
      "6 years in SACCO operations.",
    email:"gerald@ypawealthdepot.com",
    
    twitter:"#",
  },


  {
    name:"Najuna Troy",
    role:"Customer Relations Officer",
    image:"/troy.webp",
    bio:
      "Troy ensures members receive excellent support.",
    experience:
      "5 years in customer relations.",
    email:"troy@ypawealthdepot.com",
    
    twitter:"#",
  },
];




export default function Leadership(){

const [selectedPerson,setSelectedPerson] =
useState<Person | null>(null);





const Card = ({
person,
index,
}:{
person:Person;
index:number;
}) => (

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index * .15
}}

onClick={()=>setSelectedPerson(person)}

className="
group
cursor-pointer
overflow-hidden
rounded-3xl
bg-white
shadow-xl
"

>


<div className="
relative
h-[350px]
">


<Image

src={person.image}

alt={person.name}

fill

className="
object-cover
transition
duration-500
group-hover:scale-110
"

/>



<div className="
absolute
inset-0
bg-linear-to-t
from-black/70
to-transparent
"/>


<div className="
absolute
bottom-6
left-6
text-white
">


<h3 className="
text-2xl
font-bold
">

{person.name}

</h3>


<p className="text-white/80">

{person.role}

</p>


</div>


</div>


</motion.div>

);




return (

<section className="bg-white py-20">


<div className="
mx-auto
max-w-6xl
px-6
">


<div className="text-center mb-14">


<span className="
text-sky-500
uppercase
tracking-[.3em]
text-sm
font-semibold
">

Leadership

</span>


<h2 className="
mt-4
text-4xl
font-bold
text-slate-900
">

Meet Our Leadership Team

</h2>


</div>




<div className="
grid
gap-10
md:grid-cols-3
">

{
leaders.map((person,index)=>(

<Card
key={person.name}
person={person}
index={index}
/>

))
}

</div>





<h2 className="
mt-24
mb-12
text-center
text-4xl
font-bold
text-sky-500
">

Staff Members

</h2>




<div className="
grid
gap-10
md:grid-cols-3
">

{
staff.map((person,index)=>(

<Card
key={person.name}
person={person}
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

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
p-5
"

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
">

<X/>

</button>



<div className="
grid
md:grid-cols-2
">


<div className="
relative
h-112.5
">

<Image

src={selectedPerson.image}

alt={selectedPerson.name}

fill

className="object-cover"

/>

</div>




<div className="p-8">


<h2 className="
text-3xl
font-bold
">

{selectedPerson.name}

</h2>


<p className="
text-sky-600
font-semibold
">

{selectedPerson.role}

</p>



<p className="
mt-5
text-slate-600
leading-8
">

{selectedPerson.bio}

</p>



<div className="
mt-6
bg-slate-100
rounded-xl
p-4
">

<b>
Experience
</b>

<p className="text-sm text-slate-600">

{selectedPerson.experience}

</p>

</div>





<div className="
mt-6
flex
gap-3
">


<a
href={`mailto:${selectedPerson.email}`}
className="
rounded-full
bg-sky-500
p-3
text-white
hover:scale-110
transition
">

<Mail size={20}/>

</a>



<a
href={selectedPerson.}
className="
rounded-full
bg-blue-700
p-3
text-white
hover:scale-110
transition
">
</a>




<a
href={selectedPerson.}
className="
rounded-full
bg-blue-600
p-3
text-white
hover:scale-110
transition
">



</a>




<a
href={selectedPerson.twitter}
className="
rounded-full
bg-black
p-3
text-white
hover:scale-110
transition
">

<Twitter size={20}/>

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
