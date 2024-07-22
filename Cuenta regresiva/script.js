class CounterDown {
    constructor(days, hours, minutes, seconds) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.weddingDate = null;
        this.timer = null;
    }

    countdown(date) {
        // Fecha específica (puedes modificar esta fecha según tus necesidades)
        this.weddingDate = new Date(date);

        // Se obtiene la fecha actual
        let now = new Date();

        // Calcular la diferencia en milisegundos entre la fecha específica y ahora
        let differenceInMilliseconds = this.weddingDate - now;

        if (differenceInMilliseconds < 0) {
            clearInterval(this.timer);
            console.log('¡FELICIDADES!');
            return;
        }

        // Convertir la diferencia de milisegundos a días, horas, minutos y segundos
        this.days = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
        let remainingMilis = differenceInMilliseconds % (24 * 60 * 60 * 1000);
        this.hours = Math.floor(remainingMilis / (60 * 60 * 1000));
        remainingMilis %= (60 * 60 * 1000);
        this.minutes = Math.floor(remainingMilis / (60 * 1000));
        remainingMilis %= (60 * 1000);
        this.seconds = Math.floor(remainingMilis / 1000);

        // Formatear horas, minutos y segundos para asegurar dos dígitos
        let days = this.days;
        let formattedHours = this.hours.toString().padStart(2, '0');
        let formattedMinutes = this.minutes.toString().padStart(2, '0');
        let formattedSeconds = this.seconds.toString().padStart(2, '0');

        // Devolver un objeto con las partes formateadas del tiempo
        return {
            days: days,
            formattedHours: formattedHours,
            formattedMinutes: formattedMinutes,
            formattedSeconds: formattedSeconds
        };
    }
}

let counterDown = new CounterDown();

// Función para actualizar el contador cada segundo
function updateCounter() {
    let formattedTime = counterDown.countdown('2024-11-16T14:00:00');
    
    // Actualizar los elementos en el HTML
    document.getElementById('days').innerText = formattedTime.days;
    document.getElementById('hours').innerText = formattedTime.formattedHours;
    document.getElementById('minutes').innerText = formattedTime.formattedMinutes;
    document.getElementById('seconds').innerText = formattedTime.formattedSeconds;
}

// Llamar a la función inicialmente para mostrar el tiempo restante de inmediato
updateCounter();

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);
