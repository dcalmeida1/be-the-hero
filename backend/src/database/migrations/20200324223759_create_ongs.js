
exports.up = function (knex, Promise) {
  knex.schema.hasTable('ongs').then(function (exists) {
    if (!exists) {
      knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
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
  knex.schema.dropTable('ongs');
};
