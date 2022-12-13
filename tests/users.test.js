const axios = require('axios');
const {BASE_ARL} = process.env;
let user_id = "";
let account_id = "";

describe("Test users controller", function () {
  it('GET /api/user', function (done) {
    axios.get(`${BASE_ARL}/api/user`).then((res) => {
      expect(res.status).toBe(200);
    });
    done();
  });
  it('POST /api/user/create', function (done) {
    axios.post(`${BASE_ARL}/api/user/create`, {
      name: "test",
      email: "test@gmail.com",
      monthly_salary: 1000,
      monthly_expenses: 500
    }).then((res) => {
      user_id = res.data.id;
      expect(res.status).toBe(201);
    });
    done();
  });
  it('GET /api/user', function (done) {
    axios.get(`${BASE_ARL}/api/user/${user_id}`).then((res) => {
      expect(res.status).toBe(200);
    });
    done();
  });
  it('POST /api/accounts/create', function (done) {
    axios.post(`${BASE_ARL}/api/accounts/create`, {
      user_id: user_id,
      avatar: 'test url',
      "specialization": "string"
    }).then((res) => {
      account_id = res.data.id;
      expect(res.status).toBe(201);
    });
    done();
  });
  it('GET /api/accounts/', function (done) {
    axios.get(`${BASE_ARL}/api/accounts/${account_id}`).then((res) => {
      expect(res.status).toBe(200);
    });
    done();
  });
})




