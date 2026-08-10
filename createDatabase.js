const sdk = require("node-appwrite");


const client = new sdk.Client();

client
.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("6a6b0cab000be48d726e")
.setKey("standard_dbcec112cdd0b5b7671d8e4200f0dcb00cfa3b22468b3ab16b6782398aeb34dcf903158e578801ecd21463d1178b245621b76d6ac899dd1ed166c1d002201999cf6d1fd588d258410772979bff66ceda46be1ad5fab2df85b5cb4aa8dee0632809d57b4d6d95c9c33ecb9387a7f1c49e3f0bd38772cc6763e0f0cf69a885beed");


const databases = new sdk.Databases(client);


async function create(){

const database = await databases.create(
"ypa_database",
"YPA Database"
);

console.log(database);


const collections = [

{
id:"users_profile",
name:"Users Profile"
},

{
id:"members",
name:"Members"
},

{
id:"savings_accounts",
name:"Savings Accounts"
},

{
id:"shares",
name:"Shares"
},

{
id:"member_requests",
name:"Member Requests"
},

{
id:"notifications",
name:"Notifications"
},

{
id:"loans",
name:"Loans"
},

{
id:"loan_repayments",
name:"Loan Repayments"
},

{
id:"transactions",
name:"Transactions"
}

];


for(const col of collections){

await databases.createCollection(
"ypa_database",
col.id,
col.name
);

console.log(
`${col.name} created`
);

}


}


create();