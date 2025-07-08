const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// slider
import { initsider } from "./module/slider.js"

// ẩn hiện menu trên mobile
import { menuMobile } from "./module/nav_menu.js"

// xử lý click khi ấn vào các nút trên menu pc hoặc mobile
import { handle_click } from "./module/handle_click.js"

window.addEventListener('load', function () {
    // slider
    initsider()

    // menu mobile
    menuMobile($('#container_web header nav .nav-menu i'), $('#container_web .container_mobbile_menu .close-nav-menu i'));

    // xử lý khi bấm vào các nút trên menu
    handle_click([...$$('#container_web header nav .nav-links .btn_nav'), ...$$('#container_web .container_mobbile_menu .btn_mobileMenu')],
        $('#container_web #wp-content #main .container_Main #container_preface .container_button .btn_AboutMe'),
        $('#container_web #wp-content #introduce .introduce_container .btn_download_cv')
    )

})