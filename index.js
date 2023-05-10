console.log("first");

//bai 1
function bai1() {
  var n = 0;
  for (var i = 1; i <= 1000; i++) {
    if (n <= 10000) {
      n = i + n;
      console.log("n: ", i);
      console.log("tong la: ", n);
    }
  }

  document.getElementById("inputbai1").innerHTML =
    "so n:" + i + "</br>" + "(1+2+...+" + i + "=" + n + ")" + ">10000";
}

//bai2

function bai2() {
  var nhapSoN = document.getElementById("nhapSoN").value * 1;
  var soN = 0;
  var nhapSoX = document.getElementById("nhapSoX").value * 1;
  var ketQua2 = 0;
  for (var j = 1; j <= nhapSoN; j++) {
    soN++;
    ketQua2 = Math.pow(nhapSoX, soN) + ketQua2;
    console.log("soN: ", soN);
  }

  console.log("nhapSoX: ", nhapSoX);
  console.log("ketQua2: ", ketQua2);
  document.getElementById("ketQua2").innerHTML = ketQua2;
}

function bai3() {
  var nhapN = document.getElementById("inPut3").value * 1;
  var ketQua3 = 1;
  for (i = 1; i <= nhapN; i++) {
    ketQua3 = ketQua3 * i;
    console.log("i: ", i);
    console.log("ketQua3: ", ketQua3);
  }
  document.querySelector(".ketQua3").innerHTML = ketQua3;
}

function bai4() {
  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      document.getElementById(
        "theDivBai4"
      ).innerHTML += `<div class="bg-danger bg-opacity-75 text-white p-3"></div>`;
    } else {
      document.getElementById(
        "theDivBai4"
      ).innerHTML += `<div class="bg-info bg-opacity-75 text-white p-3"></div>`;
      console.log("i: ", i);
    }
  }
}

function bai5() {
  var soN = document.getElementById("inPut5").value * 1;
  var ketQua = 0;
  for (var i = 1; i <= soN; i++) {
    ketQua += " " + i + " ";
    console.log("i: ", i);
    console.log("ketQua: ", ketQua);
  }
  document.getElementById("ketQua5").innerHTML = ketQua;
}
