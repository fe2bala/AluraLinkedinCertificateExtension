function getCertificate(url, callback) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            console.log('certificate received, parsing')
            let certificate = parseCertificate(data);

            console.log('calling callback');
            callback(certificate);
        }
    });
}

function parseCertificate(data) {
    let certificate = {};
    let html = $(data);
    certificate.course = html.find('.certificate-course').text();
    certificate.url = html.find('.authenticity').text();
    certificate.hash = certificate.url.substr(40);

    var myString = "com início em 3 de jan de 2018 e concluído em 4 de jan de 2018.";
    var myRegexp = /(.*?)concluído em (.*?) de (.*?) de (.*?)\./g;
    var match = myRegexp.exec(myString);

    certificate.month = monthStrToNum(match[3]);
    certificate.year = match[4];

    return certificate;
}

function monthStrToNum(str) {
    switch (str) {
        case 'jan': return 1;
        case 'fev': return 2;
        case 'mar': return 3;
        case 'abr': return 4;
        case 'mai': return 5;
        case 'jun': return 6;
        case 'jul': return 7;
        case 'ago': return 8;
        case 'set': return 9;
        case 'out': return 10;
        case 'nov': return 11;
        case 'dez': return 12;
        default:
            console.error('Mês desconhecido: ' + str);
            return 0;
    }
}


$('.lightCard--finishedMark')
    .find('.lightCard-otherLinks')
    .append('<a name="autoAddLinkedin" href="#" class="lightCard-otherLinks-link lightCard-otherLinks-linkedin plugin-autoadd">AutoAdd</a>');

$('.plugin-autoadd').click(function addCertif() {
    console.log('button clicked');
    getCertificate(
        $(this).parent().find('.lightCard-otherLinks-certificate').attr('href'),
        ((certificate) => {
            chrome.storage.local.set({ 'certificate': certificate }, function () {
                // We've saved certificate data, now go to linkedin
                console.log('moving to linkedin');
                console.log(certificate);
                window.open('https://www.linkedin.com/profile/add/');
            })
        })
    )
});
