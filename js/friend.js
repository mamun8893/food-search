const loadFriend = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((data) => displayFriend(data));
};
loadFriend();

const displayFriend = (friends) => {
    const allFriend = friends.results;
    const friendList = document.getElementById("friend-list");
    for (const friend of allFriend) {
        console.log(friend);
        const p = document.createElement("p");
        p.innerText = `${friend.name.title} Name: ${friend.name.first} ${friend.name.last} Email: ${friend.email}`;
        friendList.appendChild(p);
    }
};