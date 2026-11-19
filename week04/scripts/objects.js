let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").textContent = `${course.code} – ${course.title}`;
}

function renderSections(sections) {
    const html = sections.map(s => `
        <tr>
            <td>${s.section}</td>
            <td>${s.enrolled}</td>
            <td>${s.instructor}</td>
        </tr>`);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
