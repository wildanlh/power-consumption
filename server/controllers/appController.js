const {
  getTargetAppPid,
  calculatePowerUsage,
} = require("../middlewares/appMiddleware");

const appTarget = async (req, res) => {
  const targetAppName = req.params.appName;

  try {
    const pid = await getTargetAppPid(targetAppName);
    const appPowerUsage = await calculatePowerUsage(pid);
    res.json({
      appName: targetAppName,
      pid: pid,
      powerUsage: appPowerUsage.toFixed(2) + " W",
    });
  } catch (err) {
    res.status(500).json({ error: "Error calculating power usage." });
  }
};

module.exports = appTarget;
