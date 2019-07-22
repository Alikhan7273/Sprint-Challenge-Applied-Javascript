// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header() {

    // Get the Header Container Element
    const headerContainer = document.getElementsByClassName("header-container")[0];

    // create a new DIV
    const newDiv = document.createElement('div');
    newDiv.classList.add('header');

    // Create a new SPAN
    const newSpan1 = document.createElement('span');
    newSpan1.classList.add('date');
    newSpan1.innerText = 'MARCH 28, 2019';

    // Create a new H1
    const newH1 = document.createElement('h1');
    newH1.innerText = 'Lambda Times';

    // Create a new SPAN
    const newSpan2 = document.createElement('span');
    newSpan2.classList.add('temp'); 
    newSpan2.innerText = '98°';

    // Append all child elements to the new DIV
    newDiv.appendChild(newSpan1);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newSpan2);

    // Append the new DIV to the Header
    headerContainer.appendChild(newDiv);

}

// Execute Header to create the header
Header();







// const header = document.querySelector('.headerContainer')

// function Header(date, title,temp) {
//     // define new elements
//     const header = document.createElement('div');//className
//     const span1 = document.createElement('span');//className
//     const NewH1 = document.createElement('h1');
//     const span2 = document.createElement('span');//className

//     // Setup structure of elements
//     header.appendChild(span1)
//     header.appendChild(NewH1)
//     header.appendChild(span2)

//     // set class names
//     header.classList.add('header')
//     span1.classList.add('date')
//     span2.classList.add('temp')

        //set textContent
//     span1.textContent = 'MARCH 28, 2019'
//     newH1.textContent = 'Lambda Times'
//     span1.textContent = '98°'

//     return header;
//}
