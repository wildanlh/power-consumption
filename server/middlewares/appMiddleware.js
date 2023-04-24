const osUtils = require("os-utils");
const pidusage = require("pidusage");
const si = require("systeminformation");

const getTargetAppPid = async (targetAppName) => {
  try {
    const processes = await si.processes();
    const targetApp = processes.list.find((p) => p.name === targetAppName);

    if (targetApp) {
      return targetApp.pid;
    } else {
      throw new Error("Target application not found.");
    }
  } catch (err) {
    console.error("Error fetching process list:", err);
    throw err;
  }
};

const calculatePowerUsage = async (pid) => {
  try {
    const cpuUsage = await pidusage(pid);
    const cpuInfo = await si.cpu();
    const totalCpuPower = cpuInfo.speed * cpuInfo.cores * 0.2415;
    const appPowerUsage = totalCpuPower * (cpuUsage.cpu / 100);
    return appPowerUsage;
  } catch (err) {
    console.error("Error calculating power usage:", err);
    throw err;
  }
};

module.exports = {
  getTargetAppPid,
  calculatePowerUsage,
};
