/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vkw0c84r2z4qr4y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cbkk3tue",
    "name": "color",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vkw0c84r2z4qr4y")

  // remove
  collection.schema.removeField("cbkk3tue")

  return dao.saveCollection(collection)
})
