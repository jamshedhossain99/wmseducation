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
});

document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const icon = toggler.querySelector('.fa');
    const collapseEl = document.getElementById('navigation');
    const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });

    // Toggle icon on show/hide
    collapseEl.addEventListener('show.bs.collapse', () => {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    });

    collapseEl.addEventListener('hide.bs.collapse', () => {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });

    // Collapse logic for outside click and nav link
    document.addEventListener('click', function (event) {
        const nav = document.getElementById('main-nav');
        const menubar = document.getElementById('main-menubar');
        const instance = bootstrap.Collapse.getInstance(collapseEl);

        if (!nav.contains(event.target)) {
            instance.hide();
        }

        if (menubar.contains(event.target) && event.target.classList.contains('nav-link')) {
            instance.hide();
        }
    });
});

