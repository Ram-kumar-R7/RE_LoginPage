sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("loginpage.controller.Register", {

        onBack() {
            this.getOwnerComponent().getRouter().navTo("login");
        },

        onCreate() {

            var sFirstName = this.byId("firstName").getValue();
            var sLastName = this.byId("lastName").getValue();
            var sEmail = this.byId("email").getValue();
            var sMobile = this.byId("mobile").getValue();
            var sDob = this.byId("dob").getValue();
            var sGender = this.byId("gender").getSelectedKey();
            var sUsername = this.byId("registerUsername").getValue();
            var sPassword = this.byId("registerPassword").getValue();
            var sConfirmPassword = this.byId("confirmPassword").getValue();

            if (
                !sFirstName ||
                !sLastName ||
                !sEmail ||
                !sMobile ||
                !sDob ||
                !sUsername ||
                !sPassword ||
                !sConfirmPassword
            ) {
                MessageToast.show("Please fill all fields");
                return;
            }

            if (sPassword !== sConfirmPassword) {
                MessageToast.show("Passwords do not match");
                return;
            }

            MessageToast.show("Account Created Successfully");
        }

    });

});



