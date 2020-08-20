// DATABASE CONNECTION
const db = require("../database/db");

//GET
const getEpisodeById = async (id) => {
    // const getQuery = `
    // SELECT *
    // FROM episodes
    // WHERE id=$1
    // `
    // let episode = await db.one(getQuery, [id]);
    // return episode
  return await db.oneOrNone("SELECT * FROM episodes WHERE id=$1", [id]);
};

const getAllEpisodesBySeasonId = async (seasonId) => {
  return await db.any("SELECT * FROM episodes WHERE season_id=$1", [seasonId]);
};

// EXPORT
module.exports = {
    getEpisodeById,
    getAllEpisodesBySeasonId
}