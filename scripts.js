document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");
    const cards = document.getElementById("cards");
    
    let students = JSON.parse(localStorage.getItem("students")) || [];
    
    function save() {
        localStorage.setItem("students", JSON.stringify(students));
    }

    function render() {
        cards.innerHTML = "";

        students.forEach((s, index) => {
            cards.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <img src="${s.pic}">
                    <div>
                        <b>${s.user_name}</b><br>
                        Age: ${s.age}<br>
                        ${s.edu}
                    </div>
                </div>
                <div class="card-footer">
                    Start: ${s.start}<br>
                    End: ${s.end}
                </div>
                <button class="remove-btn" onclick="removeStudent(${index})">Remove</button>
            </div>`;
        });
        updateStats();
    }
    
    function updateStats() {
        document.getElementById("count").innerText = students.length;
        document.getElementById("revenue").innerText = students.length * 400;
        document.getElementById("seats").innerText = 200 - students.length;
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const student = {
            user_name: user_name.value,
            age: age.value,
            edu: edu.value,
            pic: pic.value,
            start: start.value,
            end: end.value
        };
    
        students.push(student);
        save();
        render();
        form.reset();
    });
    
    
    function removeStudent(index){
        console.log(index);
        students.splice(index, 1);
        save();
        render();
    }

    window.removeStudent = removeStudent; 
    render();

    let progress = 0;

    const bar = document.getElementById("bar");
    const percent = document.getElementById("percent");
    const loader = document.getElementById("loader");
    const app = document.querySelector(".container");
    
    const interval = setInterval(() => {
        progress++;
        bar.style.width = progress + "%";
        percent.innerText = progress + "%";
    
        if(progress === 100) {
            clearInterval(interval);
    
            setTimeout(() => {
                loader.style.display = "none";
                app.style.display = "flex";
            }, 300);
        }
    }, 5000/100); 

    
    function basics_plan() {
        document.getElementById("count").innerText = students.length;
        document.getElementById("revenue").innerText = students.length * 400;
        document.getElementById("seats").innerText = 200 - students.length;
    }
    basics_plan();

});