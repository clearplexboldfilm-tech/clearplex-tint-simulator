let currentVehicle = "suv";
let currentTint = "90";

function changeVehicle(vehicle) {
    currentVehicle = vehicle;
    updateImage();
}

function changeTint(tint) {
    currentTint = tint;
    updateImage();
}

function updateImage() {

    document.getElementById("tintValue").innerText =
        currentTint + "% VLT";

    let filename =
        currentVehicle + "_" + currentTint + ".jpg";

    document.getElementById("carImage").src = filename;

    updateInfo();
}

function updateInfo() {

    const badge = document.getElementById("badge");

    if (
        currentTint === "20" ||
        currentTint === "35"
    ) {
        badge.innerText = "⭐ MOST POPULAR";
    } else {
        badge.innerText = "";
    }

    document
        .querySelectorAll(".vehicle-selector button")
        .forEach(btn => btn.classList.remove("active"));

    if(currentVehicle === "suv"){
        document
            .getElementById("suvBtn")
            .classList.add("active");
    } else {
        document
            .getElementById("sedanBtn")
            .classList.add("active");
    }

    document
        .querySelectorAll(".buttons button")
        .forEach(btn => btn.classList.remove("active"));

    document
        .getElementById("tint" + currentTint)
        .classList.add("active");
}

updateImage();
