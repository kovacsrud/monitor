export default async function Cars(){

    //ne saját api hívás legyen!!
    const keres=await fetch('http://localhost:3000/api/customers');
    const customers=await keres.json();

    return (
        <div>
        <h1 className="text-center text-2xl text-red-700">Cars</h1>
        <div>
            {
                customers.map((customer,i)=>(<p key={i}>{customer.first_name} {customer.last_name}</p>))
            }
        </div>
        </div>
    )
}