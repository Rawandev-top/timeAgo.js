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
      return `Vor ${years} Jahre`;
    } else if (months > 0) {
      return `Vor ${months} Monate`;
    } else if (days > 0) {
      return `Vor ${days} Tage`;
    } else if (hours > 0) {
      return `Vor ${hours} Stunde`;
    } else if (minutes > 0) {
      return `Vor ${minutes} Minute`;
    } else if (seconds > 0) {
      return `Vor ${seconds} Sekunden`;
    } else {
      return 'Jetzt';
    }
  };
}
