exports.up = function (knex, Promise) {
  knex.schema.hasTable('incidents').then(function (exists) {
    if (!exists) {
      knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
      })
        .then((result) => {

        })
        .catch((err) => {

        })
    } else {
      return
    }
  })
};

exports.down = function (knex) {
  knex.schema.dropTable('incidents');
};
