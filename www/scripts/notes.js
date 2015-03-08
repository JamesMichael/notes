require('babelify/polyfill');
import Dialog from './dialog';
import Tabs from './tabs';

window.onload = function() {
    let settings_dialog = new Dialog('dialog_settings');

    let toolbar_settings_button = document.getElementById('toolbar_settings');
    toolbar_settings_button.addEventListener('click', e => settings_dialog.open());

    let settings_tab = new Tabs('tabs_settings');
}
