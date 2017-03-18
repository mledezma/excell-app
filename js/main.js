(function(window){
    var tHeader = document.getElementById('tHeader');
    var tBody = document.getElementById('tBody');
    var headers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var tbody = [];
    var thead = []

    // Sets the document
    tHeader.innerHTML = '';
    var firstTr = document.createElement('tr');
    var firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    tHeader.appendChild(firstTr);

    var addColumn = function addColumn() {
        tbody.push([tbody.length+1])
        thead.push(headers[thead.length]);
        render('head');
    }

    var addRow = function addRow() {
        tbody.push([tbody.length+1])
        render('body');
    }

    var render = function render(render){
        if(render === 'head') {
            tHeader.innerHTML = '';
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            tr.appendChild(th);
            for (var i = 0; i < thead.length; i++) {
                var th = document.createElement('th');
                th.textContent = thead[i];
                tr.appendChild(th);
                tHeader.appendChild(tr);
                console.log(thead[i]);
            };
        }

        if(render === 'body') {
            tBody.innerHTML = '';
            for(var i = 0; i < tbody.length; i++) {
                var tr = document.createElement('tr');
                console.log(tbody[i][0]);
                var td = document.createElement('td');
                td.textContent = tbody[i][0]
                tr.appendChild(td);
                tBody.appendChild(tr);
            }
        }
    }

    window.app = {
        column: addColumn,
        row: addRow,
    }
}(window));

document.getElementById('addColumn').addEventListener('click', function(){
    app.column();
})

document.getElementById('addRow').addEventListener('click', function(){
    app.row();
})