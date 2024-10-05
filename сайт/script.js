
        // Получаем модальное окно
        var modal = document.getElementById("myModal");

        // Получаем кнопку, которая открывает модальное окно
        var btn = document.getElementById("show-login");

        // Получаем элемент <span>, который закрывает модальное окно
        var span = document.getElementsByClassName("close-btn")[0];

        // Когда пользователь кликает на кнопку, открываем модальное окно
        btn.onclick = function(event) {
        event.preventDefault();
        modal.classList.add("active");
        }

        // Когда пользователь кликает на <span> (x), закрываем модальное окно
        span.onclick = function() {
        modal.classList.remove("active");
        }

        // Когда пользователь кликает в любое место за пределами модального окна, закрываем его
        window.onclick = function(event) {
        if (event.target == modal) {
        modal.classList.remove("active");
        }
        }