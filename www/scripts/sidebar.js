class Sidebar {
    constructor(elementid) {
        this.element = document.getElementById(elementid);

        // name => element mapping of panes in the sidebar
        this.panes = {};
        let panes = this.element.querySelectorAll('section');
        for (let pane of panes) {
            this.panes[pane.dataset.pane] = pane;
        }

        // sidebar starts out collapsed
        this.opened = false;
    }

    // name refers to the data-pane property of child elements
    show_pane(name) {
        if (this.selected_pane == name) {
            return;
        }

        let new_pane = this.panes[name];
        if (!new_pane) {
            return;
        }

        // lose focus from the currently active pane
        let current_pane = this.panes[this.selected_pane];
        if (current_pane) {
            current_pane.classList.remove('active')
        }

        // add focus to the new pane
        new_pane.classList.add('active');
        this.selected_pane = name;

        // open the sidebar if it is not already opened
        if (!this.opened) {
            this.element.classList.add('active');
            this.opened = true;
        }
    }

    close() {
        if (!this.opened) {
            return;
        }

        // unfocus the sidebar
        this.element.classList.remove('active');
        this.opened = false

        // unfocus the active pane (if any)
        let current_pane = this.panes[this.selected_pane];
        if (current_pane) {
            current_pane.classList.remove('active');
            this.selected_pane = undefined;
        }
    }

    // shows or hides focus of the named pane
    toggle_pane(name) {
        if (this.selected_pane == name) {
            this.close();
            return;
        }

        if (this.selected_pane != name) {
            this.show_pane(name);
            return;
        }
    }
}

module.exports = Sidebar;
