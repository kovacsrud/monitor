let p1=new Promise((resolve,reject)=>{
    resolve(150);
});
p1.then(ertek=>console.log(ertek));

console.log(p1);

let p2=function(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("Az a nem lehet kisebb mint b!")
        }
    });
}

p2(100,50).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

p2(100,50).then(ertek=>p1).then(ertek=>p2(ertek,10)).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

function novel(szam){
    return szam+60;
}



p2(50,5).then(ertek=>p2(ertek,10)).then(ertek=>novel(ertek)).then(ertek=>console.log("Növel függvénnyel:"+ertek)).catch(err=>console.log(err));


async function promiseok() {
    try {
        let adat1=await p1;
        let adat2=await p2(adat1,10);

        console.log("Async:"+adat2);
        
        
    } catch (error) {
        console.log(error);
    }    
}

promiseok();

const all=Promise.all([p1,p2(20,10)]);

all.then(ertekek=>console.log(ertekek)).catch(err=>console.log(err));