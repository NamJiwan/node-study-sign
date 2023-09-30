"use strict";

class UserStorage{
  static #users = {
    id:["test",],
    psword:["1234"],
    name:["지완"],
  }

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fiels.reduce((newUsers,fields)=>{
      if(users.hasOwnProperty(fields)){
        newUsers[fields] = users[fields];
      }
      return newUsers;
    },{})
    return newUsers;
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys= Object.keys(users);
    const userInfo = usersKeys.reduce((newUsers,info)=>{
      newUsers[info] = users[info][idx];
      return newUsers
    },{});
    return userInfo;
  }

  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
    // return {success: true};
  }
}

module.exports = UserStorage;