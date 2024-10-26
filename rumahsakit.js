const hospitals = [
    {
        name: "RSUD Dr. Soetomo",
        city: "Surabaya",
        type: "RSUD",
        address: "Jl. Mayjen Prof. Dr. Moestopo No.6-8, Surabaya",
        phone: "031-5501234"
    },
    {
        name: "RS Bhakti Rahayu",
        city: "Sidoarjo",
        type: "Umum",
        address: "Jl. Jenggolo No.50, Sidoarjo",
        phone: "031-8956789"
    },
    {
        name: "RS Lavalette",
        city: "Malang",
        type: "Spesialis",
        address: "Jl. WR Supratman No.10, Malang",
        phone: "0341-472809"
    },
    {
        name: "RS Al-Irsyad",
        city: "Surabaya",
        type: "Umum",
        address: "Jl. Al-Irsyad No.10, Surabaya",
        phone: "031-1234567"
    },
    {
        name: "RS Haji Surabaya",
        city: "Surabaya",
        type: "Umum",
        address: "Jl. A. Yani No.24, Surabaya",
        phone: "031-7890123"
    },
    {
        name: "RS Islam Jemursari",
        city: "Surabaya",
        type: "Umum",
        address: "Jl. Jemursari No.99, Surabaya",
        phone: "031-6789123"
    },
    {
        name: "RS Siloam",
        city: "Sidoarjo",
        type: "Spesialis",
        address: "Jl. Raya Pahlawan No.34, Sidoarjo",
        phone: "031-6543210"
    },
    {
        name: "RSUD Soewandhie",
        city: "Surabaya",
        type: "RSUD",
        address: "Jl. Soewandi No.17, Surabaya",
        phone: "031-5566778"
    },
    {
        name: "RS Harapan Kita",
        city: "Malang",
        type: "Umum",
        address: "Jl. Kemenangan No.88, Malang",
        phone: "0341-222334"
    },
    {
        name: "RS Bhakti Luhur",
        city: "Kediri",
        type: "Spesialis",
        address: "Jl. Soekarno-Hatta No.15, Kediri",
        phone: "0354-123456"
    },
    {
        name: "RS Mitra Keluarga",
        city: "Jember",
        type: "Umum",
        address: "Jl. Pahlawan No.22, Jember",
        phone: "0331-345678"
    },
    {
        name: "RS Sumber Waras",
        city: "Banyuwangi",
        type: "Umum",
        address: "Jl. Merdeka No.1, Banyuwangi",
        phone: "0333-234567"
    },
    {
        name: "RS Panti Rapih",
        city: "Madiun",
        type: "Umum",
        address: "Jl. Diponegoro No.28, Madiun",
        phone: "0351-876543"
    },
    {
        name: "RSUD Kota Probolinggo",
        city: "Probolinggo",
        type: "RSUD",
        address: "Jl. Raya Probolinggo No.45, Probolinggo",
        phone: "0335-987654"
    },
    {
        name: "RS Kanker Surabaya",
        city: "Surabaya",
        type: "Spesialis",
        address: "Jl. Dr. Soetomo No.39, Surabaya",
        phone: "031-2233445"
    },
    {
        name: "RS Keluarga Sehat",
        city: "Pasuruan",
        type: "Umum",
        address: "Jl. Raya Pasuruan No.67, Pasuruan",
        phone: "0343-678901"
    }
];

function displayHospitals(filteredHospitals) {
    const hospitalList = document.getElementById("hospital-list");
    hospitalList.innerHTML = "";

    filteredHospitals.forEach((hospital) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hospital.name}</td>
            <td>${hospital.city}</td>
            <td>${hospital.type}</td>
            <td>${hospital.address}</td>
            <td>${hospital.phone}</td>
            <td><button class="register-btn">Daftar</button></td>
        `;
        hospitalList.appendChild(row);
    });

    document.querySelectorAll(".register-btn").forEach((btn) =>
        btn.addEventListener("click", openRegistrationForm)
    );
}

function filterHospitals() {
    const selectedCity = document.getElementById("city").value;
    const selectedType = document.getElementById("type").value;

    const filtered = hospitals.filter((hospital) => {
        return (selectedCity === "all" || hospital.city === selectedCity) &&
               (selectedType === "all" || hospital.type === selectedType);
    });

    displayHospitals(filtered);
}

function openRegistrationForm() {
    document.getElementById("registration-form").style.display = "flex";
}

function closeRegistrationForm() {
    document.getElementById("registration-form").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeRegistrationForm);

document.getElementById("hospital-registration").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pendaftaran berhasil!");
    closeRegistrationForm();
});

document.getElementById("city").addEventListener("change", filterHospitals);
document.getElementById("type").addEventListener("change", filterHospitals);

displayHospitals(hospitals);
