'use strict';

ApplicationConfiguration.registerModule('core'); // jshint ignore:line

require('./js/config/core.locales.js'); // jshint ignore:line
require('./js/config/core.menu.js'); // jshint ignore:line
require('./js/config/core.route.js'); // jshint ignore:line
require('./js/controllers/core.controller.js'); // jshint ignore:line
require('./js/controllers/nav.controller.js'); // jshint ignore:line
require('./js/controllers/footer.controller.js'); // jshint ignore:line
require('./js/services/scrollToElement.service.js'); // jshint ignore:line
require('./js/services/menus.service.js'); // jshint ignore:line
require('./js/directives/core.directive.js'); // jshint ignore:line
require('./js/directives/core.content.editable.js'); // jshint ignore:line


// models
require('./js/services/admin.js'); // jshint ignore:line
require('./js/services/app_instance.js'); // jshint ignore:line
require('./js/services/product.js'); // jshint ignore:line
require('./js/services/dashboard.js'); // jshint ignore:line
require('./js/services/company.js'); // jshint ignore:line
require('./js/services/location.js'); // jshint ignore:line
require('./js/services/settings.js'); // jshint ignore:line
require('./js/services/user.js'); // jshint ignore:line
require('./js/services/order.js'); // jshint ignore:line
require('./js/services/sync.js'); // jshint ignore:line
require('./js/services/webhook_event.js'); // jshint ignore:line
