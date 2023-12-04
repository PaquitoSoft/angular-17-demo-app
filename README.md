# Angular17 Demo App

This PR implements a very basic client-side application to serve as a playground to fiddle around with Angular 17.

Here are some helpful links:
- [Angular v17 announcement](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [Angular new docs](https://angular.dev/)

## Key features

This is the list of the the features I find more interesting: (not all of them belong to `v17`)
- New control flow directives: `@if` (`else`) and `@for` (`empty`)
- Deferred content (`@defer` directive)
- Router (scroll positioning; [view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/))
- Signals (`untracked()` helper)
- Input and Output components props

## Things I found ackward

- Sometimes I need to restart the server for templates changes to take effect in the browser
- When navigating from a product detail page to another detail page (related product), the URL was updating but the view content didn't
  - I _solved_ it with a page data loader defined in the router
- When navigating to a related product with a router data loader did not change the product galley main image
	- I had to use the `ngOnChanges` lifecycle method to update the selected image state instead of `ngOnInit` one
- Scroll didn't reset after soft navigation
	- I used `withInMemoryScrolling` router provider but always navigates to top even when navigating back to the previous route
- Signals require to be called within Components constructor and using the effect() function (there are exceptions)
  - To not create a dependency to the Signal, you must use the `untracked(<signal>)` function
