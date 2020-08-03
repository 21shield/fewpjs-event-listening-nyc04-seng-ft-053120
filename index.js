function addingEventListener() {
    // calls the "div"
    const input = document.getElementById('input');
    // addevnetlistener takes a click/event and a function
    input.addEventListener('click', function(event) {
        // this call back function(takes that said event)
        // does this
        alert('I was clicked!');
    });

}

addingEventListener()
// wont activate the event on the page if you dont call it ahahaha
