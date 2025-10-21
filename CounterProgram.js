const decID = document.getElementById("decID");
const incID = document.getElementById("incID");
const resetID = document.getElementById("resetID");
const countLabel = document.getElementById("countLabel");

let count = 0;

incID.onclick = function()
{
    count++;
    countLabel.textContent = count;
}

decID.onclick = function()
{
    count--;
    countLabel.textContent = count;
}

resetID.onclick = function()
{
    count = 0;
    countLabel.textContent = count;
}