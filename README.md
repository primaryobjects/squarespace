Squarespace
===========

A collection of render blocks for use on Squarespace.

## Quick Start

1. Follow the steps to [connect](https://gist.github.com/primaryobjects/f5a9d7354f353a4fe607cd41f51ff1a2) a Google Spreadsheet to Squarespace.
2. Follow the steps to [upload](https://gist.github.com/primaryobjects/b6f7be039f8e8f0c234caa3f18e02154) images to the Squarespace CDN and include the links in the spreadsheet.
3. In Squarespace, create a new page and click the Settings icon.
4. Click the tab **Advanced**.
5. Paste the contents from [head.html](head.html) into **Page Header Code Injection**.
6. Close the settings dialog.
7. Select the page and click **Edit**.
8. Click on the code block and select **Edit**.
9. Paste the contents of from [index.html](index.html) into the **Code** block.
10. Save the changes.

## Inserting an Author Collection

The author collection component can be added to a page by following the quick start guide above. The component is added to the page via the following code:

```js
ReactDOM.render(<AuthorCollection 
                manager={adultAuthorManager}
                />, document.getElementById('root'));
```

## Options

The following options are available on the `AuthorCollection` component.

- manager: Google spreadsheet data manager object and field parser. See examples for [adultAuthorManager](https://github.com/primaryobjects/squarespace/blob/main/collections.js#L453) and [childAuthorManager](https://github.com/primaryobjects/squarespace/blob/main/collections.js#L524).

- isHideBook: True if book details should not be displayed for the author. *(default is False)*

- isHideBookText: True if only the book image should be displayed, not the book text information including "Buy the Book". *(default is False)*

- booksHeading: Heading text for book information section. *(default is "Buy the Book")*

#### Custom Example

An example of using the options is shown below.

```js
ReactDOM.render(<AuthorCollection 
                manager={adultAuthorManager}
                isHideBook={False}
                isHideBookText={False}
                booksHeading="Latest Books"
                />, document.getElementById('root'));
```

## Links

[Squarespace Manager](https://dory-crow-msc6.squarespace.com/config/pages)

[Dynamic2](https://www.collingswoodbookfestival.com/dynamic2)

[JSBin](https://jsbin.com/cisidibudi/1/edit?js,output)
