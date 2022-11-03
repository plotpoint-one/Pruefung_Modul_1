# Converter (2)

You have a combobox with two options: "pounds -> kilos" and "kilos -> pounds". Further you have two input boxes, one labeled "from" and the other "to". Implement JS functionality that will do the conversion. On change in the combobox, both input fields should be put to zero. Please make sure all results are padded to three decimal places. 

Remember the highest weight value inserted and output it in kilos a `<div>` element below all the other UI elements.

Refactor the code and factorize functions `toPounds(kilos)` and `toKilos(pounds)` if you have not already done so

# Deep dive (3)

You have a html form with two `<input>` fields: name and meters. Below you have a button which says "add new score".  Below there is a `<textarea>` which displays the scores (`ID=scores`). The button above it adds new score (`${name} -${score}`) to it if the score value is numeric. If not, it displays an error message via `alert()`. 

Below the textarea there is another button wich removes the line with the smallest score value from the records.

# Calculator (4)

You'll create a calculator in HTML. Provide UI elements for digits from 0 to 9 and UI elements for the operations "+", "-", "*", "/" modulo and "=". Implement the functionality.

When the current number on the calculator is a prime number, assign to it a CSS class that will make it blue. If the number is smaller than 0, assign to it a class that will make it red.

Create an input box. The number in this output will determine the precision of the operations, if the result has decimals. E.g. "1/3" with the number 3 in the inputbox will result in "0.333".


# Slideshow (6)

Create an array `slides` with objects that contain a link to a publicly accessible `image` and a `subtitle`. Provision it with at least three objects .

Now create a HTML slideshow. It will display the first image with a predetermined height/width. Bellow it there will be the centered subtitle and left and right to the image there will be buttons allowing to change the image to the next slides. When you reach the end you start from the beginning.

Provide to more buttons labeled "increase font" and "decrease font". These will increase/decrease the font by 1px.

# Tables and Statistics (14)

We have the HTML table with a statistic:

    Name  | Age | Income
    --------------------
    Petra | 45  | 10000
    Linda | 23  |  5000

Each cell with content has assigned a CSS class (`td.name`, `td.age`, `td.income`)

Below it there is a combo box where you can select the column (Name, Age, Income) for the calculation and another where you can select the function ("sum", "average"). Below that there is a button that can be used to calculate this data and output it using `alert()`.

Furthermore, each line of the table should have a button for deleting.

It should be possible to add a new employee to the table using another button below the table. This one has randomized data.


# Login Dialog (15)

Create a form with email and password fields and a submit button. Furthermore, an initially empty message box (`<span>`, `ID=messagebox`) should be available. If the email is valid and the password is longer than 10 characters, the message "Account created" should be displayed in green (via CSS class "good-msg") in the message box. Otherwise the reason should be displayed in red in the message box (CSS class "fail-msg"). The reason is either that the password is too short or the email is invalid.


# Matrix (memory game)

Create a matrix of 4x4 elements (e.g. div) of a fixed size. Randomly chose two free elements and put a letter inside. Use a huge font so the letter is nicely readable. Do so until all the cells of the matrix are occupied. Remember the letters - use the attributes of the cells for this.

Now hide all the letters and display "*" in the cell instead. 

When user clicks a cell, it will reveal to him its letter. When he clicks the next cell and the letters are the same, they will stay like this forever. If the letters do not match, both will be hidden after 1 second and display "*".

If all the letters are revealed, display "You won" in green in a message box bellow the matrix.

Make the size of the matrix configurable

# Timers

Create an HTML `<div>` that moves to a random position (in the screen) every 5 seconds on the screen. When you click on it, it pauses. If you click on it again, it starts again.

Extend the previous code to make the 5 seconds configurable (via `<input>`). Next expand the code with a combo box, which you can use to choose `red`/`green`/`blue` as the color of the div.
