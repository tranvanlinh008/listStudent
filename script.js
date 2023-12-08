const formEle = document.getElementById('student-form');
let classes;

function init() {
  // Khởi tạo
  classes = [];
  formEle.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(formEle);
    const student = Object.fromEntries(formData.entries());
    // addStudent(student);
    console.log( "hocsini:",classes);
  });
}

init();