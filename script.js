
const field = document.getElementById("input-field")
const output = document.getElementById("input-fieldtwo")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function genPass()
{

    //const randomLength1 = Math.floor(Math.random()*10) + 1
    //const randomLength2 = Math.floor(Math.random()*10) + 1

    let randomSelection1 = '';
    for(let i = 0; i<10; i++){

        const randomIndex = Math.floor(Math.random() * characters.length);
        randomSelection1 += characters[randomIndex];
    }

    let randomSelection2 = '';
    for(let i = 0; i<10; i++){

        const randomIndex = Math.floor(Math.random() * characters.length);
        randomSelection2 += characters[randomIndex];
    }

    field.value = randomSelection1;
    output.value = randomSelection2;

}


function clearAll(){
    output.value = ''
    field.value = ''
}

//implement copy feature(clips in clipboard)

const CopyBtn = document.getElementById("copybtn")

CopyBtn.addEventListener("click",function()
{

    field.select()
    document.execCommand("copy")
    document.getElementById("gfg").textContent = "Copied Text:" +field.value

   
    

})