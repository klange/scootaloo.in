var n = 6;
var backgrounds = [
    "bgs/1.jpg", /* http://tamalesyatole.deviantart.com/art/Princess-Celestia-s-Room-306944208 */
    "bgs/2.jpg", /* http://sigmavirus1.deviantart.com/art/MLP-FiM-Courtroom-296432712 */
    "bgs/3.jpg", /* http://stinkehund.deviantart.com/art/Sweet-Apple-Acres-svg-301920207 */
    "bgs/4.jpg", /* http://sigmavirus1.deviantart.com/art/MLP-FiM-Post-Office-296131590 */
    "bgs/5.jpg", /* http://sigmavirus1.deviantart.com/art/MLP-FiM-Hotel-Room-297318145 */
    "bgs/6.jpg", /* http://sigmavirus1.deviantart.com/art/MLP-FiM-Twilight-s-Laboratory-295927448 */
];
var i = 0;

/* Scootaloo source: http://orschmann.deviantart.com/art/Scootaloo-wants-you-out-307619889 */

function nextBackground() {
    i += 1;
    if (i == n) {
        i = 0;
    }
    document.body.style.backgroundImage = "url(" + backgrounds[i] +")";
}

window.onload = function() {
    /* iPad? */
    if (navigator.userAgent.match(/iPad/i) != null) {
        audio = document.getElementById("background-audio");
        audio.setAttribute("controls","controls");
    }
    var j = 0;
    /* Preload the backgrounds */
    while (j != n) {
        preload = new Image();
        preload.src = backgrounds[j];
        j++;
    }
    /* Reset the CSS animation */
    var elm = document.getElementById("scootaloo-one");
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
    setInterval("nextBackground()", 2800);
}
