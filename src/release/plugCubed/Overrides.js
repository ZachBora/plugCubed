define(['plugCubed/Class', 'plugCubed/overrides/UserInventory', 'plugCubed/overrides/UserRolloverView', 'plugCubed/overrides/WaitListRow'], function() {
    var modules, Class, handler;

    modules = $.makeArray(arguments);
    Class = modules.shift();

    handler = Class.extend({
        override: function() {
            this.revert();
            for (var i in modules) {
                if (modules.hasOwnProperty(i))
                    modules[i].override();
            }
        },
        revert: function() {
            for (var i in modules) {
                if (modules.hasOwnProperty(i))
                    modules[i].revert();
            }
        }
    });

    return new handler();
});