module.exports = async(req, res, nest) => {
  const responseTime = Date.now() - req.startTime;
  console.log(`Response time: ${responseTime}ms`);
  console.log(`User: ${req.user}`);
};