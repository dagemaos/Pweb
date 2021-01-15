function validasi() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "aku@email.com" && password =="aku123") {
        alert('Anda berhasil login')
        return true;
    }else{
        alert('Email atau password salah !');
    }
}