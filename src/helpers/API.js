export default class API{
    static retrieveOptions(){
        return fetch('http://localhost:5000/column/variables')
        .then(resp => resp.json())
    }

    static retrieveData(variable){
        return fetch(`http://localhost:5000/${variable}`)
        .then(resp => resp.json())
    }
}