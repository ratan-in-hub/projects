const flames = document.getElementById("flames")
flames.addEventListener("click", function () {
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value

    name1 = name1.toLowerCase()
    name2 = name2.toLowerCase()
    name1 = name1.replace(" ", "")
    name2 = name2.replace(" ", "")

    for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
            if (name1[i] === name2[j]) {
                name1 = name1.slice(0, i) + name1.slice(i + 1)
                name2 = name2.slice(0, j) + name2.slice(j + 1)
                i--
                break
            }
        }
    }
    
    total = name1.length + name2.length

    if (total > 0) {
        let list = ["Friends", "Lovers", "Affectionate", "Marriage", "Enemies", "Siblings"]

        while (list.length > 1) {
            let c = total % list.length
            let sIndex = c - 1

            if (sIndex >= 0) {

                let left = list.slice(0, sIndex)
                let right = list.slice(sIndex + 1)
                list = right.concat(left)
            } else {

                list.pop()
            }
        }

        document.getElementById("result").innerText = `Relationship is: ${list[0]}`
    } 
    else {
        document.getElementById("result").innerText = "Enter different names!"
    }
})