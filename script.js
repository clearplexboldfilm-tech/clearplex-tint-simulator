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
        badge.innerText = "🔥 Most Popular";
    } else {
        badge.innerText = "";
    }
}
