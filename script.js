document.getElementById('convert-json').addEventListener('click', () => {
    let convertedJson = convertCSVtoJSON();
    
    if(convertedJson) {
        console.log(convertedJson);
        displayJSON(convertedJson);
    }
});

const convertCSVtoJSON = () => {

    if(!document.getElementById('csv-data').value) {
        displayErrorMessage();
        return;
    }

    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "None";

    let csvDataLines = document.getElementById('csv-data').value.split('\n').filter((line) => line != "");

    let keys = [...csvDataLines[0].split(',')].map((key) => {
        return key.replace(/"/g, '');
    });
    let jsonDataArray = [];
    let lines = csvDataLines.slice(1);

    keys.forEach(key => console.log(key))
    
    lines.forEach((line) => {
        let values = []
        line.split(',').map((prop) => {
            value = prop.replace(/"/g, '');
            values.push(value);
        });

        let obj = {}

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = values[i];
            obj[key] = value
        }

        jsonDataArray.push(obj);
        
        console.log(values);
    })

    return jsonDataArray;
}

const displayJSON = (convertedJson) => {
    let jsonData = document.getElementById('json-data');
    
    jsonData.value = JSON.stringify(convertedJson).replace(/},/g, '},\n');
    console.log(JSON.stringify(convertedJson).replace(/},/g, '},\n'));
}

const displayErrorMessage = () => {
    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "block";
}