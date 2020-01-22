    document.addEventListener('DOMContentLoaded', function(){
        draw();
        //rotate('right')
    })

    let ctx;
    let canvas = document.getElementById('canvas');
    let i = 0;
    let timer;
    let color;
    let x = 0;
    let y = 150;

    document.onload = ()=> {
        draw()
    }

    // Рисуем треугольник
    let draw = () => {
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(75, 0);
            ctx.lineTo(0, 150);
            ctx.lineTo(150, 150);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();


        }
    }

    // Меняем цвет от ползунка, хотя тут наверно нужно было от ползунка вращать мне кажется

    document.getElementById('color').addEventListener('change', (el) => {

        let resultColor = document.getElementById('resultColor');
        switch (el.target.value) {
            case '1':
                color = 'blue';
                break;

            case '2':
                color = 'red'
                break;

            case '3':
                color = 'green'
                break;
            case '4':
                color = 'yellow'
                break;
            case '5':
                color = 'black';
                break;
            default:
                color = 'black';
                break
        }

        ctx.fillStyle = color;
        ctx.fill();
        console.log('color', color)
        resultColor.textContent = color;
    })


    // слушатель на переключатель лева права
    document.getElementById('rotate_css').addEventListener('change', (el) => {
        clearTimeout(timer)
        if (el.target.checked) {
            rotate('left')
        } else {
            rotate('right')
        }
    })






    document.getElementById('rotate_css').addEventListener('change', (el) => {
        stop();
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




    // Функция остановки
    let stop = () => {
        // Очищаем таймер
        clearTimeout(timer)
        //Чистим канвас
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Рисуем
        draw();
    }