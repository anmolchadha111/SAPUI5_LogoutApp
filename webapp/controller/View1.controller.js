sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.LogoutApp.controller.View1", {
		onInit: function () {

		},
		onLogout: function () {
			sap.m.URLHelper.redirect("/logout.html", false);
		}
	});
});