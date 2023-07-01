// deny auto translator language in user device
if (window.googleTranslateElementInit) {
    window.googleTranslateElementInit = null;
};

// hide boarding page element on click
const btnOpenInvitation = document.querySelector('.btn-open-invitation');
const navlink = document.querySelector('.navlink');
const container = document.querySelector('.container');
btnOpenInvitation.addEventListener('click', () => {
    document.querySelector('.boarding-image').classList.add('close-page');
    navlink.classList.remove('hide-content');
    container.classList.remove('hide-content');
});

// connecting to google map
const btnOpenMapLocation = document.querySelector('.btn-open-map-location');
btnOpenMapLocation.addEventListener('click', () => {
    window.location.href = 'https://goo.gl/maps/sxBwxuHZTxP6Caed8';
});

// create function to adding date reminder to the user calendar
function createICalendar() {
    const cal = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:-//Your Website//NONSGML v1.0//EN\n';

    const greeting = 'Hallo Putri & Putra, Happy Wedding ya buat kalian.. Semoga Sakinah Mawaddah Warohmah..';

    const emailLink = 'mailto:dediindrawan812@gmail.com?subject=Hallo%20Putri%20&%20Putra&body=' + encodeURIComponent(greeting);

    const event = 'BEGIN:VEVENT\n' +
        'SUMMARY:Undangan Pernikahan Putri Amanda & Putra Alamsyah\n' +
        'DESCRIPTION:Tanpa mengurangi rasa hormat kami kepada Bapak/Ibu/Saudara/i, kami selaku kedua mempelai ingin mengundang Bapak/Ibu/Saudara/i untuk dapat menghadiri acara pernikahan kami pada:\nHari: Sabtu\nTanggal: 29 Juni 2023\nAlamat: Jl.Tebet Dalam IV D No.32 A RT.016 RW.001, Kecamatan.Tebet, Kelurahan.Tebet-Barat.\nAtas kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian, kami ucapkan Terimakasih.\n' +
        'DTSTART:20230715T090000\n' +
        'DTEND:20230715T170000\n' +
        'LOCATION:https://goo.gl/maps/sxBwxuHZTxP6Caed8\n' +
        'DESCRIPTION:WA://send?text=Hallo%20Putri%20&%20Putra,%20Happy%20Wedding%20ya%20buat%20kalian..%20Semoga%20%Sakinah%20Mawaddah%20Warohmah..&phone=628974523500\n' +
        'ORGANIZER;CN=Putri:' + emailLink + '\n' +
        'END:VEVENT\n';

    const calendar = cal + event + 'END:VCALENDAR';

    // create file iCalendar
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(calendar));
    element.setAttribute('download', 'file.ics');
    element.style.display = 'none';
    document.body.appendChild(element);

    // download file iCalendar
    element.click();

    document.body.removeChild(element);
};
