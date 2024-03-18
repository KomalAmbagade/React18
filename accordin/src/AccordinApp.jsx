import React from 'react'
import Accordin from './Accordin'
const AccordinApp = () => {
  const items = [
		{
			title: "What is React?",
			content:
			"React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.",
		},
    {
     title:" What are the advantages of using React?",
     content:"Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves. Reusable components: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development."
    },
		{
			title: "What is useState() in React?",
			content:
				"The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.",
		},
		{
			title: " What are props in React?",
			content:
				"The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.",
		},
	]
  return (
    <div>
       <Accordin items={items} />
    </div>
  )
}

export default AccordinApp
