document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const btnHariIni = document.getElementById("btn-hari-ini");
    const btnPekanIni = document.getElementById("btn-pekan-ini");
    const btnKaumBeriman = document.getElementById("btn-kaum-beriman");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            alert("Menu navigasi utama dibuka.");
        });
    }

    if (btnHariIni) {
        btnHariIni.addEventListener("click", () => {
            window.location.href = "data/teks/t_04_senin_01.html";
        });
    }

    if (btnPekanIni) {
        btnPekanIni.addEventListener("click", () => {
            alert("Membuka tampilan: Pekan Ini");
        });
    }

    if (btnKaumBeriman) {
        btnKaumBeriman.addEventListener("click", () => {
            alert("Membuka tampilan: Kaum Beriman");
        });
    }
});
