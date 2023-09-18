/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vkw0c84r2z4qr4y")

  // remove
  collection.schema.removeField("bv9vhjtz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c2kdqvll",
    "name": "favourite",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vkw0c84r2z4qr4y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bv9vhjtz",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("c2kdqvll")

  return dao.saveCollection(collection)
})
