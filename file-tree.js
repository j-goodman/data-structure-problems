const newFile = (name, contents) => {
	return {
		name: name,
		contents: contents
	}
}

const newFolder = (name, files = []) => {
	return {
		name: name,
		files: files
	}
}

const files = newFolder("computer", [
	newFolder("Desktop", [
		newFile("todo-list.txt", "Things to do this week"),
		newFile("grocery-list.txt", "Eggs, cheese, rice"),
        newFolder("Documents", [
            newFile("resume.txt", "My resume"),
            newFolder("Important Documents", [
                newFile("taxes.txt", "Tax documents"),
                newFile("id.txt", "Government id"),
            ])
        ]),
        newFolder("Projects", [
            newFile("bubble-sort.js", "a bubble sort algorithm"),
            newFile("linked-list.js", "a linked list algorithm"),
            newFile("file-tree.js", "a file tree")
        ]),
        newFile("notes.txt", "Some notes")
	]),
])

// 1. Search: write a function that searches for a specific piece of text in the contents of the file tree. For example, searching for "algorithm" should return an array of the files "linked-list.js" and "bubble-sort.js". Searching for "grocery" should return an array with only the "grocery-list.txt" file. Searching for "elephant" should return an empty array.

// 2. Count files: write a function that counts how many files are in the whole file tree.

// 3. List all files: write a function that returns an array of all the files in the tree.

// 4. Add new file to folder: write a function that takes in a file and filepath as a parameter, like this:
// addNewFile(newFile("list.txt", "a list"), "Desktop/Documents/Important Documents")
// The function should create the new file inside the Important Documents folder.