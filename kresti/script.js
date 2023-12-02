let block = document.querySelectorAll(".block");
let statusik = [[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],
[1,5,9],[3,5,7],[2,5,8],
                [4,5,6]]
let och = 1;
let win = 0;
let gameX = [];
let gameO = []
block.forEach(elem =>{
    elem.addEventListener('click', function() {
        if(och == 1) {
            if(elem.innerText == "" && win == 0) {
                elem.innerHTML = "X";
            }
            gameX.push(+elem.getAttribute('data-id'))
            if(proverka(statusik, gameX)) {
                if(win == 0) {
                    console.log('pobeda - X');
                    win = 1;
                }
            }
            och = 2;
        } else {
            if(elem.innerText == "" && win == 0) {
                elem.innerHTML = "O";
            }
            gameO.push(+elem.getAttribute('data-id'));
            if(proverka(statusik, gameO)) {
                if(win == 0) {
                    console.log('pobeda - O');
                    win = 1;
                }
            }
            och = 1;
        }
    })
})

function proverka(matrix, subarray){
    const sortedSubarray = subarray.slice().sort();

    return matrix.some(row => {
        const sortedRow = row.slice().sort();
        return JSON.stringify(sortedRow) === JSON.stringify(sortedSubarray);
    });
}
// proverka()