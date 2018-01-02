const db = require('./connections')

function getUsers(){
  return db.select().from('users')
}

function getUserById(id){
  return db('users').select('*').where('id', id)
}

function createUser(user){
  return db('users').insert(user).returning('*')
}

function update(id, user){
  return db.update(user).from('users').where('id', id)
}

function deleteUser(id){
  return db.delete().from('users').where('id', id)
}

//resolution routes

function getResolutions(){
  return db.select().from('resolutions')
}

function getRezById(id){
  return db('resolutions').select('*').where('user_id', id).innerJoin('users', 'user_id','users.id')
}

function newResolution(rez){
  return db('resolutions').insert(rez).returning('*')
}

function updateRez(id, rez){
  return db.update(rez).from('resolutions').where('id', id)
}

function deleteRez(id){
  return db.delete().from('resolutions').where('id', id)
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  update,
  deleteUser,
  getResolutions,
  getRezById,
  newResolution,
  updateRez,
  deleteRez
}
