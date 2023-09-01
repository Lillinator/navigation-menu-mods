import Component from "@ember/component";

export default Component.extend {
  get GroupNavigationMenus() {
    return JSON.parse(settings.custom_menu_sections_groups);
  }
});

var usergroups = custom_menu_sections_groups.usergroups; 
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
