migrate((db) => {
  const collection = new Collection({
    "id": "7wqa79xcuo0p0pa",
    "created": "2023-07-03 09:53:17.529Z",
    "updated": "2023-07-03 09:53:17.529Z",
    "name": "sensitiveData",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7wqa79xcuo0p0pa");

  return dao.deleteCollection(collection);
})
