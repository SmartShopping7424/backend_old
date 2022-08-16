module.exports = {
  // method to check if shop id exist
  verifyShopIdQuery(shopId) {
    return `SELECT EXIST(Select * FROM shops WHERE shop_id='${shopId}') as exist`;
  },
};
