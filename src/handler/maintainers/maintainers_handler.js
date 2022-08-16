"use strict";
const { parseResponse } = require("../../utils/helper");
const { failure, success } = require("../../utils/response");
const DBService = require("../utils/DB/service");
const { verifyShopIdQuery } = require("./queries");

// method to verify shop id
const verifyShopId = async (event) => {
  // try to parse the payload
  try {
    JSON.parse(event.body);
  } catch (e) {
    failure(400, "Invalid payload");
  }

  // assign inputs
  const inputs = JSON.parse(event.body);

  // if there is no inputs
  if (!inputs) {
    failure(
      400,
      "Invalid payload, Request should contain atleaast one attribute"
    );
  }

  // verify shop id query
  const result = parseResponse(
    await DBService.executeStatement(verifyShopIdQuery(inputs.shop_id))
  );

  // check if shop id exist or not
  if (result.exist == 0) {
    failure(400, "Invalid shop id");
  }

  // return success
  success(200, "Successfullly verified");
};

// main handler of maintainers
module.exports.handler = async (event) => {
  const path = event.requestContext.path;
  const method = event.requestContext.httpMethod;
  const pathArray = path.split("/").filter(String); // ["maintainers", "verify"]

  if (pathArray.length > 1) {
    switch (pathArray[1]) {
      case "verify":
        if (method == "POST") {
          return verifyShopId(event);
        }
        return failure(400, "Not Found");

      default:
        return failure(400, "Not Found");
    }
  }
  return failure(400, "Not Found");
};
