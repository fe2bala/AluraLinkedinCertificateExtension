chrome.storage.local.get('certificate', function (certificate) {
    console.log(certificate);
    if (jQuery.isEmptyObject(certificate))
        return;
    certificate = certificate.certificate;

    $('#certification-name').val(certificate.course);
    $('#certification-license-number').val(certificate.hash);
    $('#certification-start-month').val(certificate.month);
    $('#certification-start-year').val(certificate.year);
    $('#certification-does-not-expire').prop('checked', true);
    $('#certification-url').val(certificate.url);

    console.log("Clearing saved certificate");
    chrome.storage.local.clear();
});