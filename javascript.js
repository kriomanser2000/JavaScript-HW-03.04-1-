//Створить масив «список покупок». Кожен елемент масиву є
//об'єктом, який містить назву продукту, необхідну кількість і чи
//був він куплений.
//Напишіть декілька функцій для роботи із таким масивом.
//1. Виведення всього списку на екран таким чином, щоб спо-
//чатку йшли некуплені продукти, а потім куплені.
//2. Додавання покупки до списку. Враховуйте, що при дода-
//ванні покупки з вже існуючим продуктом у списку, необ-
//хідно збільшувати кількість в існуючій покупці, а не до-
//давати нову.
//3. Купівля продукту. Функція приймає назву продукту і
//помічає його як придбаний.
//--
//let product_list = [];
//function showList() 
//{
//    console.log("Product List:");
//    product_list.forEach(purchase => 
//    {
//        alert(`${purchase.name} - ${purchase.amount} pcs. (${purchase.buyed ? 'buyed' : 'Not buyed'})`);
//    });
//}
//function addPurchase(name, amount) 
//{
//    let finded = false;
//    product_list.forEach(purchase => 
//    {
//        if (purchase.name === name) 
//        {
//            purchase.amount += amount;
//            finded = true;
//        }
//    });
//    if (!finded) 
//    {
//        product_list.push({ name: name, amount: amount, purchase: false });
//    }
//}
//function buyProduct(name) 
//{
//    product_list.forEach(purchase => 
//        {
//        if (purchase.name === name) 
//        {
//            purchase.buyed = true;
//        }
//    });
//}
//addPurchase("Milk", 1);
//addPurchase("Bread", 2);
//addPurchase("Apples", 5);
//showList();
//buyProduct("Milk");
//showList();


//Створить масив, який описує чек у магазині. Кожен елемент
//масиву складається із назви товару, кількості та ціни за одиницю
//товару.
//Напишіть наступні функції.
//1. Виведення чека на екран.
//2. Підрахунок загальної суми покупки.
//3. Отримання найдорожчої покупки у чеку.
//4. Підрахунок середньої вартості одного товару у чеку.
//--
//let check = 
//[
//    { name: "Milk", amount: 2, unit_price: 20 },
//    { name: "Bread", amount: 1, unit_price: 10 },
//    { name: "Aplles", amount: 3, unit_price: 5 }
//];
//function showCheck() 
//{
//    alert("Check: ");
//    check.forEach(purchase => 
//    {
//        alert(`${purchase.name} - ${purchase.amount} pcs. on ${purchase.unit_price} uah`);
//    });
//}
//function totalSum() 
//{
//    let total_sum = 0;
//    check.forEach(purchase => 
//    {
//        total_sum += purchase.amount * purchase.unit_price;
//    });
//    return total_sum;
//}
//function expensivePurchase() 
//{
//    let expensive = check[0];
//    check.forEach(purchase => 
//    {
//        if (purchase.unit_price > expensive.unit_price) 
//        {
//            expensive = purchase;
//        }
//    });
//    return expensive;
//}
//function averageCost() 
//{
//    let number_of_products = 0;
//    let total_sum = 0;
//    check.forEach(purchase => 
//    {
//        number_of_products += purchase.amount;
//        total_sum += purchase.amount * purchase.unit_price;
//    });
//    return total_sum / number_of_products;
//}
//showCheck();
//alert("Total Sum: " + totalSum() + " uah");
//alert("Expensive Purchase: " + expensivePurchase().name);
//alert("Average Cost one item in the check: " + averageCost() + " uah");


//Створіть масив CSS-стилів (колір, розмір шрифту, вирівню-
//вання, підкреслення тощо). Кожен елемент масиву – це об’єкт, що
//складається із двох властивостей: назва та значення стилю.
//Напишіть функцію, яка приймає масив стилів та текст, і ви-
//водить цей текст за допомогою document.write() у тегах <p></p>,
//додавши у відкритий тег атрибут style з усіма стилями, переліче-
//ними у масиві.
//--
//let styles = 
//[
//    { name: "color", value: "white" },
//    { name: "font-size", value: "20px" },
//    { name: "text-align", value: "center" },
//    { name: "font-weight", value: "bold" },
//    { name: "text-decoration", value: "underline" }
//];
//function showText(styles, text) 
//{
//    let text_style = "";
//    styles.forEach(style => 
//    {
//        text_style += `${style.name}: ${style.value}; `;
//    });
//    document.write(`<p style="${text_style}">${text}</p>`);
//}
//showText(styles, "This text have styles.");


//Створіть масив аудиторій академії. Об’єкт-аудиторія склада-
//ється із назви, кількості місць (від 10 до 20) та назви факультету,
//для якого вона призначена.
//Напишіть декілька функцій для роботи з ним.
//1. Виведення на екран усіх аудиторій.
//2. Виведення на екран аудиторій для зазначеного факульте-
//ту.
//3. Виведення на екран тільки тих аудиторій, які підходять
//для переданої групи. Об’єкт-група складається з назви,
//кількості студентів і назви факультету.
//4. Функція сортування аудиторій за кількістю місць.
//5. Функція сортування аудиторій за назвою (за алфавітом).
//--
let audiences = 
[
    { name: "101", place: 15, faculty: "Informatics" },
    { name: "102", place: 20, faculty: "Foreign languages" },
    { name: "103", place: 12, faculty: "Math" },
    { name: "104", place: 18, faculty: "Informatics" }
];
function showAllAudiences() 
{
    alert("All audiences:");
    audiences.forEach(audience => 
    {
        alert(`Audience ${audience.name}, places: ${audience.place}, faculty: ${audiences.faculty}`);
    });
}
function showAudiencesFaculty(faculty) 
{
    alert(`Audience for faculty "${faculty}":`);
    audiences.forEach(audience => 
    {
        if (audience.faculty === faculty) 
        {
            alert(`Audience ${audience.name}, places: ${audience.place}`);
        }
    });
}
function showAudiencesGroups(group) 
{
    alert(`Fudience for group "${group.name}":`);
    audiences.forEach(audience => 
    {
        if (audience.place >= group.students_amount && audience.faculty === group.faculty) 
        {
            alert(`Audience ${audience.name}, places: ${audience.place}`);
        }
    });
}
function sortAudienceInPlaceAmount() 
{
    audiences.sort((а, б) => а.place - б.place);
}
function sortAudienceInName() 
{
    audiences.sort((а, б) => а.name.localeCompare(б.name));
}
showAllAudiences();
showAudiencesFaculty("Informatics");
showAudiencesGroups({ name: "Group1", students_amount: 15, faculty: "Informatics" });
sortAudienceInPlaceAmount();
showAllAudiences();
sortAudienceInName();
showAllAudiences();
