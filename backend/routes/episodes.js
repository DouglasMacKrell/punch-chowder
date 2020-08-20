var express = require("express");
var router = express.Router();
var episodesQueries = require("../queries/episodes");

router.get("/:episode_id", async (req, res, next) => {
  try {
    const episodeId = req.params.episode_id;
    const episode = await episodesQueries.getEpisodeById(episodeId);
    res.json({
      status: "success",
      message: `Episode ${episodeId} retrieved!`,
      payload: episode,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!!",
      payload: null,
    });
    throw err;
  }
});

router.get("/season/:season_id", async (req, res, next) => {
  try {
    const seasonId = req.params.season_id;
    const allEpisodesBySeason = await episodesQueries.getAllEpisodesBySeasonId(seasonId);
    res.json({
      status: "success",
      message: `All episodes of season ${seasonId} retrieved!`,
      payload: allEpisodesBySeason,
    });
  } catch (err) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!",
      payload: null,
    });
    throw err;
  }
});
