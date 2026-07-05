// ============================================
// Course List
// ============================================

const courses = [

{
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 3,
    completed: true
},

{
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 3,
    completed: true
},

{
    subject: "WDD",
    number: 231,
    title: "Front-End Web Development I",
    credits: 3,
    completed: false
},

{
    subject: "CSE",
    number: 110,
    title: "Programming Building Blocks",
    credits: 2,
    completed: true
},

{
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    completed: false
},

{
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    completed: false
}

];

const container = document.querySelector("#course-container");

const totalCredits = document.querySelector("#totalCredits");

const allButton = document.querySelector("#all");

const wddButton = document.querySelector("#wdd");

const cseButton = document.querySelector("#cse");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `

            <h3>${course.subject} ${course.number}</h3>

            <p>${course.title}</p>

            <p>${course.credits} Credits</p>

        `;

        container.appendChild(card);

    });

    updateCredits(courseList);

}

function updateCredits(courseList) {

    const total = courseList.reduce(

        (sum, course) => sum + course.credits,

        0

    );

    totalCredits.textContent = total;

}

allButton.addEventListener("click", () => {

    displayCourses(courses);

});

wddButton.addEventListener("click", () => {

    const filtered = courses.filter(course => course.subject === "WDD");

    displayCourses(filtered);

});

cseButton.addEventListener("click", () => {

    const filtered = courses.filter(course => course.subject === "CSE");

    displayCourses(filtered);

});

displayCourses(courses);
