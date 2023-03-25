const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[action + 1];
//   console.log(action);
//   invokeAction({ action });
// }

// invokeAction({ action: "list" });
// invokeAction({ action: "getContactById", id: "1tOO9nL-S4uBqMPIxFzS_" });
// invokeAction({
//   action: "addContact",
//   name: "Vlad",
//   email: "vlad@mail.com",
//   phone: "313-21-45",
// });
// invokeAction({
//   action: "removeContact",
//   id: "1tOO9nL-S4uBqMPIxFzS_",
// });
