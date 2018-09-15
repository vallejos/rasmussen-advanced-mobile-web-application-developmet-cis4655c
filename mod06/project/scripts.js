function showNotification(msg) {
    var notification = new Notification(msg);

    // add listener on the click event to dismiss the notification
    notification.addEventListener('click', function () {
        notification.close();
        console.log('Dismissing Notification');
    });
}

function displayNotification(msg) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      showNotification(msg);
  }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            showNotification(msg);
        }
      });
    }
  
    // Finally, if the user has denied notifications and you 
    // want to be respectful there is no need to bother them any more.
}

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
    if (status === 'granted') {
        displayNotification("Welcome to MtG Deck Finder!");
    }
});

window.onbeforeunload = function (e) {
    displayNotification("Have a nice day!");
};
