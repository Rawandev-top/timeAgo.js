function TimeAgo(locale) {
  const translations = {
    second: {
      ar: 'ثانية',
      de: 'Sekunde',
      en: 'second',
      ku_sorani: 'چرک',
      ku_kurmanji: 'çax',
    },
    minute: {
      ar: 'دقيقة',
      de: 'Minute',
      en: 'minute',
      ku_sorani: 'خولك',
      ku_kurmanji: 'xulkek',
    },
    hour: {
      ar: 'ساعة',
      de: 'Stunde',
      en: 'hour',
      ku_sorani: 'كاتژمêr',
      ku_kurmanji: 'katjî',
    },
    day: {
      ar: 'يوم',
      de: 'Tag',
      en: 'day',
      ku_sorani: 'ڕۆژ',
      ku_kurmanji: 'roj',
    },
    month: {
      ar: 'شهر',
      de: 'Monat',
      en: 'month',
      ku_sorani: 'مانگ',
      ku_kurmanji: 'meh',
    },
    year: {
      ar: 'عام',
      de: 'Jahr',
      en: 'year',
      ku_sorani: 'ساڵ',
      ku_kurmanji: 'sal',
    },
    justNow: {
      ar: 'الآن',
      de: 'soeben',
      en: 'just now',
      ku_sorani: 'نیو',
      ku_kurmanji: 'nû',
    },
    ago: {
      ar: 'منذ',
      de: 'vor',
      en: 'ago',
      ku_sorani: 'له پێش',
      ku_kurmanji: 'ber',
    },
  };

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
      return years + ' ' + translations.year[locale] + ' ' + translations.ago[locale];
    } else if (months > 0) {
      return months + ' ' + translations.month[locale] + ' ' + translations.ago[locale];
    } else if (days > 0) {
      return days + ' ' + translations.day[locale] + ' ' + translations.ago[locale];
    } else if (hours > 0) {
      return hours + ' ' + translations.hour[locale] + ' ' + translations.ago[locale];
    } else if (minutes > 0) {
      return minutes + ' ' + translations.minute[locale] + ' ' + translations.ago[locale];
    } else if (seconds > 0) {
      return seconds + ' ' + translations.second[locale] + ' ' + translations.ago[locale];
    } else {
      return translations.justNow[locale];
    }
  };
}
