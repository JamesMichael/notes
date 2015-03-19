class ListView {
    // element      the HTMLElement or id of an HTMLElement
    //              in which the listview is to be drawn
    //
    // templateid   the id of a <template> to use as a basis
    //              for the listview
    //
    // datasource   instance of ListViewDataSource for managing
    //              entries in the listview
    constructor(element, templateid='listview', datasource) {
        if (! (element instanceof HTMLElement)) {
            element = document.getElementById(element);
        }

        this.element = element;
        this.datasource = datasource;

        // copy the template, add data, and render into element
        let name = datasource.name;
        let template = document.getElementById(templateid);
        template.content.querySelector('.listview-search input').placeholder = `Search ${name}`;

        let clone = document.importNode(template.content, true);
        element.appendChild(clone);
    }

    // called when the listview should be selected
    focus() {
        // activate the search box
        var search = this.element.querySelector('.listview-search input');
        search.focus();
    }
}

module.exports = ListView;
