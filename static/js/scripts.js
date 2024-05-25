document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});

function navigateTo(page) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    if (page === 'home') {
        content.innerHTML = `
            <div class="gallery">
                <img src="https://via.placeholder.com/200" alt="Image 1">
                <img src="https://via.placeholder.com/200" alt="Image 2">
                <img src="https://via.placeholder.com/200" alt="Image 3">
                <img src="https://via.placeholder.com/200" alt="Image 4">
                <img src="https://via.placeholder.com/200" alt="Image 5">
            </div>
        `;
    } else if (page === 'create') {
        content.innerHTML = `
            <h2>Создать новый пост</h2>
            <form>
                <label for="title">Заголовок:</label><br>
                <input type="text" id="title" name="title"><br><br>
                <label for="image">Ссылка на изображение:</label><br>
                <input type="text" id="image" name="image"><br><br>
                <button type="submit">Опубликовать</button>
            </form>
        `;
    } else if (page === 'profile') {
        content.innerHTML = `
            <h2>Профиль пользователя</h2>
            <p>Имя: Иван Иванов</p>
            <p>Email: ivan@example.com</p>
        `;
    }
}
