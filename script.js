<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guías de Matemáticas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="imagenes/insignia.png" alt="Insignia">
        </div>
        <div class="instituto">
            <p>Instituto Regional</p>
            <p>Federico Errazuriz</p>
        </div>
        <div class="fecha-hora">
            <p>Santa Cruz</p>
            <p id="fecha"></p>
            <p id="hora"></p>
        </div>
    </header>

    <main>
        <h1 class="titulo-principal">Guías de Matemáticas</h1>
        <div class="pdf-container">
            <ul>
                <li>
                    <a href="pdfs/guia1.pdf" target="_blank" download>📥 Descargar Guía 1</a>
                    <br>
                    <embed src="pdfs/guia1.pdf" type="application/pdf" width="600" height="400">
                </li>
                <li>
                    <a href="pdfs/guia2.pdf" target="_blank" download>📥 Descargar Guía 2</a>
                    <br>
                    <embed src="pdfs/guia2.pdf" type="application/pdf" width="600" height="400">
                </li>
            </ul>
        </div>
    </main>
    <script defer src="script.js"></script>
</body>
</html>
