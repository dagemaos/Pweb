function validasi() {
    var caption = document.getElementById("caption").value;
    if (caption != "") {
        alert('Postingan anda telah terkirim !')
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}