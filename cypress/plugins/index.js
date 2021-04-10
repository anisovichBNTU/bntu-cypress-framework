/// <reference types="cypress" />
// /// <reference types="@shelex/cypress-allure-plugin" />

// const AllureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require("@cypress/webpack-preprocessor");

module.exports = (on, config) => {
    const options = {
        webpackOptions: require("../webpack.config.js")
    };
    on("file:preprocessor", (file) => {
        return webpack(options)(file)
    });

    // AllureWriter(on, config);
    return config;
};