    document.addEventListener('DOMContentLoaded', function(){
        draw();
    })

    let ctx;
    let canvas = document.getElementById('canvas');
    let i = 0;
    let timer;
    let color = 'DarkBlue';
    let x = 0;
    let y = 150;

    document.onload = ()=> {
        draw()
    }
    let draw = () => {
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(75, 0);
            ctx.lineTo(0, 150);
            ctx.lineTo(150, 150);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();

        }
    }

    document.getElementById('color').addEventListener('change', (el) => {

        let resultColor = document.getElementById('resultColor');
        switch (el.target.value) {
            case '1':
                color = 'Gold';
                break;
            case '2':
                color = 'DarkOrange'
                break;
            case '3':
                color = 'OrangeRed'
                break;
            case '4':
                color = 'FireBrick'
                break;
            case '5':
                color = 'DarkRed';
                break;
            case '6':
                color = 'Indigo';
                break;
            case '7':
                color = 'DarkBlue'
                break;
            case '8':
                color = 'Blue'
                break;
            case '9':
                color = 'DodgerBlue'
                break;
            case '10':
                color = 'DarkCyan';
                break;
            case '11':
                color = 'LightSeaGreen';
                break;
            case '12':
                color = 'DarkSeaGreen'
                break;
            case '13':
                color = 'OliveDrab'
                break;
            case '14':
                color = 'ForestGreen'
                break;
            case '15':
                color = 'YellowGreen';
                break;
        }

        ctx.fillStyle = color;
        ctx.fill();
        console.log('color', color)
        resultColor.textContent = color;
    })

    document.getElementById('rotate_css').addEventListener('change', (el) => {
        clearTimeout(timer)
        if (el.target.checked) {
            rotate('left')
        } else {
            rotate('right')
        }
    })

    let  rotate = (action) => {
        canvas.setAttribute("style","transform :rotateY("+i+"deg)");
        if(action =='left') {
            i++;
        } else {
            i--;
        }
        if (i == 360)  {i = 0; }
        if (i == -360) {i = 0; }
        timer = setTimeout(()=>{
            rotate(action)
        },10);
    }

    let stop = () => {
        clearTimeout(timer)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
    }
