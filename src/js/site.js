(function(window) {
    var tmpf = window.onload,
        clickHandler = function (evt) {
            var target = evt.originalTarget || evt.target,
                toggle = document.getElementById("toggle");
            if (target.id != toggle.id && target.htmlFor != toggle.id) {
                toggle.checked = false;
            }
        };

    window.onload = function () {
        if (tmpf) tmpf();
        document.getElementById("navigation").addEventListener("click", clickHandler, false);
        document.getElementById("page").addEventListener("click", clickHandler, false);
    }
}) (window);