document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.form-inline input[type="search"]');
    const bookCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();

        bookCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const author = card.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchValue) || author.includes(searchValue)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactModal form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.querySelector('#contact-name').value;
        const email = document.querySelector('#contact-email').value;
        const message = document.querySelector('#contact-message').value;

        // Perform any desired validation here

        // Simulate form submission success
        alert(`Thank you for contacting us, ${name}! We will get back to you at ${email} soon.`);

        // Close the modal
        $('#contactModal').modal('hide');

        // Reset the form
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.form-inline input[type="search"]');
    const bookCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();

        bookCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const author = card.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchValue) || author.includes(searchValue)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });

    bookCards.forEach(card => {
        card.querySelector('.btn-primary').addEventListener('click', () => {
            const bookImage = card.querySelector('img').src;
            const bookTitle = card.querySelector('.card-title').textContent;
            const bookAuthor = card.querySelector('.card-text').textContent.split(': ')[1];
            const bookPrice = card.querySelectorAll('.card-text')[1].textContent;
            const bookDescription = card.querySelectorAll('.card-text')[2].textContent;

            document.querySelector('#bookDetailsImage').src = bookImage;
            document.querySelector('#bookDetailsTitle').textContent = bookTitle;
            document.querySelector('#bookDetailsAuthor').textContent = `Author: ${bookAuthor}`;
            document.querySelector('#bookDetailsPrice').textContent = bookPrice;
            document.querySelector('#bookDetailsDescription').textContent = bookDescription;

            $('#bookDetailsModal').modal('show');
        });
    });

    const contactForm = document.querySelector('#contactModal form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.querySelector('#contact-name').value;
        const email = document.querySelector('#contact-email').value;
        const message = document.querySelector('#contact-message').value;

        // Perform any desired validation here

        // Simulate form submission success
        alert(`Thank you for contacting us, ${name}! We will get back to you at ${email} soon.`);

        // Close the modal
        $('#contactModal').modal('hide');

        // Reset the form
        contactForm.reset();
    });
});
