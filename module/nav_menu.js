const $ = document.querySelector.bind(document)

const bgr_mobileMenu = $('#container_web .container_mobbile_menu')
const mobileMenu = $('#container_web .container_mobbile_menu .Mobile_menu')

function menuMobile(eleShow, eleHide) {

    // hiện menu
    eleShow.onclick = function () {

        // hiện bgr
        bgr_mobileMenu.style.animation = 'show ease .3s'
        bgr_mobileMenu.classList.add('container_mobbile_menu-enlable')

        // trượt vào
        mobileMenu.style.animation = 'slipin ease .4s'
        mobileMenu.classList.add('Mobile_menu-enlable')
    }

    // ẩn menu khi ấn vào bgr hoặc nút tắt
    eleHide.onclick = function () {
        hideMenuMobile()
    }
    bgr_mobileMenu.onclick = function () {
        hideMenuMobile()
    }
    mobileMenu.onclick = function (e) {
        e.stopPropagation();
    }

    function hideMenuMobile() {
        // ẩn bgr
        bgr_mobileMenu.style.animation = 'hide ease .3s forwards'

        // trượt ra
        mobileMenu.style.animation = 'slipout ease .4s forwards'

        setTimeout(function () {
            bgr_mobileMenu.classList.remove('container_mobbile_menu-enlable')
            mobileMenu.classList.remove('Mobile_menu-enlable')
        }, 300)
    }

    // ẩn cửa sổ mobile và thay bằng menu máy tính khi kích thước màn hình lớn
    function logWidth() {
        if (window.innerWidth > 900) {
            if (bgr_mobileMenu.classList.contains('container_mobbile_menu-enlable') && mobileMenu.classList.contains('Mobile_menu-enlable')) {
                bgr_mobileMenu.classList.remove('container_mobbile_menu-enlable')
                mobileMenu.classList.remove('Mobile_menu-enlable')
            }
        }

    }
    // Mỗi khi kích thước thay đổi
    window.addEventListener('resize', logWidth);


}

export { menuMobile }