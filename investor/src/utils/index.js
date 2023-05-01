export const daysLeft = (deadline) => {
  const deadlineDate = new Date(deadline);
  const today = new Date();
  const remainingTime = deadlineDate.getTime() - today.getTime();
  const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

  if (remainingDays < 0) {
    return "Expired";
  } else {
    return `${remainingDays} days left`;
  }
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
