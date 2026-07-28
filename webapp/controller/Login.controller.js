sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("loginpage.controller.Login", {

        onLogin() {

            var sUser = this.byId("loginusername").getValue();
            var sPass = this.byId("loginpassword").getValue();

            if (sUser && sPass) {
                MessageToast.show("Login Successful");
            } else {
                MessageToast.show("Enter Username and Password");
            }
        },

        onRegister() {
            this.getOwnerComponent().getRouter().navTo("register");
        }

    });

});
