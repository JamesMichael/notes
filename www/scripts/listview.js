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

        let listviewcell_template = document.getElementById('listview_cell');
        let list_fragment = document.createDocumentFragment();
        for (let project_id of this.datasource) {
            let name = this.datasource.get(project_id);
            let cell = listviewcell(listviewcell_template, name);
            list_fragment.appendChild(cell);
        }

        // copy the template, add data, and render into element
        let name = datasource.name;
        let template = document.getElementById(templateid);
        template.content.querySelector('.listview-search input').placeholder = `Search ${name}`;
        template.content.querySelector('.listview-items').appendChild(list_fragment);

        let clone = document.importNode(template.content, true);
        element.appendChild(clone);

        template.content.querySelector('.listview-items').innerHTML = '';
    }

    // called when the listview should be selected
    focus() {
        // activate the search box
        var search = this.element.querySelector('.listview-search input');
        search.focus();
    }
}

function listviewcell(template, name) {
    template.content.querySelector('.name').innerHTML = name;

    let clone = document.importNode(template.content, true);
    return clone;
}

module.exports = ListView;
