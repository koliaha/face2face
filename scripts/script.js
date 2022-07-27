
//modal popup
let modal_id = "";
function openModal(id) {
  var modal = document.getElementById(id);
  modal.classList.add("modal-active");
  modal_id = id;
}
function closeModal() {
  let modalpopup = document.querySelector(`#${modal_id}`);
  modalpopup.classList.remove("modal-active");
}

window.onclick = function (event) {
  let modal = document.getElementById('myModalFinish');
  if (event.target == modal) {
    modal.classList.remove("modal-active");
  }
  let modal1 = document.getElementById('myModal');
  if (event.target == modal1) {
    modal1.classList.remove("modal-active");
  }
};
function addLoader() {
  let form = document.querySelector(".form-content");
  form.style.display = "none";
  let loader = document.querySelector(".form-loader");
  loader.style.display = "block";
}
function offLoader() {
  let form = document.querySelector(".form-content");
  form.style.display = "block";
  let loader = document.querySelector(".form-loader");
  loader.style.display = "none";
}




//smooth scroll
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});


//hover 3d

////validation form
$(document).ready(function () {
  $(".modal-form").on("blur keyup change", "input", function () {
    if ($(".modal-form").valid()) {
      $("#ahead_form_btn").prop("disabled", false);
    } else {
      $("#ahead_form_btn").prop("disabled", "disabled");
    }
  });

  $(".modal-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
        maxlength: 25,
      },
      email: {
        required: true,
        email: true,
      },
      company: {
        required: true,
        minlength: 2,
      },
      phone: {
        digits: true,
      },
    },
    messages: {
      name: {
        required: "Это поле обязательно для заполнения",
        minlength: "Имя должен быть минимум 4 символа",
        maxlength: "Максимальное число символов - 25",
      },
      email: {
        required: "Это поле обязательно для заполнения",
        email: "формат хххххх@хх.хх",
      },
      company: {
        required: "Это поле обязательно для заполнения",
        minlength: "Поле должен быть минимум 2 символа",
      },
      phone: {
        digits: "Только цифры!",
      },
    },
  });
  jQuery.validator.addMethod("accept", function (value, element, param) {
    return value.match(new RegExp("." + param + "$"));
  });
});
