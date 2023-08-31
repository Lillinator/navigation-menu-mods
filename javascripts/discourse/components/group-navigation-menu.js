
import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { computed } from "@ember/object";

export default Component.extend({

  bannerLinks: computed(function () {
    return JSON.parse(settings.custom_menu_sections_groups);
  }),
});
