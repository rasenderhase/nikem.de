(function(window) {
    var tmpf = window.onload;

    window.onload = function () {
        if (tmpf) tmpf();

        document.body.onclick = function (evt) {
            var target = evt.originalTarget || evt.target,
            toggle = document.getElementById("toggle");
            if (target.id != toggle.id && target.htmlFor != toggle.id) {
                toggle.checked = false;
            }
        }

    }
}) (window);