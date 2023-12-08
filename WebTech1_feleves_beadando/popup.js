document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("ageVerificationPopup");
    const confirmButtonYes = document.getElementById("confirmButtonYes");
    const confirmButtonNo = document.getElementById("confirmButtonNo");

    function showPopup() {
        popup.style.display = "flex";
    }

    confirmButtonYes.addEventListener("click", function () {
        alert("Kellemes időtöltést a honlapunkot!");
        popup.style.display = "none";

    });

    confirmButtonNo.addEventListener("click", function () {
        alert("Te nem használhatod az oldalt!");
        popup.style.display = "none";
        window.location.href = "https://www.regiojatek.hu/marka-Nerf.html?gad_source=1&gclid=CjwKCAiAmsurBhBvEiwA6e-WPAePYVzrxeaN6cozAgOtTeRW6trKWTLinWfaIgmcLDD4P694R0Yz_RoC8tcQAvD_BwE";
    });

    showPopup();
});

