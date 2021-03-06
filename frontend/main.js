window.addEventListener('DOMContentLoaded', (event) => {
    getViewCounter();
})

const functionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getViewCounter = () => {
    let count = 30;

    fetch(functionAPI)
        .then(resp => {
            return resp.json()
        })
        .then(resp => {
            console.log("Welcome to the API function")
            count = resp.count
            document.getElementById("counter").innerHTML = count
        }).catch(err => {
            console.log(err);
        });

        return count
}