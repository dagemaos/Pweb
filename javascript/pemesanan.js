function validasi() {
    var nama = document.getElementById("nama").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var namalkp = document.getElementById("namalkp").value;
    var kewarganegaraan = document.getElementById("kewarganegaraan").value;
    if (nama != "" && number!="" && email !="" && namalkp !="" && kewarganegaraan !="") {
        alert('Data Anda telah tersimpan !')
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}