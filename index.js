function search() {
    let inputTag = document.getElementById("input");
    let movieName = inputTag.value

    console.log(movieName)


    let htmlRequest = new XMLHttpRequest()

    let url = "http://www.omdbapi.com/?apikey=9311c983&t="+ movieName

    htmlRequest.open("GET", url)

    htmlRequest.send()

    htmlRequest.responseType = "json"

    htmlRequest.onload = () => {
        let data = htmlRequest.response;
        console.log(data);

        let imgTag = document.getElementById("poster")
        imgTag.src = data.Poster
    
        let plotTag = document.getElementById("plot")
        plotTag.innerHTML = data.Plot
    }

   
    
}
