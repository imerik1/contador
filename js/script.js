validatePermission()

function validatePermission() {
    if (stash.get('permission')) {
        disableBox()
    }
}

function savePref() {
    let check = document.getElementById('check')
    if (check.checked) {
        stash.set('permission', true);
        stash.set('contador', 0)
        disableBox()
    }
}

function disableBox() {
    let cookiesPermission = document.getElementById('cookies')
    cookiesPermission.style.display = 'none';
    $( "#root" ).load( "./pages/contador.html" );
}
