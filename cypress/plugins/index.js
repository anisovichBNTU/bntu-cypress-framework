/// <reference types="cypress" />
// /// <reference types="@shelex/cypress-allure-plugin" />

// const AllureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require("@cypress/webpack-preprocessor");
const DataBase = require('../../utils/databaseUtils/database');

module.exports = (on, config) => {
    const options = {
        webpackOptions: require("../webpack.config.js")
    };
    on("file:preprocessor", (file) => {
        return webpack(options)(file)
    });

    const db = new DataBase(config.env);
    on('task', {
        connectDB: () => {
            return db.connect;
        },
        queryDB: query => {
            return db.query(query);
        },
        closeDB: () => {
            return db.close;
        }
    });

    // AllureWriter(on, config);
    return config;
};