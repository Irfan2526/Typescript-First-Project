var courses = [];
function AddItem() {
    var item = document.querySelector("#course");
    if (courses.filter(function (e) { return e == item.value; }).length > 0) {
        alert("item already exist !");
    }
    else {
        courses.push(item.value);
        BindItems(courses);
    }
}
function BindItems(items) {
    var list = "<ul>";
    items.forEach(function (e, i) {
        list += "<li>" + e + " <span class=\"close\" onclick=\"removeItem(" + i + ")\">&times;</span></li>";
    });
    list += "</ul>";
    document.querySelector("#result").innerHTML = list;
}
function removeItem(i) {
    courses.splice(i, 1);
    BindItems(courses);
}
function FilterData(txt) {
    var filtercourses = courses.filter(function (item) {
        if (item.startsWith(txt))
            return item;
    });
    if (filtercourses.length > 0) {
        BindItems(filtercourses);
    }
    else {
        BindItems(courses);
    }
}
document.querySelector("#course").addEventListener("keyup", function () {
    FilterData(this.value);
});
var btn = document.querySelector("#btn");
btn.addEventListener("click", AddItem);
