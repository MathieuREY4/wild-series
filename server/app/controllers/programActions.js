// Some data to make the trick
const tables = require("../../database/tables");

const programs = tables.program;

// Declare the action

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const program = programs.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read };
