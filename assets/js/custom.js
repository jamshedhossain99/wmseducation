function getRootUrl() {
    const base = document.querySelector('base')?.getAttribute('href') || '/';
    const normalizedBase = base.endsWith('/') ? base : base + '/';
    return window.location.origin + normalizedBase;
}

$(document).ready(function() {
    const rootUrl = getRootUrl();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('contact_success') === 'yes') {
        Swal.fire({
            icon: 'success',
            title: 'Thank You!',
            text: 'Your message has been sent successfully. We’ll get back to you soon.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = rootUrl;
        });
    }

    $('#contact-form input[name="_next"]').val(rootUrl + '?contact_success=yes');
});


$(document).on('click', '.go-to-contact', function(e){
    e.preventDefault();
    setTimeout(() => {
        $('#contact-form [name="name"]').trigger('focus');

    }, 100)
})