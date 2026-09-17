function App(){
    return(
        React.createElement("div",{
            style:{
                backgroundColor:"black"
            },
            
        },
    React.createElement(Box),React.createElement(Box),React.createElement(Box))
    )

}



function Box(){

    return(
        React.createElement("div",{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:"green"
            }
        },"Box")
    );

}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));

