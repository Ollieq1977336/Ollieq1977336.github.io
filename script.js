document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const dropZone = document.getElementById('dropZone');
    const fileNames = document.getElementById('fileNames');
    let currentFile;

    // Function to handle file drop event
    dropZone.addEventListener('drop', function (event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        readFileContent(file);
    });

    // Function to read the content of the file and display it in the editor
    function readFileContent(file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const content = event.target.result;
            editor.value = content;
        };
        reader.readAsText(file);
        fileNames.innerHTML = `Opened file: ${file.name}`;
        currentFile = file;
    }

    // Function to handle dragover event
    dropZone.addEventListener('dragover', function (event) {
        event.preventDefault();
        dropZone.classList.add('drag-over');
    });

    // Function to handle dragleave event
    dropZone.addEventListener('dragleave', function (event) {
        event.preventDefault();
        dropZone.classList.remove('drag-over');
    });

    // Function to trigger file selection
    function openFile() {
        fileInput.click();
    }

    // Function to handle file input change event
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        readFileContent(file);
    });

    // Function to trigger file download
    function downloadFile() {
        const content = editor.value;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentFile ? currentFile.name : 'edited_file.txt';
        a.click();
        URL.revokeObjectURL(url);
    }

    // Function to handle the "Download" button click
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function () {
        downloadFile();
    });
});
