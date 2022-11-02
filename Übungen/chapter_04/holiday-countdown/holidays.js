function getUpcomingDate(month, day) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextDate = new Date(currentYear, month - 1, day);

    if (today > nextDate) {
        nextDate.setFullYear(currentYear + 1);
    }

    return nextDate;
}

const HOLIDAYS = [
    { name: "New Year", date: getUpcomingDate(1, 1) },
    { name: "Halloween", date: getUpcomingDate(10, 31) },
    { name: "Christmas", date: getUpcomingDate(12, 24) },
];
