var sizeFactor = 1;
        function circleColorChanged(color) {
            var circle = document.getElementById("svgCircle");
            circle.style.fill = color;

        }
        function changePositions() {
            var circle = document.getElementById("svgCircle");
            var rect = document.getElementById("svgRect");
            var cText = document.getElementById("svgTextCircle");
            var rText = document.getElementById("svgTextRect");

            if (Number(circle.getAttribute('cx')) < 100 * sizeFactor) {
                circle.setAttribute('cx', 170 * sizeFactor);
                rect.setAttribute('x', 10 * sizeFactor);
                cText.setAttribute('x', 155 * sizeFactor);
                rText.setAttribute('x', 45 * sizeFactor);
            }
            else {
                circle.setAttribute('cx', 50 * sizeFactor);
                rect.setAttribute('x', 110 * sizeFactor);
                cText.setAttribute('x', 35 * sizeFactor);
                rText.setAttribute('x', 145 * sizeFactor);
            }
        }

        function scaleChanged(size) {
            sizeFactor = Number(size) / 10;
            var circle = document.getElementById("svgCircle");
            var rect = document.getElementById("svgRect");
            var svg = document.getElementById("svg");
            var cText = document.getElementById("svgTextCircle");
            var rText = document.getElementById("svgTextRect");

            svg.setAttribute('width', 340 * sizeFactor);
            svg.setAttribute('height', 100 * sizeFactor);


            circle.setAttribute('r', 40 * sizeFactor);
            circle.setAttribute('cx', 50 * sizeFactor);
            circle.setAttribute('cy', 50 * sizeFactor);

            rect.setAttribute('width', 100 * sizeFactor);
            rect.setAttribute('height', 80 * sizeFactor);
            rect.setAttribute('x', 110 * sizeFactor);
            rect.setAttribute('y', 10 * sizeFactor);

            cText.setAttribute('x', 35 * sizeFactor);
            cText.setAttribute('y', 55 * sizeFactor);

            rText.setAttribute('x', 145 * sizeFactor);
            rText.setAttribute('y', 55 * sizeFactor);


            svg.style.background = "rgb("+10*sizeFactor*2+","+100*sizeFactor/2+","+200*sizeFactor/4+")";

        }
        function rectColorChanged(color){
            var rect = document.getElementById("svgRect");
            rect.style.fill = color;
        }