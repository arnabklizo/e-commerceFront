let userprofilePicture = document.querySelector('#userprofilePicture')
let updateDetails = document.querySelector('.updateDetails')

// for profile pictue change 
userprofilePicture.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const imageElement = document.querySelector('.userPicture');

    updateDetails.classList.remove('d-none');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imageElement.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
})


// edit button on fields 

let prolfileDataInfo = document.querySelectorAll('.prolfileDataInfo');

prolfileDataInfo.forEach((element) => {
    element.addEventListener('click', function () {
        updateDetails.classList.remove('d-none');

        const inpData = element.parentElement.children[1]
        inpData.disabled = false;
    })
})




let editAddress = document.querySelector('.editAddress');

editAddress.addEventListener('click', function () {
    updateDetails.classList.remove('d-none');
    const addressFieldBox = document.querySelector('.addressFieldBox');
    const addressFieldsInpSect = addressFieldBox.querySelectorAll('.addressFieldsInpSect');
    addressFieldsInpSect.forEach(field => {
        field.disabled = false
    });
})

