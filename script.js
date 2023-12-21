function getNum(val) {
  const num = prompt("Введіть число", val);
  if (num === null) {
    alert("OK. Bye)");
    return;
  }
  if (num.trim() === "") {
    alert("Строка не має бути пустою");
    return getNum(num);
  }
  if (
    isNaN(num) ||
    !isFinite(num) ||
    num.trim()[0] === "." ||
    num.trim()[num.length - 1] === "."
  ) {
    alert("Введить коректне число");
    return getNum(num);
  }
  return +num;
}

function getDegree(val) {
  const num = prompt("Введіть ступінь", val);
  if (num === null) {
    alert("OK. Bye)");
    return;
  }
  if (num.trim() === "") {
    alert("Строка не має бути пустою");
    return getDegree(num);
  }
  if (
    isNaN(num) ||
    !isFinite(num) ||
    num.trim()[0] === "." ||
    num.trim()[num.length - 1] === "." ||
    !Number.isInteger(+num)
  ) {
    alert("Введить коректне число");
    return getDegree(num);
  }
  return +num;
}

function pow(num, degree) {
  if (num === 0 && degree === 0) {
    return "Маємо невизнченність";
  }
  if (num === 0 && degree < 0) {
    return "Infinity"
  }
  if (num === 0) {
    return 0;
  }
  if (degree === 0) {
    return 1;
  }
  if (degree > 0) {
    return num * pow(num, degree - 1);
  } else {
    return 1 / (num * pow(num, -degree - 1));
  }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", (_) => {
  const num = getNum();
  if (num === undefined) {
    return;
  }
  const degree = getDegree();
  if (degree === undefined) {
    return;
  }
  const res = pow(num, degree);
  alert(res);
});
