import { NextResponse } from "next/server";

export type Staff = {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;

  subscriptionFee: number;

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
    name: "AHIMBISIBWE PATIENCE",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "32049305670",
    accountName: "AHIMBISIBWE PATIENCE"
  },

  {
    id: "BREC-002",
    name: "AHEBWA BRITAH",
    position: "BREC Staff",
    phone: "0769620070",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0769620070",
    mobileName: "AHEBWA BRITAH"
  },

  {
    id: "BREC-003",
    name: "AINEMBABAZI RUTH",
    position: "Relationship Officer",
    phone: "0776206320",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3202790624",
    accountName: "AINEMBABAZI RUTH"
  },

  {
    id: "BREC-004",
    name: "AKAKIKUNDA SHARON",
    position: "Agent Banking and Mobile Money",
    phone: "0764574178",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214246000462",
    accountName: "AKAKIKUNDA SHARON"
  },

  {
    id: "BREC-005",
    name: "ASIIMWE SYLIVIA",
    position: "Data Analyst",
    phone: "0793689129",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0793689129",
    mobileName: "ASIIMWE SYLIVIA"
  },

  {
    id: "BREC-006",
    name: "AMUMPAIRE EMILY",
    position: "Relationship Officer",
    phone: "0742577572",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742577572",
    mobileName: "AMUMPARE EMILY"
  },

  {
    id: "BREC-007",
    name: "ARINAITWE SYLIA",
    position: "BREC Staff",
    phone: "0708893144",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0708893144",
    mobileName: "ARINAITWE SYLIA"
  },

  {
    id: "BREC-008",
    name: "ATUKWASE EMMANUEL",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205187163",
    accountName: "ATUKWASE EMMANUEL"
  },

  {
    id: "BREC-009",
    name: "ATUKWASE JOHNSON",
    position: "BREC Staff",
    phone: "0777125049",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0777125049",
    mobileName: "ATUKWASE JOHNSON"
  },

  {
    id: "BREC-010",
    name: "AUTA DANIEL",
    position: "BREC Staff",
    phone: "0750098631",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0750098631",
    mobileName: "AUTA DANIEL"
  },

  {
    id: "BREC-011",
    name: "AWINJA EDITH",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205142541",
    accountName: "AWINJA EDITH"
  },

  {
    id: "BREC-012",
    name: "AYAMBA DARLEN",
    position: "BREC Staff",
    phone: "0775598465",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0775598465",
    mobileName: "AYAMBA DARLEN"
  },

  {
    id: "BREC-013",
    name: "BABIRYE MUHUYATIDIIN KASOMA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "210212003388",
    accountName: "BABIRYE MUHUYATIDIN"
  },

  {
    id: "BREC-014",
    name: "BAKKABULINDI ANDREW",
    position: "BREC Staff",
    phone: "0753141715",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0753141715",
    mobileName: "BAKKABULINDI ANDREW"
  },

  {
    id: "BREC-015",
    name: "BIIRA FORTUNATE",
    position: "Relationship Officer",
    phone: "0702376817",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3204980406",
    accountName: "BIIRA FORTUNATE"
  },

  {
    id: "BREC-016",
    name: "BIRABWA FARIDAH",
    position: "BREC Staff",
    phone: "0701581387",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0701581387",
    mobileName: "BIRABWA FARIDAH"
  },

  {
    id: "BREC-017",
    name: "DELIFIA GECHEMBA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3204739180",
    accountName: "GECHEMBA DELIPHIA"
  },

  {
    id: "BREC-018",
    name: "ELLIOT ESABU",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205052114",
    accountName: "ELLIOT ESABU"
  },

  {
    id: "BREC-019",
    name: "EUSEBE KASEKE MBIRIZI",
    position: "Relationship Officer",
    phone: "0782699491",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0782699491",
    mobileName: "KASEKE EUSEBE MBIRIZI"
  },

  {
    id: "BREC-020",
    name: "GUMIRA RICHARD",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "2142460000788",
    accountName: "GUMIRA RICHARD"
  },

  {
    id: "BREC-021",
    name: "IRASUBIZA YVES",
    position: "Relationship Officer",
    phone: "0787540173",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0787540173",
    mobileName: "IRASUBIZA YVES"
  },

  {
    id: "BREC-022",
    name: "KABALUNGI MAUREEN",
    position: "BREC Staff",
    phone: "0755905178",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0755905178",
    mobileName: "KABALUNGI MOREEN"
  },

  {
    id: "BREC-023",
    name: "KAITESI ESTHER",
    position: "BREC Staff",
    phone: "0784598488",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0784598488",
    mobileName: "KAYITESI ESTER"
  },

  {
    id: "BREC-024",
    name: "KAKOOZA GEORGE",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "205212009652",
    accountName: "KAKOOZA GEORGE"
  },

  {
    id: "BREC-025",
    name: "KALIZAANI AMOS",
    position: "BREC Staff",
    phone: "0780190080",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0780190080",
    mobileName: "KALIZAANI AMOS"
  },

  {
    id: "BREC-026",
    name: "KANAKULYA TREVOR",
    position: "BREC Staff",
    phone: "0774571333",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0774571333",
    mobileName: "MATOVU JALIA"
  },

  {
    id: "BREC-027",
    name: "KANANURA ANITA",
    position: "BREC Staff",
    phone: "0771140109",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0771140109",
    mobileName: "KANANURA ANITAH"
  },

  {
    id: "BREC-028",
    name: "KANSIIME RUTH NINDERERA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-029",
    name: "KASUMBA EMMANUEL",
    position: "BREC Staff",
    phone: "0740564142",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0740564142",
    mobileName: "KASUMBA EMMANUEL"
  },

  {
    id: "BREC-030",
    name: "KATO JOSHUA BOOSA",
    position: "BREC Staff",
    phone: "0773199886",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0773199886",
    mobileName: "MWESIGWA JOSIAH"
  },

  {
    id: "BREC-031",
    name: "KIHEMBO MELISA CONCEPTA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-032",
    name: "KIVUMBI CYRUS",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214212006300",
    accountName: "KIVUMBI CYRUS"
  },

  {
    id: "BREC-033",
    name: "KOBUSINGYE STELLA",
    position: "Relationship Officer",
    phone: "0753146856",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214212007041",
    accountName: "KOBUSINGYE STELLA"
  },

  {
    id: "BREC-034",
    name: "KOBUGABE ALLEN",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205533010",
    accountName: "ALLEN KOBUGABE"
  },

  {
    id: "BREC-035",
    name: "KUTEESA DAVIS MWAMBALA",
    position: "BREC Staff",
    phone: "0772003092",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0772003092",
    mobileName: "KUTEESA DAVIS MWAMBALA"
  },

  {
    id: "BREC-036",
    name: "KYASIIMIRE PRECIOUS",
    position: "BREC Staff",
    phone: "0703789536",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0703789536",
    mobileName: "KYASIMIRE PRECIOUS"
  },

  {
    id: "BREC-037",
    name: "KYOZIIRA W WILBERFORCE",
    position: "BREC Staff",
    phone: "0785227738",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0785227738",
    mobileName: "WILLIAM KYOZIRA NADIOPE"
  },

  {
    id: "BREC-038",
    name: "MAGALA GEORGE",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205598935",
    accountName: "MAGALA GEORGE"
  },

  {
    id: "BREC-039",
    name: "MBABAZI VIOLA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214212006570",
    accountName: "MBABAZI VIOLA"
  },

  {
    id: "BREC-040",
    name: "MIREMBE LEILAH LOUIS",
    position: "BREC Staff",
    phone: "0756138954",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0756138954",
    mobileName: "MIREMBE LOUIS"
  },

  {
    id: "BREC-041",
    name: "MPAYENDA LYDIA",
    position: "Marketing",
    phone: "0785227212",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205328371",
    accountName: "MPAYENDA LYDIA"
  },

  {
    id: "BREC-042",
    name: "MPUGA EDWARD",
    position: "BREC Staff",
    phone: "0731542365",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0731542365",
    mobileName: "MPUGA EDWARD"
  },

  {
    id: "BREC-043",
    name: "MUGABI MOSES TROY",
    position: "Software Engineer",
    phone: "0762939942",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0762939942",
    mobileName: "MOSES MUGABI"
  },

  {
    id: "BREC-044",
    name: "MUGISHA ASHIRAF",
    position: "BREC Staff",
    phone: "0786042718",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0786042718",
    mobileName: "AKITE GLORIA"
  },

  {
    id: "BREC-045",
    name: "MUKAMUGEMA JESCA",
    position: "Receptionist",
    phone: "0774904736",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3203287955",
    accountName: "MUKAMUGEMA JESCA"
  },

  {
    id: "BREC-046",
    name: "MUKASA ANDREW JACOB",
    position: "Relationship Officer",
    phone: "0703159918",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205278911",
    accountName: "MUKASA ANDREW JACOB"
  },

  {
    id: "BREC-047",
    name: "MUSISI SILAS",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "209212005836",
    accountName: "MUSISI SILAS"
  },

  {
    id: "BREC-048",
    name: "MUTESI DAPHINE",
    position: "BREC Staff",
    phone: "0745289932",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0745289932",
    mobileName: "MUTESI DAPHINE"
  },

  {
    id: "BREC-049",
    name: "MUYAMBI SAMUEL",
    position: "BREC Staff",
    phone: "0787804911",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0787804911",
    mobileName: "MUYAMBI SAMUEL"
  },

  {
    id: "BREC-050",
    name: "NAAVA AIDAH",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205555771",
    accountName: "NAAVA AIDAH"
  },

  {
    id: "BREC-051",
    name: "NABAKOOZA BETTY",
    position: "Relationship Officer",
    phone: "0772046830",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0772046830",
    mobileName: "NABAKOOZA BETTY"
  },

  {
    id: "BREC-052",
    name: "NABASA JANE",
    position: "BREC Staff",
    phone: "0731730660",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0731730660",
    mobileName: "NABAASA JANE"
  },

  {
    id: "BREC-053",
    name: "NABAWANDA SAMALI",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "200209014466",
    accountName: "NABAWANDA SAMALIE"
  },

  {
    id: "BREC-054",
    name: "NABBALE DORCUS",
    position: "BREC Staff",
    phone: "0767099861",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0767099861",
    mobileName: "NABBALE DORCUS"
  },

  {
    id: "BREC-055",
    name: "NABULAMU DENIS",
    position: "BREC Staff",
    phone: "0742164925",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742164925",
    mobileName: "NABULAMU DENIS"
  },

  {
    id: "BREC-056",
    name: "NAGAWA CATHERINE",
    position: "Relationship Officer",
    phone: "0700316337",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205254996",
    accountName: "NAGAWA CATHERINE"
  },

  {
    id: "BREC-057",
    name: "NAGAWA GORRETI",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205124556",
    accountName: "NAGAWA GORRETI"
  },

  {
    id: "BREC-058",
    name: "NAHABWE EDSON",
    position: "Relationship Officer",
    phone: "0704213974",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0775889243",
    mobileName: "NAHABWE EDSON"
  },

  {
    id: "BREC-059",
    name: "NAHWERA COMFORT",
    position: "Relationship Officer",
    phone: "0763590625",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0770747117",
    mobileName: "NAHWERA COMFORT"
  },

  {
    id: "BREC-060",
    name: "NAKIBUULE HOPE",
    position: "BREC Staff",
    phone: "0742144610",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742144610",
    mobileName: "NAMALA HOPE"
  },

  {
    id: "BREC-061",
    name: "NAKYEYUNE EVELYN",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "209212006404",
    accountName: "NAKYEYUNE EVELYNE"
  },

  {
    id: "BREC-062",
    name: "NALUYIMA TEOPISTA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214246000450",
    accountName: "NALUYIMA TEOPISTA"
  },

  {
    id: "BREC-063",
    name: "NAMAKULA MILLY",
    position: "Relationship Officer",
    phone: "0793891345",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0793891345",
    mobileName: "NAMAKULA MILLY"
  },

  {
    id: "BREC-064",
    name: "NAMALA HOPE",
    position: "BREC Staff",
    phone: "0742144610",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742144610",
    mobileName: "NAMALA HOPE"
  },

  {
    id: "BREC-065",
    name: "NAMANDA AGNES",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3204951360",
    accountName: "NAMANDA AGNES"
  },

  {
    id: "BREC-066",
    name: "NAMARA MERON",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-067",
    name: "NAMATAH NURIAT",
    position: "BREC Staff",
    phone: "0794816177",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0794816177",
    mobileName: "NAMATA NURIAT"
  },

  {
    id: "BREC-068",
    name: "NAMBOGWE ZAHARAH",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3204930070",
    accountName: "NAMBOGWE ZAHARAH"
  },

  {
    id: "BREC-069",
    name: "NAMIRIMU STELLA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "208212009589",
    accountName: "NAMIRIMU STELLA"
  },

  {
    id: "BREC-070",
    name: "NAMUGAMBA ANNET",
    position: "BREC Staff",
    phone: "0703471011",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0703471011",
    mobileName: "NAMUGAMBA ANNET"
  },

  {
    id: "BREC-071",
    name: "NAMUWAYA MADINAH",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "209212006005",
    accountName: "NAMUWAYA MADINAH"
  },

  {
    id: "BREC-072",
    name: "NANGONZI TEDDY",
    position: "BREC Staff",
    phone: "0751420535",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0751420535",
    mobileName: "NANGONZI TEDDY"
  },

  {
    id: "BREC-073",
    name: "NANSAMBA JOYCE LISA",
    position: "Relationship Officer",
    phone: "0703839184",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "209212006340",
    accountName: "NANSAMBA JOYCE LISA"
  },

  {
    id: "BREC-074",
    name: "NANSAMBA MARIAM",
    position: "BREC Staff",
    phone: "0742226293",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742226293",
    mobileName: "NANSAMBA MARIAM"
  },

  {
    id: "BREC-075",
    name: "NANTEZA JULIET",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205338165",
    accountName: "NANTEZA JULIET"
  },

  {
    id: "BREC-076",
    name: "NANTONGO ESTHER",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "214246001125",
    accountName: "NANTONGO ESTHER"
  },

  {
    id: "BREC-077",
    name: "NANTUME RASHIDAH",
    position: "BREC Staff",
    phone: "0759927725",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0759927725",
    mobileName: "SSENTAMU ABDULSWABUR"
  },

  {
    id: "BREC-078",
    name: "NASSAZI PAULINE",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "FTB",
    accountNumber: "209212006309",
    accountName: "NASAAZI PAULINE"
  },

  {
    id: "BREC-079",
    name: "NASSOLO DIANA",
    position: "Relationship Officer",
    phone: "0760719169",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0760719169",
    mobileName: "NASSOLO DIANA"
  },

  {
    id: "BREC-080",
    name: "NASSUUNA STELLA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3201899847",
    accountName: "NASSUUNA STELLA"
  },

  {
    id: "BREC-081",
    name: "NATOOLO RITAH",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3200227855",
    accountName: "NATOOLO RITAH"
  },

  {
    id: "BREC-082",
    name: "NATUKUNDA CALEB",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205448943",
    accountName: "NATUKUNDA CALEB"
  },

  {
    id: "BREC-083",
    name: "NATURINDA MERAB",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-084",
    name: "NAYEBALE AINEMBABAZI",
    position: "BREC Staff",
    phone: "0742875191",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742875191",
    mobileName: "NAYEBALE AINEMBABAZI"
  },

  {
    id: "BREC-085",
    name: "NAYEBALE SHARON",
    position: "BREC Staff",
    phone: "0768435985",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0768435985",
    mobileName: "NAYEBALE SHARON"
  },

  {
    id: "BREC-086",
    name: "NAYEBARE KETRAH",
    position: "BREC Staff",
    phone: "0782928588",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0782928588",
    mobileName: "NAYEBARE KETRAH"
  },

  {
    id: "BREC-087",
    name: "NGOZI HENRY",
    position: "BREC Staff",
    phone: "0730228794",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0730228794",
    mobileName: "NGOZI HENRY"
  },

  {
    id: "BREC-088",
    name: "NINSIIMA JEMIMAH",
    position: "Relationship Officer",
    phone: "0787116936",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0787116936",
    mobileName: "NINSIIMA JEMIMAH"
  },

  {
    id: "BREC-089",
    name: "NUWABASA LOY",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "32055404390",
    accountName: "LOY NUWABASA"
  },

  {
    id: "BREC-090",
    name: "NUWARINDA ANTHONY",
    position: "Relationship Officer",
    phone: "0700947510",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205375792",
    accountName: "NUWARINDA ANTHONY"
  },

  {
    id: "BREC-091",
    name: "NYAKAISIKI HAJARA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-092",
    name: "NYAKATO REBECCA",
    position: "Relationship Officer",
    phone: "0788772821",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0788772821",
    mobileName: "NYAKATO REBECCA"
  },

  {
    id: "BREC-093",
    name: "NYIRAMUGISHA MARIA",
    position: "BREC Staff",
    phone: "0789249136",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0789249136",
    mobileName: "DENISE JACOB"
  },

  {
    id: "BREC-094",
    name: "ORISHABA PROVIA",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205457401",
    accountName: "ORISHABA PROVIA"
  },

  {
    id: "BREC-095",
    name: "RINA NSHEMEREIRWE",
    position: "BREC Staff",
    phone: "0757386778",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0757386778",
    mobileName: "TWINE JANET"
  },

  {
    id: "BREC-096",
    name: "RUYOOKA BENJAMIN TIMOTHY",
    position: "BREC Staff",
    phone: "0770879005",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0770879005",
    mobileName: "RUYOOKA BENJAMIN TIMOTHY"
  },

  {
    id: "BREC-097",
    name: "SENTAMU JOHN",
    position: "BREC Staff",
    phone: "0789178819",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0789178819",
    mobileName: "SENTAMU JOHN"
  },

  {
    id: "BREC-098",
    name: "SHARON KANSHABE",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0777467708",
    mobileName: "KANSHABE SHARON"
  },

  {
    id: "BREC-099",
    name: "SSEMANDA DENIS",
    position: "Sales Officer",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0708670395",
    mobileName: "SSEMANDA DENIS"
  },

  {
    id: "BREC-100",
    name: "SSEMBOGA TAYIBU",
    position: "Media",
    phone: "0753116010",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205137042",
    accountName: "SSEMBOGA TAIBU"
  },

  {
    id: "BREC-101",
    name: "SSEMWANGA SUDAISI",
    position: "Relationship Manager",
    phone: "0768301751",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205472486",
    accountName: "SSEMWANGA SUDAISI"
  },

  {
    id: "BREC-102",
    name: "SSERUNKUMA DERRICK RICKY",
    position: "BREC Staff",
    phone: "0742585366",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0742585366",
    mobileName: "SSERUNKUMA DERRICK"
  },

  {
    id: "BREC-103",
    name: "TUMUHAIRWE ASHLEY",
    position: "BREC Staff",
    phone: "0701625357",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0701625357",
    mobileName: "TUMUHAIRWE ASHLEY"
  },

  {
    id: "BREC-104",
    name: "UWITONZE SANDRINE",
    position: "Receptionist",
    phone: "0781899745",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0781899745",
    mobileName: "LULE MARTIN"
  },

  {
    id: "BREC-105",
    name: "KANSIIME KELLEN",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3205204793",
    accountName: "KANSIIME KELLEN"
  },

  {
    id: "BREC-106",
    name: "AHIMBISIBWE LIVINGSTONE",
    position: "BREC Staff",
    phone: "0770716474",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0770716474",
    mobileName: "ARINITWE JOAN"
  },

  {
    id: "BREC-107",
    name: "AHABWE FAITH",
    position: "BREC Staff",
    phone: "0765600621",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0765600621",
    mobileName: "AHABWE FAITH"
  },

  {
    id: "BREC-108",
    name: "ATUHAIRE PHIONAH",
    position: "BREC Staff",
    phone: "0759364449",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0759364449",
    mobileName: "ATUHAIRE PHIONAH"
  },

  {
    id: "BREC-109",
    name: "ATUHAIRE REBECCA",
    position: "BREC Staff",
    phone: "0787657487",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0787657487",
    mobileName: "ATUHAIRE REBECCA"
  },

  {
    id: "BREC-110",
    name: "ESPERANCE KAYIRANGWA",
    position: "BREC Staff",
    phone: "0784241005",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0784241005",
    mobileName: "KAYIRANGWA ESPERANCE"
  },

  {
    id: "BREC-111",
    name: "KAGUMBA BRIAN",
    position: "BREC Staff",
    phone: "0747434013",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0747434013",
    mobileName: "ALLEN NAKAYIKI"
  },

  {
    id: "BREC-112",
    name: "KIBIRIGE JOHN MARY",
    position: "BREC Staff",
    phone: "0747434013",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0747434013",
    mobileName: "NAKAYIKI"
  },

  {
    id: "BREC-113",
    name: "MBABAZI ENOS",
    position: "BREC Staff",
    phone: "",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "",
    mobileNumber: "",
    mobileName: ""
  },

  {
    id: "BREC-114",
    name: "MUWESI STUART BENON",
    position: "BREC Staff",
    phone: "0757190669",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0757190669",
    mobileName: "JOSEPHINE DEMBE"
  },

  {
    id: "BREC-115",
    name: "NABUKENA MERCY EVELYN",
    position: "BREC Staff",
    phone: "0709349466",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "AIRTEL",
    mobileNumber: "0709349466",
    mobileName: "MATOVU DENIS"
  },

  {
    id: "BREC-116",
    name: "NAMAGANDA CHOICE ESTHER",
    position: "BREC Staff",
    phone: "0768320575",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0768320575",
    mobileName: "NAMAGANDA CHOICE ESTER"
  },

  {
    id: "BREC-117",
    name: "NAMATOVU PAVIN",
    position: "BREC Staff",
    phone: "0787517086",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0787517086",
    mobileName: "NAMATOVU PARVIN MATOVU"
  },

  {
    id: "BREC-118",
    name: "NYANZULA ALLEN",
    position: "BREC Staff",
    phone: "0776860605",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0776860605",
    mobileName: "NYANZULA ALLEN"
  },

  {
    id: "BREC-119",
    name: "TAKATAMOE MATAYO",
    position: "BREC Staff",
    phone: "0794240377",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0794240377",
    mobileName: "TAKATAMOE MATAYA"
  },
{
    id: "BREC-120",
    name: "MITEGO RACHEAL",
    position: "BREC- STAFF",
    phone: "0774636183",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "bank",
    bankName: "CENTENARY",
    accountNumber: "3203115013",
    accountName: "MITEGO RACHEAL"
  },
   {
    id: "BREC-121",
    name: "RUKYAMA WILLIAM",
    position: "BREC Staff",
    phone: "0788330668",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0788330668",
    mobileName: "RUKYAMA WILLIAM"
  },
   {
    id: "BREC-122",
    name: "NABUUFA SUZAN",
    position: "BREC Staff",
    phone: "0789080705",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0789080705",
    mobileName: "NABUUFA SUZAN"
  },
  {
    id: "BREC-123",
    name: "ASIIMWE WILFRED",
    position: "BREC Staff",
    phone: "0702355637",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0702355637",
    mobileName: "ASIIMWE WILFRED"
  },
  {
    id: "BREC-124",
    name: "NAMPUUGA JACKLINE",
    position: "BREC Staff",
    phone: "0773418394",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0773418394",
    mobileName: "NAMPUUGA JACKLINE"
  },
  {
    id: "BREC-125",
    name: "AINEMBABAZI RAYORAH",
    position: "BREC Staff",
    phone: "0761766559",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0761766559",
    mobileName: "AGABA JOHNSON"
  },
  {
    id: "BREC-126",
    name: "nansereko Ruth kansiime",
    position: "BREC Staff",
    phone: "0767421978",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0767421978",
    mobileName: "nansereko Ruth kansiime"
  },
  {
    id: "BREC-127",
    name: "Kyozira William Wilberforce",
    position: "BREC Staff",
    phone: "0785227738",
    email: "",
    subscriptionFee: 20000,
    paymentMethod: "mobile",
    mobileNetwork: "MTN",
    mobileNumber: "0785227738",
    mobileName: "Kyozira William Wilberforce"
  },

];

export async function GET() {
  return NextResponse.json({
    success: true,
    staff
  });
}
