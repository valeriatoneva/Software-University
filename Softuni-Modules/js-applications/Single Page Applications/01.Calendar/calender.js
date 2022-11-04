const yearSelect = document.getElementById('years');
const monthNames = {
    'Jan':1,
    'Feb':2,
    'Jan':3,
    'Mar':4,
    'Apr':5,
    'May':6,
    'June':7,
    'July':8,
    'Aug':9,
    'Sep':10,
    'Oct':11,
    'Nov':12,
    'Dec':13,

}

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc; // get years
})

const months =  [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc; // get months
})

function displaySection(section){
    document.body.innerHTML = "";
    document.body.appendChild(section);

}
displaySection(yearSelect)

yearSelect.addEventListener('click', (e) =>{
    if(e.target.classList.contains('date') || e.target.classList.contains('day')){
        e.stopImmediatePropagation()
        const yearId = `year${event.target.textContent.trim()}`
        document.body.innerHTML = "";
        document.body.appendChild(years[`year-${yearId}`])
    }

})
document.body.addEventListener('click', (e) => {
if(e.target.tagName == 'CAPTION'){
    const sectionId = e.target.parentNode.parentNode.id;
    if(sectionId.includes('year-')){
    displaySection(yearSelect)
    } else if(e.target.tagName == 'TD' || e.target.tagName == 'DIV'){
        const monthName = e.target.textContent.trim();
    }
}
})

