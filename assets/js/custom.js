$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('contact_success') === 'yes') {
        Swal.fire({
            icon: 'success',
            title: 'Thank You!',
            text: 'Your message has been sent successfully. We’ll get back to you soon.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect to domain root after closing the alert
            window.location.href = window.location.origin + '/';
        });
    }
    const fullUrl = window.location.origin + '/?contact_success=yes';
    $('#contact-form input[name="_next"]').val(fullUrl);
});

$(document).on('click', '.go-to-contact', function(e){
    e.preventDefault();
    setTimeout(() => {
        $('#contact-form [name="name"]').trigger('focus');

    }, 100)
})