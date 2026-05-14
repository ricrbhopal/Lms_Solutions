document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const fn = document.getElementById("fullName").value;
  const gr = document.querySelector("input[name = 'gender]:checked")?.value;

  const timings = [];
  document
    .querySelectorAll("input[name = 'timing']:checked")
    .forEach((item) => {
      timings.push(item.value);
    });
  console.log(gr);

  console.log(timings);
});
