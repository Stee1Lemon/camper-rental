# Тестове завдання

1. Відповідно до макету реалізувати картку оголошення про здачу кампера в
   оренду.

Всі елементи які були зазначені в макеті виконані максимально приближено до
нього.

2. На першій сторінці каталогу має рендеритися 4 оголошення, а їх решта - по
   кліку на кнопку Load more.

Відпрацьовує як в завданні.

3. У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має
   додаватися до списку улюблених, а колір кнопки змінюватися.

Відпрацьовує як в завданні.

4. При оновленні сторінки має фіксуватись кінцевий результат дій користувача.
   Тобто, якщо додати оголошення в улюблені та оновити сторінку - то кнопка все
   одно залишається в стані “улюбленого оголошення” із відповідним кольором.

Нажаль не вийшло виконати це завдання. redux-persiste не зміг нормально
підключити. Коли підключав завжди з"являлась помилка "setItem / getItem is not a
function" зв"язана з локал стореджом. Як я зрозумів проблема може бути в білді.
Нажаль вирішив створити проєкт з нуля не використовуючи готовий темплейт.
Можливо саме тому і дещо відпрацьовує не так як я очікував і знайти швидко
причину не дозволяє брак досвіду. Залишив підключення персісту закоментованим.

5. У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути
   видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.

Відпрацьовує як в завданні.

6. У разі кліку по кнопці Show more має відкриватись модальне вікно з детальною
   інформацією про кампер.

Відпрацьовує як в завданні.

7. Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”,
   по кліку на backdrop та натисканню на клавішу Esc.

Відпрацьовує як в завданні.

8. В модальному вікні міститься інформація щодо особливостей кампера і відгуків
   про нього. Відмалювання інформації має залежати від стану активної таби.

Відпрацьовує як в завданні.

9. В модальному вікні також міститься форма для оформлення бронювання камперу,
   що складається з полів name, email, booking date і comment. Поля name, email,
   booking date є обовʼязковими до заповнення і мають проходити перевірку на
   валідність введених значень.(У випадку невалідних даних форма не
   відправляється, у випадку валідної форми - сторінка оновлюється).

Виконано не повністю до дз. При невалідних данних нічого не відправляється. При
валідних форма очищується і зявляється повідомлення з нотифікацією що все добре.

10. Ціна оренди має бути прописана одним значенням (наприклад, 8000). В UI -
    виведено через кому (8000,00).

Зробив через toFixed(2), але виходить через крапку, а не кому. Спочатку
захардкодив у верстці. Зпропонуйте альтернативи.

11. Створи маршрутизацію, використовуючи React Router.

Маршрутизацію створив. Локально все відпрацьовує нормально, але якщо
перезавантажувати на "/catalog" або "/favorites" то зявляється помилка 404
сторінки не знайдена. Переходиш на "/", перезавантажуєш і все нормально. Так і
не зрозумів з чим це пов"язано.

12. На сторінці Favorits відображаються каравани з міткою favorite.
