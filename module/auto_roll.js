const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
import { activeLine, activeMobile } from "./handle_click.js"

// tiếp nhận data truy xuất trên dom và roll
function autoRoll(idRoll) {
    $(`#${idRoll}`).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })

    setTimeout(() => {
        // // theo dõi lại tự động cập nhật sau khi cập nhật theo click sau 0.6s
        sections.forEach(section => observer.observe(section));
    }, 600)
}


const sections = $$('.section');

// tự động cập nhật menu khi cuộn thủ công
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            activeLine($(`a[from="computer"][data="${entry.target.id}"]`))
            activeMobile($(`a[from="mobile"][data="${entry.target.id}"]`))

        }
    });
}, {
    threshold: 0.5, // phần tử phải chiếm cả màn hình
});

sections.forEach(section => observer.observe(section));

export { observer }
export { autoRoll }