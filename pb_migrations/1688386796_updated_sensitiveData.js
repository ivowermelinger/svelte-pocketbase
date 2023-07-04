migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7wqa79xcuo0p0pa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhnri2qg",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7wqa79xcuo0p0pa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhnri2qg",
    "name": "Test",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
