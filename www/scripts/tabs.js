class Tabs {
    constructor(elementid) {
        this.element = document.getElementById(elementid);

        // add click event listeners to select the correct tabs
        // store name => button mapping in this.buttons
        this.buttons = {};
        const tab_buttons = this.element.querySelectorAll('.tabbar button');
        for (let button of tab_buttons) {
            button.addEventListener('click', e => this.select(button.dataset.tab));
            this.buttons[button.dataset.tab] = button;
        }

        // store name => pane mapping in this.panes
        this.panes = {};
        const tab_panes = this.element.querySelectorAll('.tabpanes > *');
        for (let pane of tab_panes) {
            this.panes[pane.dataset.tab] = pane;
        }

        // select the first tab
        this.select(tab_panes[0].dataset.tab);
    }

    select(name) {
        // don't need to do anything if we're selecting the same tab
        if (this.selected == name) {
            return;
        }

        // make sure the new tab is valid
        let new_pane = this.panes[name];
        if (!new_pane) {
            return;
        }

        let new_button = this.buttons[name];
        if (!new_button) {
            return;
        }

        // de-select the current tab
        // hide pane and remove tab highlight
        let current_pane   = this.panes[this.selected];
        if (current_pane) {
            current_pane.classList.remove('active');
        }

        let current_button = this.buttons[this.selected];
        if (current_button) {
            current_button.classList.remove('active');
        }

        // select the new tab
        // show pane and set tab highlight
        new_pane.classList.add('active');
        new_button.classList.add('active');

        // remember the newly selected tab
        this.selected = name;
    }
}

module.exports = Tabs;
