let hr = document.querySelector('#hr');                 // ID yardımıyla saat class'ını değişken olarak tanımladık.
let mn = document.querySelector('#mn');             // ID yardımıyla dakika class'ını değişken olarak tanımladık.
let sc = document.querySelector('#sc');             // ID yardımıyla saniye class'ını değişken olarak tanımladık.

setInterval(()=> {                                           // Elemanların sürekli hareket halinde çalışması için.
    let day = new Date();                                   // Güncel tarihi almak için.
    let hh = day.getHours() * 30;                           // GetHours yardımıyla günün saat kısmını çektik. Her birr saatte 360/12=30 derecelik ilerleme yapacağı için 30 ile çarptık.
    let mm = day.getMinutes() * 6;                          // GetMinutes yardımıyla günün dakika kısmını çektik. Her bir dakikada 360/60=6 derecelik ilerleme yapacağı için 6 ile çarptık.
    let ss = day.getSeconds() * 6;                          // GetSeconds yardımıyla günün saniye kısmını çektik. Her bir saniyede 360/60=6 derecelik ilerleme yapacağı için 6 ile çarptık.

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;         // Akrebin kaç derece döneceğini hesaplamak için.
    mn.style.transform = `rotateZ(${mm}deg)`;               // Yelkovanın kaç derece döneceğini hesaplamak için.
    sc.style.transform = `rotateZ(${ss}deg)`;              // Saniye çubuğunun kaç derece döneceğini hesaplamak için.

    // Digital Clock
    let hours = document.getElementById('hours');               // Digital saatteki saat, dakika, saniye ve AM-PM'i tanımladık.
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();                              // Tarihi çekmek için yazdık.
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h>=12 ? "PM" : "AM";                               // Saat Öğleden önce ise AM, öğleden sonra ise PM yazmasını sağladık.

    // if(h>12) {                                               // 24 saatlik dilimi 12 saatlik dilime çevirmek için kullandık. Yani 15 yerine 3 yazmasını sağlayabiliriz, ancak ben projemde tercih etmedim.                                 
    //     h = h-12;
    // }

    h = (h<10) ? "0"+h :h                                       // Saat, dakika veya saniye tek haneli ise başına 0 eklemek için yazdık.
    m = (m<10) ? "0"+m :m
    s = (s<10) ? "0"+s :s

    hours.innerHTML = h;                                        // Saatin innerHTML sayesinde yazdırılmasını sağladık.
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

})