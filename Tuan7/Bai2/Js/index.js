$(document).ready(function () {
    $("#muaVao").focus();

    function ktra(giatri, loi) {
        let reg = /^[0-9]+$/;

        if (!reg.test(giatri)) {
            $(loi).html("Gia tri la so!!!");
            return false;
        }
        else {
            $(loi).html("(*)");
            return true;

        }

    }
    $("#muaVao").blur(function (e) {
        let valmua = $("#muaVao").val();
        ktra(valmua, ".errmua");


    });

    $("#banRa").blur(function (e) {
        let valban = $("#banRa").val();
        ktra(valban, ".errBan");
        if (!ktra(valban, ".errBan")) {
            $("#state").attr("disabled", true);
        }

        $("#state").attr("disabled", false);


    });

    $("#loaixe").change(function (e) {
        let xe = $("#loaixe").val();
        //alert(xe);
        let path, pricar;
        xe = new String(xe);
        let vtri = xe.indexOf(";");
        // alert(vtri);
        path = xe.substr(0, vtri);
        //alert(path);
        pricar = xe.substr(vtri + 1, xe.length);
        //alert(pricar);
        $("#hinhxe").attr("src", path);
        $("#gia").html(pricar);
    });

    // Xử lý sự kiện khi nhấn nút Update
    $('#update').click(function () {
        // Lấy giá trị nhập vào từ input
        var muaVao = $('#muaVao').val();
        var banRa = $('#banRa').val();

        // Cập nhật dữ liệu vào bảng thị trường
        if ($('#radio1').prop('checked')) { // Nếu chọn radio 'Vàng'
            $('#vang-mua').html(muaVao);
            $('#vang-ban').html(banRa);
        } else { // Nếu chọn radio 'USD'
            $('#usd-mua').html(muaVao);
            $('#usd-ban').html(banRa);
        }
    });
    

});