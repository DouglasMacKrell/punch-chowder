var express = require("express");
var router = express.Router();
var bonusQueries = require("../queries/bonus");

router.get("/:bonus_id", async (req, res, next) => {
  try {
    var bonusId = req.params.bonus_id;
    var bonus = await bonusQueries.getBonusById(bonusId);
    res.json({
      status: "success",
      message: `The bonus content ${bonusId} retrieved!`,
      payload: bonus,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!!",
      payload: null,
    });
    throw error;
  }
});

router.get("/type/:type_id", async (req, res, next) => {
  try {
    const typeId = req.params.type_id;
    const allBonusByType = await bonusQueries.getAllBonusByTypeId(
      typeId
    );
    res.json({
      status: "success",
      message: `All bonus content of type ${typeId} retrieved!`,
      payload: allBonusByType,
    });
  } catch (err) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!",
      payload: null,
    });
    throw error;
  }
});

module.exports = router;
