export const workTimevalidate = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (hour >= 9 && hour < 17 && day > 0 && day < 6) {
    next();
  } else {
    res.status(403).send("Access Denied: Not in working hours or weekday");
  }
};
