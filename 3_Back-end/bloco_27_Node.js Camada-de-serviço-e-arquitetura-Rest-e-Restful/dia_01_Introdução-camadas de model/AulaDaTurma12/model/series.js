const connection = require('./connection');

const find =  async () => {
  const [rows] = await connection().execute('SELECT * FROM series.characters');
  return rows;
};

const findById = async (id) => {
  const [rows] = await connection.execute(
    `SELECT * FROM series.characters WHERE id = ?`, [id]
  );
  return rows[0] ? rows[0] : null;
};

const create = async (name, series) => {
  const [row] = await connection().execute(
    `INSERT INTO series.characters (name, series) VALUES (?, ? )`, [name, series]
  );
  return { id: row.insertId, name, series };
};

const update = async (id, name, series) => {
  await connection().execute(
`UPDATE series.characters
SET
  name = ?,
  series = ?
  WHERE id = ?`,
    [name, series, id],
  );
  return { id, name, series };
};

const remove = async (id) => {
  await connection().execute(
    `DELETE FROM series.characters WHERE id = ?`, [id]
  );
};

module.exports = { find, findById, create, update, remove };