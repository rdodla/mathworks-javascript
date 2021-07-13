# Lab 02

A series of labs covering data and the Document Object Model, particularly regarding tables.

## Lab 02-1

Render the list of `users` into an HTML table with the following columns:

- firstName / First Name
- lastName / Last Name
- address.city / City
- address.state / State

HTML table reference:

```html
<table>
<thead>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Value 1.1</td>
    <td>Value 2.1</td>
  </tr>
  <tr>
    <td>Value 1.2</td>
    <td>Value 2.2</td>
  </tr>
  <tr>
    <td>Value 1.3</td>
    <td>Value 2.3</td>
  </tr>
</tbody>
```

## Lab 02-2

Add an event handler to the Last Name header so that clicking on it sorts the table by last name. 

Add a similar event handler for first name. You only need to sort on one field at a time.

Would it be complicated to sort on city and state? Why?

### Challenge
Use lodash's [`orderBy`](https://lodash.com/docs/4.17.15#orderBy) method to sort the list of people. Try it with city and state as well. 

Import `orderBy` as follows:
```javascript
import {orderBy} from '../node_modules/lodash-es/lodash.js';
```