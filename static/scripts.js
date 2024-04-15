$(function () {
    function showLoader() {
        $(".loader").show();
        }

        function hideLoader() {
        $(".loader").hide();
        }
    const zodiacs = [
        { sign: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 , playlist_id: '37i9dQZF1DX2DC3Q7JOmYe'},
        { sign: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 , playlist_id: ''},
        { sign: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 , playlist_id: '37i9dQZF1DWWVULl5wUsL9'},
        { sign: 'Cancer', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22 , playlist_id: ''},
        { sign: 'Leo', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 , playlist_id: ''},
        { sign: 'Virgo', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 , playlist_id: ''},
        { sign: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23 , playlist_id: ''},
        { sign: 'Scorpio', startMonth: 10, startDay: 24, endMonth: 11, endDay: 21 , playlist_id: ''},
        { sign: 'Sagittarius', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 , playlist_id: ''},
        { sign: 'Capricorn', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 , playlist_id: ''},
        { sign: 'Aquarius', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 , playlist_id: ''},
        { sign: 'Pisces', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 , playlist_id: ''}
    ];
    let name = '';
    $('#userInfoForm').submit(function (event) {
        event.preventDefault();
        name = $('#name').val();
        const formData = $(this).serializeArray();
        const userData = {};
        $.each(formData, function(_, field) {
            userData[field.name] = field.value;
        });
        console.log(formData);
        const birthday = new Date(userData.birthday);
        console.log(birthday);
        const month = birthday.getMonth() + 1;
        console.log(month);
        const day = birthday.getDate() + 1;
        console.log(day);


        let matchedZodiac = null;
        let zodiacPlaylist_id = null;
        for (const zodiac of zodiacs) {
            if (
                (month === zodiac.startMonth && day >= zodiac.startDay) ||
                (month === zodiac.endMonth && day <= zodiac.endDay)
            ) {
                matchedZodiac = zodiac.sign;
                zodiacPlaylist_id = zodiac.playlist_id;
                break;
            }
        }

        if (matchedZodiac) {
            // Redirect to the loading page with the matchedZodiac as a URL parameter
            window.location.href = `loading.html?zodiac=${matchedZodiac}`;
        } else {
            window.location.href = 'homepage.html';
        }
    });

});