$(function () {
    const zodiacs = [
        { sign: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 , playlist_id: ''},
        { sign: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 , playlist_id: ''},
        { sign: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 , playlist_id: ''},
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
            fetchPlaylist(matchedZodiac.playlist_id);
        } else {
            window.location.href = 'homepage.html';
        }
    });
    const token = 'BQCtqUjjAhqopASdUD5lAd3q-5lJhWdTNnZXTdj40DBJnHcahZvKdDve_EaUEBVA3fLecwhiPr-t655vd0LMqw43jwd4baCTHCAvhGkLvhhQs6ewoi8KMdIlQSYc5jDzNgTYvS-l8EJIlFOZQAfivjG0dDfKbZIopCtn8Q5FzBWrmyl79DakBPe-mXrG0i_rUEe7Rc1H2a13z-IWBUZ64lnayKrHfn_4zxHr58L8SyK8pdqujHceWGdYGzGYtQUllTE-fMJxDeK8JBnk2CDCDDeN';
    function fetchPlaylist(playlistId) {
        $.ajax({
            url: 'https://api.spotify.com/v1/playlists/' + playlistId,
            type: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            success: function(data) {
                displayPlaylist(data);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching playlist:', error);
            }
        });
    }

    function displayPlaylist(playlistData) {
        const tracks = playlistData.tracks.items;
        const playlistContainer = $('#playlistContainer');
        playlistContainer.empty();

        const ul = $('<ul>');
        tracks.forEach(function(track) {
            const li = $('<li>').text(track.track.name);
            ul.append(li);
        });
        playlistContainer.append(ul);
    }
});