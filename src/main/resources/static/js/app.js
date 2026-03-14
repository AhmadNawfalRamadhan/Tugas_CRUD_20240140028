$(document).ready(function () {

    loadKtpData();

    $("#ktpForm").submit(function (e) {
        e.preventDefault();

        let id = $("#ktpId").val();

        let data = {
            nomorKtp: $("#nomorKtp").val(),
            namaLengkap: $("#namaLengkap").val(),
            alamat: $("#alamat").val(),
            tanggalLahir: $("#tanggalLahir").val(),
            jenisKelamin: $("#jenisKelamin").val()
        };

        if (id) {
            updateKtp(id, data);
        } else {
            addKtp(data);
        }
    });

    $("#btnCancel").click(function () {
        resetForm();
    });

    $("#searchInput").keyup(function () {
        let value = $(this).val().toLowerCase();

        $("#ktpTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});

function loadKtpData() {

    $.get("/ktp", function (res) {

        renderTable(res.data);

    });

}

function addKtp(data) {

    $.ajax({
        url: "/ktp",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),

        success: function () {

            alert("Data berhasil ditambahkan");

            resetForm();
            loadKtpData();
        }
    });

}

function updateKtp(id, data) {

    $.ajax({
        url: "/ktp/" + id,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(data),

        success: function () {

            alert("Data berhasil diupdate");

            resetForm();
            loadKtpData();
        }
    });

}

function deleteKtp(id) {

    if (!confirm("Yakin ingin menghapus data?")) return;

    $.ajax({
        url: "/ktp/" + id,
        method: "DELETE",

        success: function () {

            loadKtpData();

        }
    });

}

function editKtp(id) {

    $.get("/ktp/" + id, function (res) {

        let d = res.data;

        $("#ktpId").val(d.id);
        $("#nomorKtp").val(d.nomorKtp);
        $("#namaLengkap").val(d.namaLengkap);
        $("#alamat").val(d.alamat);
        $("#tanggalLahir").val(d.tanggalLahir);
        $("#jenisKelamin").val(d.jenisKelamin);

        $("#formTitle").text("Edit Data");

        $("#btnCancel").removeClass("hidden");

    });

}

function renderTable(data) {

    let rows = "";

    let male = 0;
    let female = 0;

    if (!data || data.length === 0) {

        rows = "<tr><td colspan='7'>Belum ada data</td></tr>";

    } else {

        data.forEach((d, i) => {

            if (d.jenisKelamin === "Laki-laki") male++;
            else female++;

            let genderBadge =
                d.jenisKelamin === "Laki-laki"
                    ? '<span class="badge-male">Laki-laki</span>'
                    : '<span class="badge-female">Perempuan</span>';

            rows += `
            <tr>
                <td>${i + 1}</td>
                <td>${d.nomorKtp}</td>
                <td>${d.namaLengkap}</td>
                <td>${d.alamat}</td>
                <td>${d.tanggalLahir}</td>
                <td>${genderBadge}</td>
                <td>
                    <button onclick="editKtp(${d.id})">✏️</button>
                    <button onclick="deleteKtp(${d.id})">🗑</button>
                </td>
            </tr>
            `;
        });
    }

    $("#ktpTableBody").html(rows);

    $("#totalData").text(data.length);
    $("#totalMale").text(male);
    $("#totalFemale").text(female);

}

function resetForm() {

    $("#ktpForm")[0].reset();

    $("#ktpId").val("");

    $("#formTitle").text("Tambah Data");

    $("#btnCancel").addClass("hidden");

}

function toggleTheme() {

    let html = document.documentElement;

    let theme = html.getAttribute("data-theme");

    html.setAttribute("data-theme", theme === "dark" ? "light" : "dark");

}