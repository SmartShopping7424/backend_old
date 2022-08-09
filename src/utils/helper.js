module.exports = {
  /**
   * @description Method to parse the query data
   * @param {*} query_data
   * @returns actual data
   */
  parseResponse(query_data) {
    let data = query_data.map((item) => ({ ...item }));

    // if data array is greater than 1
    if (data.length > 1) {
      return data;
    }

    // if data array is less than 1
    else {
      return data[0];
    }
  },
};
