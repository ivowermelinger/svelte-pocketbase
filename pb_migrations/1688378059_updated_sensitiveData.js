migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7wqa79xcuo0p0pa")

  collection.listRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.viewRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.createRule = "@request.auth.id != '' && @request.auth.apiAccess = true"
  collection.updateRule = "@request.auth.id != '' && @request.auth.apiAccess = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7wqa79xcuo0p0pa")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
