class Dialog {
    constructor(elementid) {
        this.element = document.getElementById(elementid);

        // hook up close button(s) to hide the dialog
        let close_buttons = this.element.querySelectorAll('button.close');
        for (let button of close_buttons) {
            button.addEventListener('click', e => {
                e.stopPropagation();
                this.element.close();
            });
        }

        // clicking on dialog::backdrop will also close the dialog
        this.element.addEventListener('click', this.backdrop_click_handler);
    }

    // close the dialog if the cursor clicked the backdrop element
    // works out whether the click event occurred inside the rect
    backdrop_click_handler(e) {
        let rect = this.getBoundingClientRect();

        let inside_dialog = (
               e.clientY >= rect.top
            && e.clientY <= rect.bottom
            && e.clientX >= rect.left
            && e.clientX <= rect.right
        );

        if (!inside_dialog) {
            this.close();
        }
    }

    // dialog element proxy methods
    open()  { this.element.showModal(); }
    close() { this.element.close();     }
}

module.exports = Dialog;
