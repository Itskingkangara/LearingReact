// //here we are trying to underStand that how react work under the hood by clearting library
//


function addElement(reactElement){

    const element= document.createElement(reactElement.type)
    element.innerHTML= reactElement.children
    element.setAttribute('href', reactElement.prop.href)
    element.setAttribute('target', reactElement.prop.target)
    document.getElementById('root').appendChild(element)
}

const reactElement= {
    type : 'a',
    prop: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click me to visit google'
}

addElement(reactElement)

