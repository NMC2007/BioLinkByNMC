const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sections = $$('.section');

// nạp auto roll vào
import { autoRoll } from "./auto_roll.js";

import { observer } from "./auto_roll.js";

import { hideMenuMobile } from "./nav_menu.js";

// tiếp nhận click và lấy ra data
function handle_click(elements, btnAboutme, btnDownloadCV) {

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];

        element.onclick = function () {

            // ngừng theo dõi của tự động cập nhật để cập nhật theo click
            observer.disconnect();

            // truyền data cho auto roll  
            autoRoll(element.getAttribute('data'))

            if (element.getAttribute('from') == 'computer') {

                activeLine(this)

                activeMobile($(`a[from="mobile"][data="${this.getAttribute('data')}"]`))

            } else if (element.getAttribute('from') == 'mobile') {
                activeMobile(this)

                activeLine($(`a[from="computer"][data="${this.getAttribute('data')}"]`))

                hideMenuMobile()
            }
        }
    }


    btnAboutme.onclick = function() {
        autoRoll(btnAboutme.getAttribute('data'))
    }

    btnDownloadCV.onclick = function() {
        alert('Not updated')
    }
}


// xử lý active khi bấm trên máy tính
const TabsSelect = $('#container_web header nav .nav-links .btn_nav.btn_nav-select')
const line = $('#container_web header nav .nav-links .line')

function activeLine(TabsSelect) {

    $('#container_web header nav .nav-links .btn_nav.btn_nav-select').classList.remove('btn_nav-select')
    TabsSelect.classList.add('btn_nav-select')

    line.style.left = TabsSelect.offsetLeft + 'px'
    line.style.width = TabsSelect.offsetWidth + 'px'
}
activeLine(TabsSelect)


function activeMobile(TabsMonbile) {
    $('#container_web .container_mobbile_menu .btn_mobileMenu.btn_mobileMenu-select').classList.remove('btn_mobileMenu-select')
    TabsMonbile.classList.add('btn_mobileMenu-select')
}

export { handle_click }
export { activeLine, activeMobile }