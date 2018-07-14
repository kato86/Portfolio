window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // document.getElementById("head-height").classList.add = "height-25";
        // document.getElementById("margin-t").className = "margin-t-15";
    } else {
        // document.getElementById("head-height").className = "";
        // document.getElementById("margin-t").className = "";
    }
}