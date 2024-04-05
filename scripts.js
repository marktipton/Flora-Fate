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
});

});
