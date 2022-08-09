"use strict";
const DBService = require("../utils/DB/service");
const { parseResponse } = require("../utils/helper");
const { success } = require("../utils/response");
const { getCustomersDetails } = require("./queries");

module.exports.hello = async (event) => {
  const result = parseResponse(
    await DBService.executeStatement(getCustomersDetails())
  );

  // return success
  return success(200, result);
};
