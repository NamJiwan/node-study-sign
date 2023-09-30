"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && psword === client.psword) {
        return {sucess:true};
      }
      return {sucess:false,msg:"아이디비밀번화 확인해주세요"}
    }
    return {sucess:false,msg:"아이디비 번화 확인해주세요"}
  }

  register(){
    const client = this.body;
     UserStorage.save(client);
    // return response;
  }
}

module.exports = User;
