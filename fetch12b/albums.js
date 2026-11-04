

let root=document.getElementById('root');

let kepek=document.createElement('div');
kepek.setAttribute('class','flex flex-row flex-wrap items-center justify-center')

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(adat=>{
    
    adat.forEach(item => {
        let kontener=document.createElement('div');
        kontener.setAttribute('class','flex flex-col items-center justify-center m-2 bg-sky-200 p-5 rounded-xl w-96');
        let title=document.createElement('p');
        title.setAttribute('class','text-2xl text-center');
        title.textContent=item.title;
        let image=document.createElement('img');
        image.src=item.url;
        image.setAttribute('class','w-96 rounded-xl');
        kontener.appendChild(title);        
        kontener.appendChild(image);
        kepek.appendChild(kontener);
    });

    
})
.catch(err=>alert(err));

root.appendChild(kepek);