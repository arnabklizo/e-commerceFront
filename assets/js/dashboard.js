// window.onload(function () {
//     let dashChecker = document.querySelector('.dashChecker');
//     if (document.querySelector('.dashChecker') !== null) {
//         dashChecker.checked = 'false';
//     }
// })




// shorting button 
let shortButton = document.querySelectorAll('.shortButton');
if (document.querySelectorAll('.showPassword') !== null) {
    shortButton.forEach((element) => {
        element.addEventListener('click', function () {
            let asc = element.querySelector('.asc');
            let desc = element.querySelector('.desc');
            if (asc.classList.contains('d-none') == true) {
                asc.classList.remove('d-none');
                desc.classList.add('d-none')
            }
            else {
                desc.classList.remove('d-none');
                asc.classList.add('d-none')
            }
        })

    })
}






let closeDash = document.querySelector('.closeDash');
// dashboard sidebar 
if (document.querySelector('.closeDash') !== null) {
    closeDash.addEventListener('click', function () {
        let dashChecker = document.querySelector('.dashChecker');
        let sidebarDeashboard = document.querySelector('.sidebarDeashboard');
        if (dashChecker.checked == true) {
            sidebarDeashboard.classList.add('smallWidth')
        } else {
            sidebarDeashboard.classList.remove('smallWidth')
        }
    });
}

window.addEventListener("load", () => {
    if (document.querySelector('.closeDash') !== null) {
        let dashChecker = document.querySelector('.dashChecker');
        let sidebarDeashboard = document.querySelector('.sidebarDeashboard');
        if (dashChecker.checked == true) {
            sidebarDeashboard.classList.add('smallWidth')
        } else {
            sidebarDeashboard.classList.remove('smallWidth')
        };
    }
});



// category list on dashboard 
var catArrow = document.querySelector('.catArrow');
if (document.querySelector('.catArrow') !== null) {
    catArrow.addEventListener('click', function () {
        let arrowDash = document.querySelector('.arrowDash');
        arrowDash.classList.toggle('rotate90');
    })
}


function updateDateTime() {
    let now = new Date();  // Get the current date and time

    // Define options for formatting the date
    let options = {
        weekday: 'long',  // Full day name (e.g., Monday)
        year: 'numeric',  // Full year (e.g., 2024)
        month: 'long',  // Full month name (e.g., August)
        day: 'numeric',  // Day of the month (e.g., 20)
        hour: '2-digit',  // Two digits for hour
        minute: '2-digit',  // Two digits for minute
        second: '2-digit'  // Two digits for second
    };

    // Format the current date and time using `toLocaleString`
    let formattedDate = now.toLocaleString('en-US', options);

    // Update the content of the 'date-time' div
    document.querySelector('.timeNow').innerHTML = formattedDate;
}

// Update the time every 1 second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Initialize the first time display
updateDateTime();



// // Forgot Password
// let sndEmail = document.querySelector('.sndEmail');
// sndEmail.addEventListener('click', function (e) {
//     e.preventDefault();

//     let frgt1 = document.querySelector('.frgt1');
//     let frgt2 = document.querySelector('.frgt2');

//     frgt1.classList.add('d-none');
//     frgt2.classList.remove('d-none')
// })

// let frgtPassBtn = document.querySelector('.frgt0');
// frgtPassBtn.addEventListener('click', function () {
//     let frgt1 = document.querySelector('.frgt1');
//     let frgt2 = document.querySelector('.frgt2');

//     frgt1.classList.remove('d-none');
//     frgt2.classList.add('d-none')
// })













