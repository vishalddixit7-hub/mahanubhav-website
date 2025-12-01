
function searchContent() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        if (p.innerText.toLowerCase().includes(input)) {
            p.style.backgroundColor = '#ffff99';
        } else {
            p.style.backgroundColor = 'transparent';
        }
    }
}
