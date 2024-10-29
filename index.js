
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".Igor");
    var surname = document.querySelector(".Michalski");
    var image = document.querySelector(".https://files.fm/u/ygkkubpd6m");

    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    location.href = "/yObywatel/id?" + params;
});
