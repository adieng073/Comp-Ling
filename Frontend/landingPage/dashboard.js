document.getElementById('confirm').addEventListener('click', function() {
    let sourceData = document.getElementById('sourceData').value;

    if(sourceData === "Oracle"){
        alert("test: Oracle ")
        
    }
    else if(sourceData === "SQL"){
        alert("test: SQL");
    }
    else if(sourceData === "Excel"){
        alert('test: Excel');
    }
});


