sap.ui.define([
    "sap/ui/core/UIComponent",
    "Alfa02/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("Alfa02.SAPUI5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "Alfa02.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })
    });