function changeTint(value){

    document.getElementById("tintValue").innerText = value + "%";

    let filename;

    if(value === "5"){
        filename = "suv_05.jpg";
    }else{
        filename = "suv_" + value + ".jpg";
    }

    document.getElementById("carImage").src = filename;
}
