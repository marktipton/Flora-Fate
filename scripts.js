$(function () {
    const form = document.getElementById('userInfoForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const userData = {};
        for (const [key, value] of formData.entries()) {
            userData[key] = value;
        }
        console.log(userData);

        const birthday = new Date(userData.birthday);
        const month = birthday.getMonth() + 1;
        const day = birthday.getDate();


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
            window.location.href = 'aries.html';
            window.location.href = 'taurus.html';
            window.location.href = 'gemini.html';
            window.location.href = 'cancer.html';
            window.location.href = 'leo.html';
            window.location.href = 'virgo.html';
            window.location.href = 'libra.html';
            window.location.href = 'scorpio.html';
            window.location.href = 'sagittarius.html';
            window.location.href = 'capricorn.html';
            window.location.href = 'aquarius.html';
            window.location.href = 'pisces.html'; 
        } else {
            window.location.href = 'default.html';
        }

        this.submit();
    });
});