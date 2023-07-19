sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.visa.project.visaproject.controller.View1", {
            onInit: function () {
                var oDataControl = {
                    consentToTC: false,
                    consentToSD: false
                };
                var oMdlCtrl = new JSONModel(oDataControl);
                this.getView().setModel(oMdlCtrl, "oModelControl");
            },
            onConfirmTC: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("worklist", {}, true);
            }
        });
    });
