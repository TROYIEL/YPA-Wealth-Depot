import { NextResponse } from "next/server";

export type Staff = {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;

  paymentMethod: "mobile" | "bank";

  mobileNetwork?: string;
  mobileNumber?: string;
  mobileName?: string;

  bankName?: string;
  accountNumber?: string;
  accountName?: string;
};

const staff: Staff[] = [

  {
    id: "BREC-001",
    name: "DAPHINE MUTESI",
    position: "BREC Youth Empowerment",
    phone: "0745289932",
    email: "mutesidaphine88@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0745289932",
    mobileName: "DAPHINE MUTESI"
  },

  {
    id: "BREC-002",
    name: "NAGAWA CATHERINE",
    position: "Relationship Officer",
    phone: "0700316337",
    email: "nagawacate@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0700316337",
    mobileName: "NAGAWA CATHERINE"
  },

  {
    id: "BREC-003",
    name: "ASHLEY TUMUHAIRWE",
    position: "BREC Youth Empowerment",
    phone: "0703087748",
    email: "ashleytruett700@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0703087748",
    mobileName: "ASHLEY TUMUHAIRWE"
  },

  {
    id: "BREC-004",
    name: "NAHABWE EDSON",
    position: "Relationship Officer",
    phone: "0704213974",
    email: "guardianheart545@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0704213974",
    mobileName: "NAHABWE EDSON"
  },

  {
    id: "BREC-005",
    name: "MUKASA ANDREW JACOB",
    position: "Relationship Officer",
    phone: "0703159918",
    email: "andrewjacob647647@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0703159918",
    mobileName: "MUKASA ANDREW JACOB"
  },

  {
    id: "BREC-006",
    name: "KASEKE EUSEBE MBIRIZI",
    position: "Relationship Officer",
    phone: "0782699491",
    email: "drkaseke@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0782699491",
    mobileName: "KASEKE EUSEBE MBIRIZI"
  },

  {
    id: "BREC-007",
    name: "KOBUSINGYE STELLA STELLA",
    position: "Relationship Officer",
    phone: "0753146856",
    email: "kobusingyestella81@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0753146856",
    mobileName: "KOBUSINGYE STELLA STELLA"
  },

  {
    id: "BREC-008",
    name: "COMFORT NAHWERA",
    position: "Relationship Officer",
    phone: "0763590625",
    email: "nahweracomfort64@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0763590625",
    mobileName: "COMFORT NAHWERA"
  },

  {
    id: "BREC-009",
    name: "MUKAMUGEMA JESCA",
    position: "Receptionist",
    phone: "0774904736",
    email: "Mukamjesca@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0774904736",
    mobileName: "MUKAMUGEMA JESCA"
  },

  {
    id: "BREC-010",
    name: "SSEMWANGA SUDAISI",
    position: "Relationship Manager",
    phone: "0768301751",
    email: "s99790399@gmail.com",
    paymentMethod: "bank",
    bankName: "",
    accountNumber: "",
    accountName: "SSEMWANGA SUDAISI"
  },

  {
    id: "BREC-011",
    name: "UWITONZE SANDRINE",
    position: "Receptionist",
    phone: "0781899745",
    email: "uwitonzsandrine2000@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0781899745",
    mobileName: "UWITONZE SANDRINE"
  },

  {
    id: "BREC-012",
    name: "AINEMBABAZI RUTH",
    position: "Relationship Officer",
    phone: "0776206320",
    email: "ainembaziruth614@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0776206320",
    mobileName: "AINEMBABAZI RUTH"
  },

  {
    id: "BREC-013",
    name: "NABAKOOZA BETTY",
    position: "Relationship Officer",
    phone: "0772046830",
    email: "nabakoozabetty@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0772046830",
    mobileName: "NABAKOOZA BETTY"
  },

  {
    id: "BREC-014",
    name: "AMUMPAIRE EMILY",
    position: "Relationship Officer",
    phone: "0742577572",
    email: "amumpaireemily2@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0742577572",
    mobileName: "AMUMPAIRE EMILY"
  },

  {
    id: "BREC-015",
    name: "NINSIIMA JEMIMAH",
    position: "Relationship Officer",
    phone: "0787116936",
    email: "ninsiimajemimah44@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0787116936",
    mobileName: "NINSIIMA JEMIMAH"
  },

  {
    id: "BREC-016",
    name: "SSEMMANDA DENIS",
    position: "Sales Officer",
    phone: "0708670395",
    email: "dk017710@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0708670395",
    mobileName: "SSEMMANDA DENIS"
  },

  {
    id: "BREC-017",
    name: "NASSOLO DIANA",
    position: "Relationship Officer",
    phone: "0760719169",
    email: "diananassolo92@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0760719169",
    mobileName: "NASSOLO DIANA"
  },

  {
    id: "BREC-018",
    name: "NABUUFU SUSAN",
    position: "Public Relations Officer",
    phone: "0704454996",
    email: "nabuufususan285@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0704454996",
    mobileName: "NABUUFU SUSAN"
  },

  {
    id: "BREC-019",
    name: "LYDIA MPAYENDA",
    position: "Marketing",
    phone: "0785227212",
    email: "mpayendalydia@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0785227212",
    mobileName: "LYDIA MPAYENDA"
  },

  {
    id: "BREC-020",
    name: "ASIIMWE SYLIVIA",
    position: "Data Analyst",
    phone: "0793689129",
    email: "syliviaasiimwe799@gmail.com",
    paymentMethod: "bank",
    bankName: "",
    accountNumber: "",
    accountName: "ASIIMWE SYLIVIA"
  },

  {
    id: "BREC-021",
    name: "AKAKIKUNDA SHARON",
    position: "Agent Banking and Mobile Money",
    phone: "0764574178",
    email: "akakikundasharon2000@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0764574178",
    mobileName: "AKAKIKUNDA SHARON"
  },

  {
    id: "BREC-022",
    name: "MARIAM NANSAMBA",
    position: "Relationship Officer",
    phone: "0742226293",
    email: "mini7796402@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0742226293",
    mobileName: "MARIAM NANSAMBA"
  },

  {
    id: "BREC-023",
    name: "NUWARINDA ANTONY",
    position: "Relationship Officer",
    phone: "0700947510",
    email: "nuwarindaantono@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0700947510",
    mobileName: "NUWARINDA ANTONY"
  },

  {
    id: "BREC-024",
    name: "AGNES NAMANDA",
    position: "Relationship Officer",
    phone: "0757226991",
    email: "namandaagnes@icloud.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0757226991",
    mobileName: "AGNES NAMANDA"
  },

  {
    id: "BREC-025",
    name: "BIIRA FORTUNATE",
    position: "Relationship Officer",
    phone: "0702376817",
    email: "kfortunatek2@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0702376817",
    mobileName: "BIIRA FORTUNATE"
  },

  {
    id: "BREC-026",
    name: "EMMANUEL ATUKWASE",
    position: "Relationship Officer",
    phone: "0743431576",
    email: "atipabaraka@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0743431576",
    mobileName: "EMMANUEL ATUKWASE"
  },

  {
    id: "BREC-027",
    name: "NANSAMBA JOYCE LISA",
    position: "Relationship Officer",
    phone: "0703839184",
    email: "lisacarson444@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0703839184",
    mobileName: "NANSAMBA JOYCE LISA"
  },

  {
    id: "BREC-028",
    name: "NAMAKULA MILLY",
    position: "Relationship Officer",
    phone: "0793891345",
    email: "millynamakula934@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0793891345",
    mobileName: "NAMAKULA MILLY"
  },

  {
    id: "BREC-029",
    name: "NYAKATO REBECCA",
    position: "Relationship Officer",
    phone: "0788772821",
    email: "beckycushie6@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0788772821",
    mobileName: "NYAKATO REBECCA"
  },

  {
    id: "BREC-030",
    name: "IRASUBIZA YVES",
    position: "Relationship Officer",
    phone: "0787540173",
    email: "irasubizayves36@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0787540173",
    mobileName: "IRASUBIZA YVES"
  },

  {
    id: "BREC-031",
    name: "MUGABI MOSES TROY",
    position: "Software Engineer",
    phone: "0762939942",
    email: "mugabimoses07@gmail.com",
    paymentMethod: "bank",
    bankName: "",
    accountNumber: "",
    accountName: "MUGABI MOSES TROY"
  },

  {
    id: "BREC-032",
    name: "MIREMBE LOUISLEILAH",
    position: "Relationship Officer",
    phone: "0756138954",
    email: "mirembeleilahlouis@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0756138954",
    mobileName: "MIREMBE LOUISLEILAH"
  },

  {
    id: "BREC-033",
    name: "SSEMBOGA TAIBU",
    position: "Media",
    phone: "0753116010",
    email: "ssembogat@gmail.com",
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "0753116010",
    mobileName: "SSEMBOGA TAIBU"
  }

];

export async function GET() {

  return NextResponse.json({
    success: true,
    staff
  });

}