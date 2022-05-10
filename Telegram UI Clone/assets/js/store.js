let dataArr = [{
        id: 1,
        name: "Tridib ROck",
        phone: "+99 678542224",
        avatar: "8.jpg",
        username: "Heaven_8",
        bio: "",
        messages: [{
                body: "I am Indian",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Good Boy",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 2,
        name: "Abdulboriy",
        phone: "+998 99 8612931",
        avatar: "8.jpg",
        username: "Straight_path0599",
        bio: "",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 3,
        name: "Suor aka",
        phone: "+998 93 6667626",
        avatar: "3.jpg",
        username: "MrBobyr",
        bio: "Мммм дааа зачем",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 4,
        name: "Abdulloh English",
        phone: "+998 97 7413933",
        avatar: "5.jpg",
        username: "Ismoilov_Abdulloh",
        bio: "Beshikdan to qabrgacha ilm izla",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 5,
        name: "Alisher",
        phone: "+998 94 6611082",
        avatar: "7.jpg",
        username: "LazyPerfectionist",
        bio: "Receive the message to realise the messenger",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 6,
        name: "Fotima",
        phone: "+998 93 1600663",
        avatar: "6.jpg",
        username: "",
        bio: "",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 7,
        name: "Muhammad",
        phone: "+998 90 1270111",
        avatar: "8.jpg",
        username: "givmeaproofthatiexist",
        bio: "Give me proof that i exist",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 8,
        name: "Abdulazizkhan",
        phone: "+998 99 8835336",
        avatar: "9.jpg",
        username: "Richkhan",
        bio: "ما أصابك لم يكن ليخطئُك وما يخطئُك لم يكن ليُصيبك",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            },
            {
                body: "Qalesan",
                date: "12:16 AM",
                isMine: false
            }
        ]
    },
    {
        id: 9,
        name: "Sarvar",
        phone: "Hidden",
        avatar: "10.jpg",
        username: "Richkhan",
        bio: "",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    },
    {
        id: 10,
        name: "Bahtiyor",
        phone: "+998 99 8970047",
        avatar: "11.jpg",
        username: "",
        bio: "",
        messages: [{
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true
            }
        ]
    }
]

const dialogList = document.querySelector(".dialog__list")
const chatList = document.querySelector('.chat__list')
const searchForm = document.querySelector('.dialog__search-form')
const searchInput = document.querySelector('.dialog__search-bar')
const chatForm = document.querySelector('.chat__form')
const formInput = document.querySelector('.chat__message-area')
let currentChatId = 0
let inputValue = ""


// LocalStorage 

let data = localStorage.getItem('users')


if (!data) {
    localStorage.setItem("users", JSON.stringify(dataArr))
    window.location.reload();
}
    let usersData = JSON.parse(data)



chatForm.addEventListener('submit', e=>{
    e.preventDefault()
    submitMessage()
    e.target.reset();
})

formInput.addEventListener('keydown', e=>{
    
    if(e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault()
        submitMessage()
        formInput.value = ""
    }
})


function submitMessage(){
    if (!formInput.value) return
    let time =  moment().format('LT');
    let selectedID = usersData.find(user => user.id == currentChatId)
    let selectedIndex = usersData.findIndex(user => user.id == currentChatId)
    selectedID.messages.push(
        {
            body: formInput.value,
            date: time,
            isMine: true 
        }
    )
   
    usersData[selectedIndex] = selectedID
    localStorage.setItem("users", JSON.stringify(usersData)) 
    dialogList.textContent = ""
    renderUser(usersData)
    chatList.textContent = ""
  for (let message of selectedID.messages) {
      
    newChatListItem(chatList, message.body, message.date, message.isMine)   
  }  
}

renderUser(usersData) 


function renderUser(data) {
    for (let item of data) {
        let lastMessage = item.messages[item.messages.length - 1]
        newDealogElement(item.avatar, item.name, lastMessage.isMine, truncate(lastMessage.body, 20), lastMessage.date, item)
    }
}


