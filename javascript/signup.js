function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ulangipassword = document.getElementById("password").value;
    if (nama != "" && email!="" && password !="" && ulangipassword !="") {
        alert('Anda berhasil mendaftar')
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}