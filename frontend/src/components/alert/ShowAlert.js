export function ShowAlert(status, message) {
    // Show alert
    window.$(`#alert-${status}`).addClass('show')
    document.getElementById(`alert-display-${status}`).innerHTML = message

    // Timeout to hide alert
    let timeout = setTimeout(() => {
        window.$(`#alert-${status}`).removeClass('show')
    }, 2000)
}

export default ShowAlert