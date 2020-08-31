// DATABASE CONNECTION
const db = require("../database/db");

//GET
const getBonusById = async (id) => {
  return await db.oneOrNone("SELECT * FROM bonus WHERE id=$1", [id]);
};

const getAllBonusByTypeId = async (bonusId) => {
  return await db.any("SELECT * FROM bonus WHERE bonus_id=$1", [bonusId]);
};

// EXPORT
module.exports = {
  getBonusById,
  getAllBonusByTypeId,
};
