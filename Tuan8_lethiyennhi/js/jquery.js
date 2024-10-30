$(document).ready(function () {
   $("#dangky").click(function () { 
    $("#mo").modal();
      
   }); 
   $("#vien").val("123456789");
   $("#ten").val("Nguyen Van Anh");
   $("#meo").val("trangtran@iuh.edu.vn");
   $("#tiendung").val("0");
   $("#gia").val("0");



   function validatevien(){
    let vien = $("#vien").val();
    let validatevien=/^\d{9}$/;
    if(vien===""){
        $("#loivien").html("Bat buoc nhap");
        return false;
    }else{
        if(!validatevien.test(vien)){
            $("#loivien").html("Nhap sai");
            return false;

        }else{
            $("#loivien").html("*"); 
        return true;
        }
    }

   }



   function validateten(){
    let ten = $("#ten").val();
    let validateten= /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    if(ten===""){
        $("#loiten").html("Bat buoc nhap");
            return false;
    }else{
        if(!validateten.test(ten)){
            $("#loiten").html("Nhap sai");
            return false;

        }else{
            $("#loiten").html("*"); 
        return true;
        }
    }
   }




   function validatemeo(){
    let meo = $("#meo").val();
    let validatemeo = /^[A-Za-z0-9]+\@iuh\.edu\.vn$/;
    if(meo===""){
        $("#loimeo").html("Bat buoc nhap");
            return false;
    }else{
        if(!validatemeo.test(meo)){
            $("#loimeo").html("Nhap sai");
            return false;

        }else{
            $("#loimeo").html("*"); 
        return true;
        }
    }
   }


$("#dich").change(function(){
    let dich = $(this).val();
    $("#gia").val(dich);
    let tiendung= $("#gia").val();
    tiendung =0;
    let tong= parseFloat($("#gia").val())+ parseFloat($("#tiendung").val())||0;
    $("#tong").val(tong);
})










   $(".dung").change(function (){
    let tiendung =0;
    $(".dung:checked").each(function(){
        tiendung += parseInt ($(this).val());
    });
    $("#tiendung").val(tiendung);
    let tong = parseFloat($("#gia").val())+ parseFloat($("#tiendung").val());
    $("#tong").val(tong);
   });


   $("#vien").blur(validatevien);
   $("#ten").blur(validateten);
   $("#meo").blur(validatemeo);


   let i=1;



   $("#gui").click(function (e){
    e.preventDefault();
    let vien = $("#vien").val();
    let ten = $("#ten").val();
    let meo = $("#meo").val();
    let dich = $("#dich").val();
    let tiendung = $("#tiendung").val();
    let tong = $("#tong").val();



    let row= "<tr>  <td>"+i+"  </td>      <td>"+vien+" </td>    <td>"+ten+" </td>    <td>"+meo+"  </td>   <td>"+dich+"   </td>        <td>"+tiendung+"  </td>    <td>"+tong+"</td>   </tr>"
    $("#bang").append(row);
i++;


   });













































});