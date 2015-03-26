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

        this.list_element = element.querySelector('.listview-items');
        this.select(this.datasource.first());
    }

    // called when the listview should be selected
    focus() {
        // activate the search box
        var search = this.element.querySelector('.listview-search input');
        search.focus();
    }

    select(id) {
        this.selected_id = id;
        this.render();
    }

    render() {
        let cell_template = document.getElementById('listview_cell');
        let list_fragment = document.createDocumentFragment();

        for (let project_id of this.datasource) {
            let name = this.datasource.get(project_id);
            let is_selected = project_id == this.selected_id;
            let cell = listviewcell(cell_template, name, is_selected);
            list_fragment.appendChild(cell);
        }

        this.list_element.innerHTML = '';
        this.list_element.appendChild(list_fragment);
    }
}

function listviewcell(template, name, is_selected = false) {
    template.content.querySelector('.name').innerHTML = name;

    if (is_selected) {
        template.content.querySelector('li').classList.add('active');
    } else {
        template.content.querySelector('li').classList.remove('active');
    }

    let clone = document.importNode(template.content, true);
    return clone;
}

module.exports = ListView;
