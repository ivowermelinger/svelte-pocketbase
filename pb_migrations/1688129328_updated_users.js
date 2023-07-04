migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.viewRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.createRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.updateRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