function newDealogElement(image, username, isMine, lastMessage, time, item) {

    const dialogItem = document.createElement("li")
    dialogItem.setAttribute("class", "dialog__item")
    selectUserList(dialogItem, item)

    const dialogAvatar = document.createElement("img")
    dialogAvatar.setAttribute("src", "./assets/images/placeholder/" + image)
    dialogAvatar.setAttribute("alt", "dialog avatar")
    dialogAvatar.setAttribute("class", "dialog__avatar")
    const detailBox = document.createElement("div")
    detailBox.setAttribute("class", "dialog__detail")
    const userName = document.createElement("h2")
    userName.setAttribute("class", "dialog__user-name")
    userName.textContent = username
    const dialogMessage = document.createElement("p")
    dialogMessage.setAttribute("class", "dialog__message")
    dialogMessage.textContent = lastMessage
    const sender = document.createElement("span")
    sender.setAttribute("class", "sender")
    sender.textContent = "You:"
    const dialogRight = document.createElement("div")
    dialogRight.setAttribute("class", "dialog__right")
    const faCheck = document.createElement("span")
    faCheck.setAttribute("class", "fas fa-check")
    const dialogTime = document.createElement("p")
    dialogTime.setAttribute("class", "dialog__time")
    dialogTime.textContent = time

    if (isMine) {
        dialogRight.appendChild(faCheck)
        dialogMessage.prepend(sender)
    }
    dialogItem.appendChild(dialogAvatar)
    detailBox.appendChild(userName)
    detailBox.appendChild(dialogMessage)
    dialogItem.appendChild(detailBox)
    dialogRight.appendChild(dialogTime)
    dialogItem.appendChild(dialogRight)
    dialogList.appendChild(dialogItem)

}


function newChatListItem(parent, message, time, isMine) {
    const chatItem = document.createElement('li')
    chatItem.setAttribute('class', 'chat__content')
    const triangleRight = document.createElement('span')
    triangleRight.setAttribute('class', 'triangle-right hidden')
    const triangleLeft = document.createElement('span')
    triangleLeft.setAttribute('class', 'triangle-left')
    const chatText = document.createElement('p')
    chatText.setAttribute('class', 'chat__text')
    chatText.textContent = message
    const boxRight = document.createElement('div')
    boxRight.setAttribute('class', 'chat__content-right')
    const mesgtime = document.createElement('time')
    mesgtime.setAttribute('class', 'time')
    mesgtime.textContent = time
    const fasCheck = document.createElement('span')
    fasCheck.setAttribute('class', 'fas fa-check hidden')

    if (isMine) {
        chatItem.classList.add("me")
        triangleLeft.classList.add("hidden")
        fasCheck.classList.remove('hidden')
        triangleRight.classList.remove('hidden')
    }
    // chatItem.appendChild(divBox)
    chatItem.appendChild(triangleRight)
    chatItem.appendChild(triangleLeft)
    chatItem.appendChild(chatText)
    chatItem.appendChild(boxRight)
    boxRight.appendChild(mesgtime)
    boxRight.appendChild(fasCheck)
    parent.appendChild(chatItem)
}


function selectUserList(listItem, item) {

    listItem.addEventListener('click', () => {
        recorder.classList.remove('hidden')
        send.classList.add('hidden')
        textarea.style = false;
        chatName.textContent = item.name
        profileAvatar.src = './assets/images/placeholder/'+item.avatar
        profileName.textContent = item.name
        userNameLink.textContent = "@"+item.username
        const allDialogItem = document.querySelectorAll('.dialog__item')
        currentChatId = item.id
        let selectedObject = usersData.find(user => user.id == currentChatId)
        
        chatList.textContent = ""
        for (let message of selectedObject.messages) {
            newChatListItem(chatList, message.body, message.date, message.isMine)   
        }


        for (let item of allDialogItem) {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
        }
        listItem.classList.add('active')
        chatDetail.classList.remove('hidden')
        chatRight.classList.remove('hidden')
        chatFooter.classList.remove('hidden')
        chatList.classList.remove('hidden')
        selectChat.classList.add('hidden')
        chatBody.classList.add('height-auto')
        formInput.value = ""


    })

    
}

function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };

searchForm.addEventListener('submit', e => {
    e.preventDefault()
})


searchInput.addEventListener('input', e => {
    inputValue = e.target.value;
    dialogList.textContent = ""
    // if(!inputValue){
    //     renderUser(usersData)
    // }
    let searchResult = usersData.filter(value=>{
        return value.name.toLowerCase().includes(inputValue)
    })
    renderUser(searchResult)
})

