

const form = document.querySelector(".feedback-form");

const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

let formData = {
  email: "",
  message: "",
};

// Відновлення збережених даних
const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  emailInput.value = formData.email;
  messageTextarea.value = formData.message;
}

// Збереження даних під час введення
form.addEventListener("input", event => {
  const { name, value } = event.target;

  if (name !== "email" && name !== "message") {
    return;
  }

  formData[name] = value.trim();

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(formData)
  );
});

// Обробка відправлення форми
form.addEventListener("submit", event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  form.reset();

  formData.email = "";
  formData.message = "";
});
