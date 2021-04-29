document.getElementById('convert-json').addEventListener('click', () => {
    let convertedJson = convertCSVtoJSON();
    console.log(convertedJson);
    displayJSON(convertedJson);
});

const convertCSVtoJSON = () => {
    let csvDataLines = document.getElementById('csv-data').value.split('\n');
    
    if(csvDataLines.length == 0) {
        return;
    }
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