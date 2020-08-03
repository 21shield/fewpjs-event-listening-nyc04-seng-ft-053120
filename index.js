function addingEventListener() {
    const input = document.getElementById('input');

    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });

}

addingEventListener()
// wont activate the event on the page if you dont call it ahahaha
