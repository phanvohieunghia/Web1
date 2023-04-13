const resultElement = document.getElementById("result");
let number = 240;

function render(number) {
  const x = `
  <div class="col-lg-2 col-md-3 col-sm-4 col-6">
  <img src="https://loremflickr.com/320/${number}" alt="image" />
  </div>
  `;
  return x;
}

function add() {
  number++;
  const x = render(number);
  const container = x + resultElement.innerHTML;
  resultElement.innerHTML = container;
}
