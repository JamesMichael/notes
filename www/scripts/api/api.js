class API {
    constructor() {
        this._next_project_id = 0;
        this._next_note_id = 0;
    }

    get next_project_id() { return this._next_project_id++; }
    get next_note_id()    { return this._next_note_id++; }

    read_projects() {
        return [];
    }

    read_project(id) {
        return null;
    }

    read_note(id) {
        return null;
    }

    write_projects(projects) {
    }

    write_project(project) {
    }

    delete_project(project) {
    }

    delete_note(note) {
    }
}

module.exports = API;
