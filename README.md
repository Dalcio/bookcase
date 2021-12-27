# Bookcase Challenge Solution

![Cover](./screenshot/desktop.png)

This project is the solution of react junior frontend vacancy challenge from vizpert.
The challenge consist in create a bookcase accessible from mobile and computer where the user can sort the books by their characteristics such (color, size, alphabet and release date).

The project includes the **mandatory feature** plus add **extra challenges**.

## Summary

- [Mandatory Features](##mandatory-features)
- [Extra Challenges](##extra-challenges)
- [Main Technologies](##main-technologies)
- [External Libraries](##external-libraries)

## Mandatory Features {##mandatory-features}

- [x] 2 book listings (shelves)
- [x] Allow the change of positions of books by dragging and dropping, being able to be for the same shelf or not.
- [x] When selecting a sort type, and clicking on “Organize” the ordering must be applied to each shelf separately taking into account the books present.
- [x] Reverse the order when clicking the button again, if the same sort option is selected.
- [x] Sort types are: Alphabetical, Size, and Color order
      (Red, Orange, Yellow, Green, Light Blue, Dark Blue, Violet, Pink)
      **Note:** I had to add **magenta** color because the quantity of provided colors doesn't match with all books, missing one book without color (provided 8 color with 9 books. I add the 9nth color). Making the order: **_(Red, Orange, Yellow, Green, Light Blue, Dark Blue, Violet, Pink, Magenta)_**.

## Extra Challenges {##extra-challenges}

I solved all proposed extras challenges, shown below

- [x] Create a new book
- [x] Update book
- [x] Delete book
- [x] Sort by posting data
- [x] Make the clock work

## Main Technologies {##main-technologies}

- React ts
- Typescript

## External libraries (Npm) {##external-libraries}

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [styled-components](https://styled-components.com/)
- [uuid](https://github.com/uuidjs/uuid#readme)
- [date-fns](https://date-fns.org/)
