<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shape Changer</title>
    <style>
        #shape {
            width: 100px;
            height: 100px;
            background-color: blue;
            margin: 20px;
        }
        .circle {
            border-radius: 50%;
        }
        .triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid blue;
            margin: 0;
        }
    </style>
</head>
<body>

    <div id="shape"></div>
    <button onclick="changeShape()">Change Shape</button>

    <script>
        let currentShape = 0;

        function changeShape() {
            const shapeDiv = document.getElementById('shape');
            shapeDiv.className = ''; // Reset shape

            if (currentShape === 0) {
                shapeDiv.classList.add('circle');
                currentShape++;
            } else if (currentShape === 1) {
                shapeDiv.classList.add('triangle');
                currentShape++;
            } else {
                shapeDiv.style.borderRadius = '0'; // Back to square
                shapeDiv.style.width = '100px';
                shapeDiv.style.height = '100px';
                currentShape = 0;
            }
        }
    </script>

</body>
</html>
