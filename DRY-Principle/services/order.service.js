let Service = require("./crud.service");

class orderService extends Service {
  constructor(Model) {
    super(Model);
  }
  async getUserOrders(userId) {
    let orders = await this.Model.findAll({ where: { userId } });

    return orders;
  }
}

module.exports = orderService;
