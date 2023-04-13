function validator(options) {
  const formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      const inputElement = formElement.querySelector(rule.selector);
      const errorElement =
        inputElement.parentElement.querySelector(".form-message");
      if (inputElement) {
        inputElement.onblur = function () {
          const errorMessage = rule.test(inputElement.value);
          if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
          }
        };
        inputElement.onfocus = function () {
          inputElement.parentElement.classList.remove("invalid");
          errorElement.innerText = "";
        };
      }
    });
  }
}

validator.isRequired = function (selector) {
  return {
    selector,
    test: function (value) {
      return value.trim() ? "" : "Vui lòng không để trống";
    },
  };
};

validator.isEmail = function (selector) {
  return {
    selector,
    test: function (value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      return regex.test(value) ? "" : "Vui lòng nhập đúng email";
    },
  };
};
