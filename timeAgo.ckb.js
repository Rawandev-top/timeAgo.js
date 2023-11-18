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
      return `${years} ساڵ پێش ئێستا`;
    } else if (months > 0) {
      return `${months} مانگ پێش ئێستا`;
    } else if (days > 0) {
      return `${days} ڕۆژ پێش ئێستا`;
    } else if (hours > 0) {
      return `${hours} کاتژمێر پێش ئێستا`;
    } else if (minutes > 0) {
      return `${minutes} خولەك پێش ئێستا`;
    } else if (seconds > 0) {
      return `${seconds} چرکە پێش ئێستا`;
    } else {
      return 'ئێستا';
    }
  };
}
