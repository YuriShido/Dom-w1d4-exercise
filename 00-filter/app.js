//get result element
const result = document.querySelector('ul');
//get input filter element
const input = document.querySelector('input');
//define an array variable
const listItems = [];
//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);
    filterData(e.target.value);
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''
    
    for(let r of results) {

        const li = document.createElement('li');
        li.innerHTML = 
        `<img src=${r.picture.thumbnail}>
        <div class= 'user-info'>
            <h4>${r.name.first}</h4>
            <p>${r.location.city}</p>
        </div>`;
        //iterate every result and display inside of UL
        // <img src=??
        // const img = document.createElement('img') ;
        // img.src = r.picture.thumbnail;

        // <div class="user-info"
        // const div = document.createElement('div');
        // div.classList.add('user-info');
    
            //h4 --- name
        // const h4Name = document.createElement('h4');
        // h4Name.innerText = r.name.first;
            //p -- any info you wanna put
        // const p = document.createElement('p');
        // p.innerText = r.location.city;

        result.appendChild(li);
        listItems.push(li);
    }


}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            //remove the class of .hide
            item.classList.remove('hide');
            
        } else {
            //add the class of .hide
            item.classList.add('hide')
        }
    })
}