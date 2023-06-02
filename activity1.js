var Score = 0;

function UpdateScore()
{
    Score = Score+1;
    document.getElementById("Score").innerHTML = "Score:" +Score;

}

function SaveScore()
{
    localStorage.setItem("Score", Score);
}

function NextPage()
{
    window.location= "activity_2.html";
}
