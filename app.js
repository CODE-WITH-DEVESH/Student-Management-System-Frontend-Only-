let from = document.getElementById('studentForm')
let stuName = document.getElementById('stuname')
let stuCourse = document.getElementById('stuCourse')
let stuCity = document.getElementById('stucity')
let totalCount = document.getElementById('totalCount')
let studentList = document.getElementById('studentList')
let stuFees=document.getElementById('stuFees')
let totalFeestext =document.getElementById('totalFees')
let webBtn =document.getElementById('webBtn')
let dataBtn =document.getElementById('dataBtn')




let students = [];

from.addEventListener('submit', (e) => {
    e.preventDefault();

    if (
        stuName.value === "" ||
        stuCourse.value === "" ||
        stuCity.value === ""
    ) {
        alert("Please Fill all fields")
        return;

    }
    let student = {
        id: Date.now(),
        name: stuName.value,
        course: stuCourse.value,
        city: stuCity.value,
        fees: Number(stuFees.value)

    }
    students.push(student)

    renderStudents();

    stuName.value = "";
    stuCourse.value = "";
    stuCity.value = "";
    stuFees.value="";



})
function renderStudents() {
    studentList.innerHTML =""

    students.forEach(function (stu) {
        let card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <p><b>Name:</b> ${stu.name}</p>
            <p><b>Course:</b> ${stu.course}</p>
            <p><b>City:</b> ${stu.city}</p>
            <p><b>Fees:</b> ${stu.fees}</p>
            <button onclick="deleteStudent(${stu.id})">Delete</button>
       `;

        studentList.appendChild(card);


    })
    totalCount.innerText = "Total Students " + students.length

      let totalFees=students.reduce((sum,stu)=>{
        return sum +stu.fees
    },0)
    totalFeestext.innerText="Total Fees: ₹"+ totalFees;

    
    
    
}

    function deleteStudent(id) {
        students = students.filter(stu => stu.id !== id)
        renderStudents()
    }

webBtn.addEventListener('click',()=>{
    let webStudents =students.filter(stu=>stu.course==="Web")
    showFiltered(webStudents)

})
dataBtn.addEventListener('click',()=>{
    let dataStudents = students.filter(stu=>stu.course==="Data")
    showFiltered(dataStudents)

})
function showFiltered(list){
    studentList.innerHTML="";
    list.forEach(stu=>{
        let card =document.createElement('div')
        
        card.innerHTML= `
        <p>${stu.name} - ${stu.course}</p>
        
        `
        studentList.appendChild(card)

    })
}
function filterBycity(cityName){
    let cityStudents =students.filter(stu=>stu.city===cityName)
    showFiltered(cityStudents)
}