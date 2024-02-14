let groupNumber = document.getElementById('groupNumber');
let studentAddBtn = document.getElementById('studentAddBtn');
let studentAddInput = document.getElementById('studentAddInput');
let namesList = document.getElementById('namesList');
let studentList = [];

console.log(studentList);

studentAddBtn.addEventListener('click', async() => {
    if (studentAddInput.value !== ''){
        studentList.push(studentAddInput.value);
        console.log(studentList);
        studentAddInput.value = '';
        StudentListUpdate();
    }
});

async function StudentListUpdate(){
    
    namesList.textContent = '';
    groupNumber.max = studentList.length;
    console.log(studentList.length);
    console.log(studentList.length === 0);

    if (studentList.length === 0){
        groupNumber.disabled = true;
        
    }else{
        groupNumber.disabled = false;
    }

    

    studentList.forEach(function(element) {
  
        console.log("element number: " + element);
        var lineBreak = document.createElement('hr');
        var removeButton = document.createElement('button');
        var studentNameDiv = document.createElement('div');

        studentNameDiv.textContent = element;
        studentNameDiv.style.color = 'blue';
        studentNameDiv.className = 'p-2';

        
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.className= 'btn btn-danger';
        
        
        document.getElementById('namesList').appendChild(studentNameDiv);
        document.getElementById('namesList').appendChild(removeButton);
        document.getElementById('namesList').appendChild(lineBreak);
        
     
    });
}