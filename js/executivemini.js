;
(function(exports) {
    "use strict";

    /**
     * Router =============================================
     */

    Backbone.BeerRouter = Backbone.Router.extend({

        initialize: function() {
            this.homeView = new Backbone.HomeView();

            Backbone.history.start();
        },

        routes: {
            "*default": "home"
        },
        home: function() {
            this.homeView.render();
        }
    });

    /**
     * Views =============================================
     */

     Backbone.HomeView = Backbone.TemplateView.extend({
        el: ".main",
        view: "home"
     });




    exports.BeerRouter = Backbone.BeerRouter;

})(typeof module === 'object' ? module.exports : window);