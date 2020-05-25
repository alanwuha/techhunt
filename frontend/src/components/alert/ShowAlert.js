export function ShowAlert(status, message) {
    // Show alert
    document.getElementById('alert').className = `alert alert-${status} fade show`
    document.getElementById('alert-display').innerHTML = message

    // Timeout to hide alert
    let timeout = setTimeout(() => {
        window.$(`#alert`).removeClass('show')
    }, 2000)
}

export default ShowAlert