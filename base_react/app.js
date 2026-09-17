const gomb = document.createElement("button");

gomb.textContent = "JS gomb";

gomb.onclick = function () {
alert("JS gomb");
};

const jsGomb = document.getElementById("jsgomb");

jsGomb.appendChild(gomb);

const rgomb=React.createElement(
    "button",{
    onClick:function(){
        alert("React gomb")
    }
    },
    "React gomb"
)

const kontener=React.createElement("div",{
    style:{
        backgroundColor:"green",
        width:"200px",
        height:"100px"
    }
},rgomb,rgomb,rgomb);

const root=ReactDOM.createRoot(document.getElementById("reactgomb"));

root.render(kontener);

