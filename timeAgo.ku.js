function TimeAgo() {
  this.format = function (timestamp) {
    const now = new Date();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} sal berê`;
    } else if (months > 0) {
      return `${months} meh berê`;
    } else if (days > 0) {
      return `${days} roj berê`;
    } else if (hours > 0) {
      return `${hours} saet berê`;
    } else if (minutes > 0) {
      return `${minutes} deqîqe berê`;
    } else if (seconds > 0) {
      return `${seconds} çirke berê`;
    } else {
      return 'nuha';
    }
  };
}
