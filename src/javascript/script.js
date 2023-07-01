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

function createICalendar() {
    var cal = 'BEGIN:VCALENDAR\n' +
              'VERSION:2.0\n' +
              'PRODID:-//Your Website//NONSGML v1.0//EN\n';
  
    var event = 'BEGIN:VEVENT\n' +
                'SUMMARY:Undangan Pernikahan\n' +
                'DESCRIPTION:The Wedding Of Putri & Putra\n' +
                'DTSTART:20230729T090000\n' +  // Tanggal dan waktu mulai acara (format: YYYYMMDDTHHmmss)
                'DTEND:20230730T120000\n' +    // Tanggal dan waktu berakhirnya acara (format: YYYYMMDDTHHmmss)
                'END:VEVENT\n';
  
    var calendar = cal + event + 'END:VCALENDAR';
  
    // Membuat file iCalendar
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(calendar));
    element.setAttribute('download', 'file.ics');
    element.style.display = 'none';
    document.body.appendChild(element);
  
    // Mengunduh file iCalendar
    element.click();
  
    document.body.removeChild(element);
  }
  