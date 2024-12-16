

// tooltip 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// navbar close
document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar");
    const navbarToggler = navbar.querySelector(".navbar-toggler");
    const navbarCollapse = navbar.querySelector(".navbar-collapse");

    if (navbarCollapse.classList.contains("show") && !navbar.contains(event.target)) {
        navbarToggler.click(); // Trigger the toggler to close the navbar
    }
});


// search button at navbar 
let navSearch = document.querySelector('.navSearch');
if (document.querySelector('.navSearch') !== null) {
    navSearch.addEventListener('keyup', function () {
        if (navSearch.value.length > 0) {
            navSearch.classList.add('unhide')
        } else {
            navSearch.classList.remove('unhide')
        }
    })

}


// showPassword
let showPasswords = document.querySelectorAll('.showPassword');
if (document.querySelectorAll('.showPassword') !== null) {
    showPasswords.forEach((element) => {
        element.addEventListener('click', function () {
            let passwordLog = this.previousElementSibling
            console.log(this.previousElementSibling)
            if (passwordLog.type == 'password') {
                passwordLog.type = 'text';
                this.innerHTML = '<i class="fa-solid fa-eye"></i>'
            } else {
                passwordLog.type = 'password';
                this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
            }
        })
    })
}



// sliders at main page 

// banner slider 
$('.bannerSlider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    speed: 3000,
});


// partner slider 
$('.partners').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    speed: 3000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// sellerSlider

$('.sellerSlider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    prevArrow: $('.prevSeller'),
    nextArrow: $('.nextSeller'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})