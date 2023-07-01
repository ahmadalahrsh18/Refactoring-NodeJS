class CRUDController {
  constructor(Service) {
    this.Service = Service;
  }
  async create(Req, Res) {
    let Ans = await this.Service.create(Req.body);

    Res.json({ Ans });
  }
  async get(Req, Res) {
    let Ans = await this.Service.get(Req.params.id);

    Res.json({ Ans });
  }
  async update(Req, Res) {
    let Ans = await this.Service.update(Req.params.id, Req.body);

    Res.json({ Ans });
  }
  async delete(Req, Res) {
    let Ans = await this.Service.deleteUser(Req.params.id);

    Res.json({ Ans });
  }
}

module.exports = CRUDController;
