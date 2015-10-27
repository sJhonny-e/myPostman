# myPostman
Just a super-simple HTML + JS app for calling an API asynchronously and displaying the results.  
(almost*) No frameworks / libraries used; just plain ol' JS.  

*Uses Prism for syntax highlighting, just so it's prettier. 

## Usage
You can set up a pre-existing server with the required API (`/spaces?format={format}`) to serve the `public` directory, and browse to 'index.html'.  

Alternatively, you can use the provided simple express server using `node main.js` from the `server` directory.  
*note that you need express installed for that (`npm install express`).  

## What's nice about this?
1. Clear separation of concerns makes the code more maintainable and testable (see below on how to extend for testing).  
2. Supported data formats can be changed by simply changing the `consts` module, without changing the application itself.  
3. Internationalization is easy using translation modules.  
2. Tiny- the whole thing is 15KB *non*-minified.  

## What can be improved?
1. Display the full info about the response:  
The `dataService` module can be extended to return more info about the response (i.e headers).  
It's then very easy to display it with Prism, using `language-http`.  
2. Unit tests:  
It's fairly easy to write a test page that'd test the functionality of the `mainController` module;  
Simply create an HTML file with the required elements (textbox, button, dropdown), and the dependencies can be easily mocked.  
