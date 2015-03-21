class ListViewDataSource {
    constructor(name) {
        this.name = name;
    }

    get name()     { return this._name; }
    set name(name) { this._name = name; }

    // create a new element
    // add the new element to the datasource
    // return the new element
    create() {
        return undefined;
    }

    // return an identifier for all entries in the list
    [Symbol.iterator]() {
        return {
            next: () => {
                return { value: undefined, done: true };
            }
        };
    }

    // return true iff the list contains an element
    // with the identifier
    contains(id) {
        return false;
    }

    // return the element of the list with the given
    // identifier, or undefined if it does not contain
    // the the named element
    get(id) {
        return undefined;
    }

    // moves the named element up |amount| positions
    move_up(id, amount = 1) {
    }

    // moves the named element down |amount| positions
    move_down(id, amount = 1) {
    }

    // removes the element with the given id
    remove(id) {
    }
}

module.exports = ListViewDataSource;
