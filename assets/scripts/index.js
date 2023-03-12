const nameInput = document.querySelector("#name");
const avatarInput = document.querySelector("#avatar");
const textarea = document.querySelector("#comment");
const sendBtn = document.querySelector("#send");
const chbInput_yes = document.querySelector("#yes");
const chbInput_no = document.querySelector("#no");

console.log(chb_no);
// field chat
const messages = document.querySelector(".messages");

const checkName = () => {
    const name = nameInput.value;
    const userName = name.trim().split(" ");
    const changedName = [];

    userName.forEach((element) => {
    let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
    changedName.push(newName);
    });

    const nameFormatted = changedName.join(" ");
    return nameFormatted;
};

nameInput.addEventListener("change", () => {
    nameInput.value = checkName();
});

// check textarea

const checkMessage = (spam) => {
    const str = spam.replace(/viagra|виагра|ххх|xxx/gi, "***");
    return str;
};

// send message

const createMessage = () => {
    const message = document.createElement("div");
    message.className = "message";
    messages.prepend(message);

// username
    const messageUserName = document.createElement("p");
    messageUserName.className = "message_name";
    if ((nameInput.value !== "")) {
    messageUserName.textContent = checkName();
    } else {
    messageUserName.textContent = "Username";
    }
    message.append(messageUserName);

// text
    const messageText = document.createElement("p");
    messageText.className = "message_text";
    messageText.innerHTML = checkMessage(textarea.value);
    message.append(messageText);
    nameInput.value = "";
    avatarInput.value = "";

// remove over 5 elements
    if (messages.childElementCount > 5) {
    messages.removeChild(messages.lastChild);
    }
};

sendBtn.addEventListener("click", () => {
    createMessage();
    const img = 
    textarea.value = "";
});




