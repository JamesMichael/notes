require('babelify/polyfill');
import Dialog from './dialog';
import Tabs from './tabs';
import Sidebar from './sidebar';

window.onload = function() {
    let settings_dialog = new Dialog('dialog_settings');

    let toolbar_settings_button = document.getElementById('toolbar_settings');
    toolbar_settings_button.addEventListener('click', e => settings_dialog.open());

    let settings_tab = new Tabs('tabs_settings');

    let sidebar = new Sidebar('sidebar');

    let toolbar_projects_button = document.getElementById('toolbar_projects');
    toolbar_projects_button.addEventListener('click', e => sidebar.toggle_pane('projects'));

    let toolbar_notes_button = document.getElementById('toolbar_notes');
    toolbar_notes_button.addEventListener('click', e => sidebar.toggle_pane('notes'));
}
