$(function () {
    const zodiacs = [
        { sign: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
        { sign: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
        { sign: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 },
        { sign: 'Cancer', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22 },
        { sign: 'Leo', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
        { sign: 'Virgo', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
        { sign: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23 },
        { sign: 'Scorpio', startMonth: 10, startDay: 24, endMonth: 11, endDay: 21 },
        { sign: 'Sagittarius', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
        { sign: 'Capricorn', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
        { sign: 'Aquarius', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
        { sign: 'Pisces', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 }
    ];
    $('#userInfoForm').submit(function (event) {
        event.preventDefault();
        const formData = $(this).serializeArray();
        const userData = {};
        $.each(formData, function(_, field) {
            userData[field.name] = field.value;
        });
        console.log(userData);

        const birthday = new Date(userData.birthday);
        console.log(birthday);
        const month = birthday.getMonth() + 1;
        console.log(month);
        const day = birthday.getDate();
        console.log(day);


        let matchedZodiac = null;
        for (const zodiac of zodiacs) {
            if (
                (month === zodiac.startMonth && day >= zodiac.startDay) ||
                (month === zodiac.endMonth && day <= zodiac.endDay)
            ) {
                matchedZodiac = zodiac.sign;
                break;
            }
        }

        if (matchedZodiac) {
            window.location.href = matchedZodiac.toLowerCase() + '.html';
        } else {
            window.location.href = 'homepage.html';
        }
    });
});