const commonHeaders = require("../utils/headers/commonHeaders");

module.exports = {
  /**
   * @description Method to send success message
   * @param {*} code
   * @param {*} input_data
   * @returns Success
   */
  success(code = 200, input_data) {
    if (Array.isArray(input_data)) {
      let obj = {
        statusCode: code,
        headers: commonHeaders,
        body: JSON.stringify(
          {
            code: code,
            data: input_data,
          },
          null,
          2
        ),
      };
      return obj;
    } else if (input_data != null && input_data.constructor.name === "Object") {
      let obj = {
        statusCode: code,
        headers: commonHeaders,
        body: JSON.stringify(
          {
            code: code,
            data: input_data,
          },
          null,
          2
        ),
      };
      return obj;
    } else {
      let obj = {
        statusCode: code,
        headers: commonHeaders,
        body: JSON.stringify(
          {
            code: code,
            message: input_data,
          },
          null,
          2
        ),
      };

      return obj;
    }
  },

  /**
   * @description Method to send faliure message
   * @param {*} code
   * @param {*} input_data
   * @returns Faliure
   */
  failure(code = 402, input_data) {
    if (Array.isArray(input_data)) {
      let obj = {
        statusCode: code,
        headers: commonHeaders,
        body: JSON.stringify(
          {
            code: code,
            errrors: input_data,
          },
          null,
          2
        ),
      };
      return obj;
    } else {
      let obj = {
        statusCode: code,
        headers: commonHeaders,
        body: JSON.stringify(
          {
            code: code,
            message: input_data,
          },
          null,
          2
        ),
      };
      return obj;
    }
  },
};
