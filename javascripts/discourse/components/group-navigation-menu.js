import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  init() {
    this._super(...arguments);
    const customMenuSectionsGroups = JSON.parse(
      settings.custom_menu_sections_groups
    );

    customMenuSectionsGroups.forEach(({ usergroups, menu }) => {
      let usergroupsArray = usergroups.split("|");

      usergroupsArray.forEach((usergroup) => {
        document
          .querySelectorAll(".sidebar-section-wrapper.sidebar-section")
          .forEach((sidebarSection) => {
            sidebarSection.style.display = "none";
          });

        const bodygroup = document.querySelector("body.group-" + usergroup);
        if (bodygroup) {
          const sidebarSection = bodygroup.querySelector(
            '.sidebar-section-wrapper.sidebar-section[data-section-name="' +
              menu +
              '"]'
          );
          if (sidebarSection) {
            sidebarSection.style.display = "block";
          }
        }
      });
    });
  },
});
