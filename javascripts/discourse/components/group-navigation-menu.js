import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({

  GroupNavigationMenus: computed(function () {
    return JSON.parse(settings.custom_menu_sections_groups);
})

var usergroups = custom_menu_sections_groups.usergroups;
let usergroupsArray = usergroups.split('|');
var menus = custom_menu_sections_groups.menu 

groups.forEach(function(usergroup) {
  var sidebarSection = document.querySelector('.sidebar-section-wrapper.sidebar-section[data-section-name="' + menu + '"]');
  if (sidebarSection) {
     sidebarSection.style.display = 'none';
     }  
  var bodygroup = document.querySelector('body.group-' + usergroup);
  if (bodygroup) {
    var sidebarSection = bodygroup ('.sidebar-section-wrapper.sidebar-section[data-section-name="' + menu + '"]');
    if (sidebarSection) {
      sidebarSection.style.display = 'block';
    }
  }
});
