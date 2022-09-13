window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;

    function drawShape(radius) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0 - radiuus)
        ctx.restore();
        ctx.closePath();
        ctx.straoke();

    }
    drawShape(100);

});
