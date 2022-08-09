const dbConfig = require("../../config/db");
const mysql = require("mysql");
const util = require("util");

module.exports = {
  /**
   * @description Method to execute query statement
   * @param {*} query_string
   * @returns executed query data
   */
  async executeStatement(query_string) {
    const connection = mysql.createConnection(dbConfig);
    const query = util.promisify(connection.query).bind(connection);
    try {
      return await query(query_string);
    } catch (e) {
      console.log("SQL error :: ", e);
    } finally {
      connection.end();
    }
  },
};
