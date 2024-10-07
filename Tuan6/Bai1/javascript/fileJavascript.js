// Đặt mã JavaScript vào trong hàm
    var studentID = prompt("Nhập mã số SV của sinh viên:");
    var fullName = prompt("Nhập họ tên của sinh viên:");
    var className = prompt("Nhập lớp của sinh viên:");
  // Gán giá trị từ người dùng vào ô tương ứng
  document.getElementById("ms").innerHTML = studentID;
  document.getElementById("ten").innerHTML = fullName;
  document.getElementById("lop").innerHTML = className;
