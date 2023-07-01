class Service {
  constructor(Model) {
    this.Model = Model;
  }
  async create(data) {
    return await this.Model.create({ ...data });
  }
  async get(id) {
    return await this.Model.findByPk(id);
  }
  async update(id, data) {
    let currItem = await this.Model.findByPk(id);
    currItem.update({ ...data });

    await currItem.save();

    return "user updated successfully !";
  }
  async deleteItem(id) {
    let currUser = await this.Model.findByPk(id);
    await currUser.destroy();
    return "user deleted successfully !";
  }
}

module.exports = Service;
