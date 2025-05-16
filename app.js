// const users = [
//   {
//     id: "001",
//     role: "user",
//     profile: {
//       name: "Ahror X.",
//       email: "ahrorx@site.com",
//       age: 26,
//       subscription: "premium",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: false,
//       deleteAccess: false,
//     },
//     activity: [
//       { action: "login", time: "2025-05-12T09:00:00Z" },
//       { action: "view_course", detail: "React Basics" },
//     ],
//     settings: {
//       theme: "dark",
//       language: "uz",
//       notifications: { email: true, sms: false },
//     },
//   },
//   {
//     id: "002",
//     role: "admin",
//     profile: {
//       name: "Ziyoda R.",
//       email: "ziyoda.admin@site.com",
//       age: 32,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [
//       { action: "login", time: "2025-05-12T07:00:00Z" },
//       { action: "delete_user", detail: "User ID 009" },
//     ],
//     settings: {
//       theme: "light",
//       language: "en",
//       notifications: { email: true, sms: true },
//     },
//   },
//   {
//     id: "003",
//     role: "user",
//     profile: {
//       name: "Madina N.",
//       email: "madina.n@site.com",
//       age: 24,
//       subscription: "free",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: false,
//       deleteAccess: false,
//     },
//     activity: [
//       { action: "signup", time: "2025-04-01T12:00:00Z" },
//       { action: "comment", detail: "Loved the course!" },
//     ],
//     settings: {
//       theme: "dracula",
//       language: "ru",
//       notifications: { email: false, sms: false },
//     },
//   },
//   {
//     id: "004",
//     role: "admin",
//     profile: {
//       name: "Dilshod K.",
//       email: "dilshod.k@site.com",
//       age: 35,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [
//       { action: "ban_user", detail: "User ID 005" },
//       { action: "update_settings", time: "2025-05-10T11:11:11Z" },
//     ],
//     settings: {
//       theme: "light",
//       language: "uz",
//       notifications: { email: true, sms: true },
//     },
//   },
//   {
//     id: "005",
//     role: "user",
//     profile: {
//       name: "Ulug'bek T.",
//       email: "ulugbek.t@site.com",
//       age: 29,
//       subscription: "gold",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: false,
//     },
//     activity: [
//       { action: "like_post", detail: "Post ID 112" },
//       { action: "update_profile", time: "2025-05-11T10:00:00Z" },
//     ],
//     settings: {
//       theme: "dark",
//       language: "en",
//       notifications: { email: true, sms: false },
//     },
//   },
//   {
//     id: "006",
//     role: "admin",
//     profile: {
//       name: "Aziz R.",
//       email: "aziz.r@site.com",
//       age: 38,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [
//       { action: "login", time: "2025-05-10T08:22:00Z" },
//       { action: "edit_post", detail: "Post ID 456" },
//     ],
//     settings: {
//       theme: "dark",
//       language: "ru",
//       notifications: { email: true, sms: true },
//     },
//   },
//   {
//     id: "007",
//     role: "user",
//     profile: {
//       name: "Sevinch Y.",
//       email: "sevinch.y@site.com",
//       age: 27,
//       subscription: "silver",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: false,
//       deleteAccess: false,
//     },
//     activity: [{ action: "feedback", detail: "Great interface!" }],
//     settings: {
//       theme: "light",
//       language: "uz",
//       notifications: { email: false, sms: false },
//     },
//   },
//   {
//     id: "008",
//     role: "admin",
//     profile: {
//       name: "Javlon B.",
//       email: "javlon.b@site.com",
//       age: 40,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [{ action: "created_post", detail: "News Update" }],
//     settings: {
//       theme: "light",
//       language: "en",
//       notifications: { email: true, sms: true },
//     },
//   },
//   {
//     id: "009",

//     role: "user",
//     profile: {
//       name: "Kamola S.",
//       email: "kamola.s@site.com",
//       age: 23,
//       subscription: "basic",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: false,
//       deleteAccess: false,
//     },
//     activity: [{ action: "joined_group", detail: "Frontend Club" }],
//     settings: {
//       theme: "dark",
//       language: "en",
//       notifications: { email: true, sms: false },
//     },
//   },
//   {
//     id: "010",
//     role: "admin",
//     profile: {
//       name: "Shaxzod M.",
//       email: "shaxzod.m@site.com",
//       age: 33,
//       subscription: "admin",
//     },
//     permissions: {
//       readAccess: true,
//       writeAccess: true,
//       deleteAccess: true,
//     },
//     activity: [{ action: "reset_password", detail: "User ID 003" }],
//     settings: {
//       theme: "dracula",
//       language: "uz",
//       notifications: { email: true, sms: true },
//     },
//   },
// ];

// // const subs = users.map((user) => {
// //   return {
// //     ...user,
// //     profile: {
// //       ...user.profile,
// //       subscription:
// //         user.profile.subscription == "admin"
// //           ? "user"
// //           : user.profile.subscription == "user"
// //           ? "admin"
// //           : user.profile.subscription,
// //     },
// //   };
// // });

// // console.log("org", users);

// // console.log(subs);

// // const filuser = users.filter((user) => user.settings.language == "uz");

// // console.log(filuser);

// // let counter = 0;
// // const birnima = users.forEach((user) => (counter += user.profile.age));

// // console.log(counter / users.length);

// // 1.
// const darkMode = users.some((user) => user.settings.theme == "darkMode");
// console.log(darkMode);

// // 2.
// const usermap = users.map((u) => u.profile.name + " " + u.profile.email);
// console.log(usermap);

// // 3.
// console.log(
//   users.filter(
//     (u) => !u.settings.notifications.email && u.settings.notifications.sms
//   )
// );

// // 5.

// // console.log(
// //   users.forEach((u) => {
// //     return users.filter(
// //       (f) => u.profile.subscription != f.profile.subscription
// //     );
// //   })
// // );

// // 11.

// console.log(
//   users.map((u) => {
//     return 
//   })
// );
