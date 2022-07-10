  <body>
    <h1>[FreeCodeCamp] Front End Development Libraries Projects</h1>
    <h2>Build a JavaScript Calculator </h2>
    <p align="justify">Objective: Build an app that is functionally similar to
      this: <a href="https://codepen.io/freeCodeCamp/full/wgGVVX">https://codepen.io/freeCodeCamp/full/wgGVVX</a>.</p>
    <p align="justify">Fulfill the below user stories and get all of the tests
      to pass. Use whichever libraries or APIs you need. Give it your own
      personal style.</p>
    <p align="justify">You can use any mix of HTML, JavaScript, CSS, Bootstrap,
      SASS, React, Redux, and jQuery to complete this project. You should use a
      frontend framework (like React for example) because this section is about
      learning frontend frameworks. Additional technologies not listed above are
      not recommended and using them is at your own risk. We are looking at
      supporting other frontend frameworks like Angular and Vue, but they are
      not currently supported. We will accept and try to fix all issue reports
      that use the suggested technology stack for this project. Happy coding!</p>
    <p align="justify"><strong>User Story #1</strong>: My calculator should
      contain a clickable element containing an <strong>=</strong> (equal sign)
      with a corresponding <strong>id="equals"</strong>.</p>
    <p align="justify"><strong>User Story #2</strong>: My calculator should
      contain 10 clickable elements containing one number each from 0-9, with
      the following corresponding IDs: <strong>id="zero"</strong>, <strong>id="one"</strong>,
      <strong>id="two"</strong>, <strong>id="three"</strong>, <strong>id="four"</strong>,
      <strong> id="five"</strong>, <strong>id="six"</strong>, <strong>id="seven"</strong>,
      <strong>id="eight"</strong>, and <strong>id="nine"</strong>.</p>
    <p align="justify"><strong>User Story #3</strong>: My calculator should
      contain 4 clickable elements each containing one of the 4 primary
      mathematical operators with the following corresponding IDs: <strong>id="add"</strong>,
      <strong>id="subtract"</strong>, <strong>id="multiply"</strong>, <strong>id="divide"</strong>.</p>
    <p align="justify"><strong>User Story #4</strong>: My calculator should
      contain a clickable element containing a <strong>.</strong> (decimal
      point) symbol with a corresponding <strong>id="decimal"</strong>.</p>
    <p align="justify"><strong>User Story #5</strong>: My calculator should
      contain a clickable element with an <strong>id="clear"</strong>.</p>
    <p align="justify"><strong>User Story #6</strong>: My calculator should
      contain an element to display values with a corresponding<strong>
        id="display"</strong>.</p>
    <p align="justify"><strong>User Story #7</strong>: At any time, pressing the
      <strong>clear </strong>button clears the input and output values, and
      returns the calculator to its initialized state; 0 should be shown in the
      element with the id of <strong>display</strong>.</p>
    <p align="justify"><strong>User Story #8</strong>: As I input numbers, I
      should be able to see my input in the element with the id of <strong>display</strong>.</p>
    <p align="justify"><strong>User Story #9</strong>: In any order, I should be
      able to add, subtract, multiply and divide a chain of numbers of any
      length, and when I hit <strong>=</strong>, the correct result should be
      shown in the element with the id of <strong>display</strong>.</p>
    <p align="justify"><strong>User Story #10:</strong> When inputting numbers,
      my calculator should not allow a number to begin with multiple zeros.</p>
    <p align="justify"><strong>User Story #11</strong>: When the decimal element
      is clicked, a <strong>.</strong> should append to the currently displayed
      value; two<strong> .</strong> in one number should not be accepted.</p>
    <p align="justify"><strong>User Story #12</strong>: I should be able to
      perform any operation (<strong>+, -, *, /</strong>) on numbers containing
      decimal points.</p>
    <p align="justify">User Story #13: If 2 or more operators are entered
      consecutively, the operation performed should be the last operator entered
      (excluding the negative (<strong>-</strong>) sign). For example, if <strong>5
        + * 7 =</strong> is entered, the result should be<strong> 35</strong>
      (i.e. <strong>5 * 7</strong>); if<strong> 5 * - 5 =</strong> is entered,
      the result should be <strong>-25 </strong>(i.e. <strong>5 * (-5)</strong>).</p>
    <p align="justify"><strong>User Story #14</strong>: Pressing an operator
      immediately following <strong>=</strong> should start a new calculation
      that operates on the result of the previous evaluation.</p>
    <p align="justify"><strong>User Story #15</strong>: My calculator should
      have several decimal places of precision when it comes to rounding (note
      that there is no exact standard, but you should be able to handle
      calculations like <strong>2 / 7</strong> with reasonable precision to at
      least 4 decimal places).</p>
    <p align="justify"><strong>Note On Calculator Logic</strong>: It should be
      noted that there are two main schools of thought on calculator input
      logic: <em>immediate execution logic </em>and <em>formula logic</em>.
      Our example utilizes formula logic and observes order of operation
      precedence, immediate execution does not. Either is acceptable, but please
      note that depending on which you choose, your calculator may yield
      different results than ours for certain equations (see below example). As
      long as your math can be verified by another production calculator, please
      do not consider this a bug.</p>
    <p align="justify">EXAMPLE: <strong>3 + 5 x 6 - 2 / 4</strong> = </p>
    <pre>    Immediate Execution Logic: <strong>11.5</strong>
    Formula/Expression Logic: <strong>32.5</strong>
</pre>
    <p align="justify">You can build your project by<u><strong> using this
          CodePen</strong></u> template and clicking <strong>Save </strong>to
      create your own pen. Or you can use this CDN link to run the tests in any
      environment you like: <a href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</a></p>
    <p align="justify">Once you're done, submit the URL to your working project
      with all its tests passing.</p>
    <p align="justify">Solution: <a href="https://github.com/cwchan0212/calculator2">Source</a>
      | <a href="https://codepen.io/cwchan0212/pen/Barardz">demo@codepen</a></p>
  </body>
