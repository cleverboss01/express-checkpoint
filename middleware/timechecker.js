const timeChecker = (req, res, next) => {
  const date = new Date();
  const time = date.getHours();
  const day = date.getDay();
  if (day == 0 || day > 5) {
    res.send("Closed for the weekend!");
    return;
  } else if (time < 9 || time > 17) {
    res.send("Working hours is between 9am and 5pm!");
    return;
  }
  next();
};

module.exports = timeChecker;
