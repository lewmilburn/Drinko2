if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let nav = document.getElementById('nav');

    nav.classList.add('hidden');
    nav.classList.remove('flex');
}