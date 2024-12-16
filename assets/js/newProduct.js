// Get references to the elements
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

// Add drag-and-drop event listeners
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = '#e0e0e0'; // Highlight on drag over
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#fafafa'; // Revert highlight when drag leaves
});


dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = '#fafafa'; // Revert highlight after drop
    handleFileUpload(e.dataTransfer.files);
});


// Handle file selection by clicking the input
fileInput.addEventListener('change', (e) => {
    handleFileUpload(e.target.files);
});


// Handle the file upload logic for multiple files
function handleFileUpload(files) {
    imagePreview.innerHTML = '';

    Array.from(files).forEach((file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.style.display = 'block';
                img.style.maxWidth = '200px'; // Optional: Adjust image size
                img.style.marginBottom = '10px'; // Optional: Add space between images

                imagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    });
}














// to add category 
// Get references to the elements
const dropingArea = document.getElementById('dropping-area');
const catInput = document.getElementById('cat-input');
const catPreview = document.getElementById('cat-preview');




// Add drag-and-drop event listeners
dropingArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropingArea.style.backgroundColor = '#e0e0e0'; // Highlight on drag over
});

dropingArea.addEventListener('dragleave', () => {
    dropingArea.style.backgroundColor = '#fafafa'; // Revert highlight when drag leaves
});


dropingArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropingArea.style.backgroundColor = '#fafafa'; // Revert highlight after drop
    catFileUpld(e.dataTransfer.files);
});


// Handle file selection by clicking the input
catInput.addEventListener('change', (e) => {
    catFileUpld(e.target.files);
});


// Handle the file upload logic
function catFileUpld(files) {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            catPreview.innerHTML = '';
            catPreview.appendChild(img);
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image file.');
    }
}
