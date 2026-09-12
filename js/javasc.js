document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.clickable');
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const stage1 = document.getElementById('stage1');
    const buttonContainer = document.getElementById('buttonContainer');
    const successContainer = document.getElementById('successContainer');

    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        clearTimeout(modalTimeout);
        resetModal();
    });

    function openModal(imgSrc, text) {
        modalImage.src = imgSrc;
        modalTitle.textContent = text;

        modal.style.display = 'flex';

        modalTimeout = setTimeout(() => {
            stage1.style.display = 'none';
            buttonContainer.style.display = 'block';
        }, 5000);
    }

    containers.forEach(container => {
        container.addEventListener('click', function () {
            const imgSrc = container.querySelector('img').src;
            const text = container.querySelector('h2').textContent;

            openModal(imgSrc, text);
        });
    });

    function resetModal() {
        stage1.style.display = 'block';
        buttonContainer.style.display = 'none';
        successContainer.style.display = 'none';
    }

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
            resetModal();
        }
    });

    let modalTimeout;

    // Optional: Controls what happens when the primary action button is clicked now that the text form is gone
    document.getElementById('clickableButton').addEventListener('click', function () {
        buttonContainer.style.display = 'none';
        successContainer.style.display = 'block';
        
        setTimeout(function() {
            modal.style.display = 'none';
            resetModal();
        }, 2000);
    });
});
