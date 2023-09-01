import Component from "@ember/component";

export default Component.extend {
  get GroupNavigationMenus() {
    return JSON.parse(settings.custom_menu_sections_groups);
  }
});

var groups = custom_menu_sections_groups.groups; 
var menus = custom_menu_sections_groups.menu 

groups.forEach(function(group) {
  var sidebarSection = document.querySelector('.sidebar-section-wrapper.sidebar-section[data-section-name="' + menu + '"]');
  if (sidebarSection) {
     sidebarSection.style.display = 'none';
     }  
  var body = document.querySelector('body.group-' + group);
  if (body) {
    var sidebarSection = body.querySelector('.sidebar-section-wrapper.sidebar-section[data-section-name="' + menu + '"]');
    if (sidebarSection) {
      sidebarSection.style.display = 'block';
    }
  }
});
