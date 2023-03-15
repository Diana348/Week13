const nameInput = document.querySelector("#name");
const avatarInput = document.querySelector("#avatar");
const textarea = document.querySelector("#comment");
const sendBtn = document.querySelector("#send");
const chbInput_yes = document.querySelector("#yes");
const chbInput_no = document.querySelector("#no");

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
    messages.append(messageUserName);

// text
    const messageText = document.createElement("p");
    messageText.className = "message_text";
    messageText.innerHTML = checkMessage(textarea.value);
    messages.append(messageText);
    nameInput.value = "";
    avatarInput.value = "";

//send avatar
    const messageAvatar = document.createElement("img");
    messageAvatar.className = "message_avatar";
    let avatarRandom = Math.round(Math.random() * 10 - 4);

    function addAvatar () {
        if (avatarInput.value !== '') {
            messageAvatar.src = avatarInput.value;
        } else {
            switch (avatarRandom) {
                    case 1:
                    messageAvatar.src = '../images/pic1.png';
                    break;

                    case 2:
                    messageAvatar.src = '../images/pic2.png';
                    break;

                    case 3:
                    messageAvatar.src = '../images/pic3.png';
                    break;

                    case 4:
                    messageAvatar.src = '../images/pic4.png';
                    break;

                    case 5:
                    messageAvatar.src = '../images/pic5.png';
                    break;

                    case 6:
                    messageAvatar.src = '../images/pic6.png';
                    break;

                default:
                    messageAvatar.src = '../images/pic6.png';
            }
        }
    }

//add date
    const messageDate = document.createElement('div');
    messageDate.classList.add('post-item-date');
    messages.append(messageDate);
    messageDate.textContent = now.toLocaleString();


// remove over 5 elements
    if (messages.childElementCount > 5) {
    messages.removeChild(messages.lastChild);
    }
};

sendBtn.addEventListener("click", () => {
    createMessage();
    addAvatar();
    textarea.value = "";
});




