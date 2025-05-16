import { users } from "./datas.js";

// 1.
console.group("1 ------------------------------------------");
const subs = users.map((user) => {
  return {
    ...user,
    profile: {
      ...user.profile,
      subscription:
        user.profile.subscription == "admin"
          ? "user"
          : user.profile.subscription == "user"
          ? "admin"
          : user.profile.subscription,
    },
  };
});

console.log(subs);
console.groupEnd();

// 2.
console.group("2 ------------------------------------------");
const usermap = users.map((u) => u.profile.name + " " + u.profile.email);
console.log(usermap);
console.groupEnd();

// 3.
console.group("3 ------------------------------------------");
const notificationSMSandEmail = users.filter(
  (u) => !u.settings.notifications.email && u.settings.notifications.sms
);
console.log(notificationSMSandEmail);
console.groupEnd();

// 4.
console.group("4 ------------------------------------------");
const subscription = [];

users.forEach((u) => {
  if (!subscription.includes(u.profile.subscription)) {
    subscription.push(u.profile.subscription);
  }
});

subscription.forEach((s) => console.log(s));
console.groupEnd();

// 5.
console.group("5 ------------------------------------------");
const cutName = users.map((u) =>
  u.profile.name.split(" ")[0].toLocaleLowerCase()
);
console.log(cutName);
console.groupEnd();

// 6.
console.group("6 ------------------------------------------");
const turnOnSMS = users.filter((u) => u.settings.notifications.sms);
console.log(turnOnSMS);
console.groupEnd();

// 7.
console.group("7 ------------------------------------------");
users.map((user) => console.log(user.profile.email));
console.groupEnd();

// 8.
console.group("8 ------------------------------------------");
console.log(users.find((user) => user.activity[0].action == "login"));
console.groupEnd();

// 9.
console.group("9 ------------------------------------------");
const newObj = users.map((user) => {
  return {
    name: user.profile.name,
    subscription: user.profile.subscription,
    lenguage: user.settings.language,
  };
});
console.log(newObj);
console.groupEnd();

// 10.
console.group("10 -----------------------------------------");
const newObjUser = users
  .filter((f) => f.role == "user")
  .map((user) => {
    return {
      name: user.profile.name,
      theme: user.settings.theme,
    };
  });
console.log(newObjUser);
console.groupEnd();

// 11.
console.group("11 -----------------------------------------");
console.log(users.some((e) => e.activity == "delete_user"));
console.groupEnd();

// 12.
console.group("12 -----------------------------------------");
console.log(
  users.filter(
    (u) =>
      u.profile.subscription == "free" ||
      u.profile.subscription == "basic" ||
      u.profile.subscription == "silver"
  )
);
console.groupEnd();

// 13. Tushunmadim sharti bilan javobi ikki xil ekan

// 14.
console.group("14 -----------------------------------------");
let arr14 = [1, 2, 3, 4, 5];

const return2 = arr14.map((i) => i ** 2);
console.log(return2);

console.groupEnd();

// 15.
console.group("15 -----------------------------------------");
let filMusbat = [1, -4, 12, 0, -3, 29, -150];
let sum = 0;

filMusbat
  .filter((i) => {
    return i > 0;
  })
  .map((i) => (sum += i));

console.log(sum);

console.groupEnd();

// 16.
console.group("16 -----------------------------------------");
let inp16 = "George Raymond Richard Martin";
const res16 = inp16
  .split(" ")
  .map((i) => i.charAt().toUpperCase())
  .join("");

console.log(res16);

console.groupEnd();

// 17.
console.group("17 -----------------------------------------");
let arr17 = [...users];

let res17 = arr17.sort((a, b) => b - a);
console.log("Eng yoshi:", res17[0].profile.age);
console.log("Yoshi kattasi:", res17[res17.length - 1].profile.age);

console.groupEnd();

// 18.
console.group("18 -----------------------------------------");

let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let juftlar = [];
let toqlar = [];

arr18
  .filter((i) => {
    return i % 2 == 0;
  })
  .map((i) => juftlar.push(i));

arr18
  .filter((i) => {
    return i % 2 == 1;
  })
  .map((i) => toqlar.push(i));

console.log(juftlar);
console.log(toqlar);
console.groupEnd();

// 19.
console.group("19 -----------------------------------------");

let arr19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 10, 1];

let newarr19 = arr19.filter((item, i) => {
  return arr19.indexOf(item) === i;
});

console.log(newarr19);
console.groupEnd();

// Ustoz 20 va 21 birga tushunmadim