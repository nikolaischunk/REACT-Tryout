function fetchAllCardData() {
    fetch('../data.json')
        .then(function(response) { return response.json(); })
        .then(function(cards) {



            console.log("Sequence", sequence);
            var id = 1;

            function createDiv() {
                return document.createElement("div");
            }

            var cardsCount = cards.length;
            var rowCount = Math.ceil(cardsCount / 3);
            console.log("RowCount", rowCount);
            // for (var i = 0; i < rowCount; i++) {

            //     sequence.appendChild(createDiv()).setAttribute("id", "row-" + i).setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
            //     for (var y = 1; i < 3; y++) {
            //         var myRow = document.getElementById("row" + i);
            //         myRow.appendChild(createDiv()).setAttribute("id", "col-" + i + "-" + y).setAttribute("class", "col");
            //         var myCol = document.getElementById("col-" + i + "-" + "y");
            //         myCol.appendChild(createDiv()).setAttribute("id", "card-id-" + id).setAttribute("class", "card h-100");
            //         id++;


            //     }
            // }

            cards.forEach((element, index) => {
                document.getElementById("sequence").appendChild(createDiv()).setAttribute("id", "row-" + index).setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
                var myRow = document.getElementById("row" + index);
                myRow.appendChild(createDiv()).setAttribute("id", "col-" + index + "-" + y).setAttribute("class", "col");
                var myCol = document.getElementById("col-" + index + "-" + "y");
                myCol.appendChild(createDiv()).setAttribute("id", "card-id-" + id).setAttribute("class", "card h-100");
            });
            console.log("card", cards);

        });

};
fetchAllCardData();