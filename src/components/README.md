# layout and non-layout component

## Layout Components:

Purpose: Layout components are used to structure the visual layout of your application. They include components like `View`, `ScrollView`, `SafeAreaView`, `KeyboardAvoidingView`, etc.
Functionality: 
1. Layout components manage the arrangement and positioning of UI elements within your app's interface. 
2. They often utilize flexbox layout to define the layout structure.

Example Use Cases: 
- Creating containers, 
- organizing UI elements, 
- handling scrolling behavior, 
- managing safe area insets, 
- handling keyboard interactions, etc.

| Layout Component          | Description                                                                              | Example Use Cases                                                                         |
|--------------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| View               | A container that supports layout with flexbox, style, some touch handling, etc.          | Building UI layouts, grouping UI elements, creating containers, etc.                      |
| ScrollView         | Provides a scrollable container for its children.                                         | Displaying long lists, content with overflow, scrollable views, etc.                        |
| SafeAreaView       | A view that automatically adjusts to the safe area insets of the device.                  | Ensuring content is displayed within the safe area boundaries of the device screen.        |
| KeyboardAvoidingView | A view that adjusts its size and position to avoid overlapping with the keyboard.        | Ensuring input fields remain visible when the keyboard is shown.                            |
| StatusBar          | Component to control the status bar appearance.                                           | Changing the status bar style, color, visibility, etc.                                      |
| ImageBackground    | A component for displaying a background image.                                            | Setting background images for screens, containers, or sections within an app.               |
| FlatList           | Renders a list of items efficiently by only rendering the ones that are currently visible.| Displaying large lists with dynamic content efficiently.                                   |
| SectionList        | Similar to FlatList but allows for sections in the list.                                  | Grouping list items into sections with headers.                                            |
| Modal              | Renders content over the rest of the app's content.                                       | Displaying overlays, dialogs, pop-ups, modals, etc.                                        |
| DrawerLayoutAndroid | An Android-specific component for creating a drawer layout.                               | Creating navigation drawers, side menus, or panels in Android applications.                 |
| VirtualizedList    | Base class for virtualized lists.                                                        | Building custom lists or implementing custom list behavior.                                  |                             |
| RefreshControl     | A component for adding pull-to-refresh functionality to ScrollView or FlatList.          | Adding pull-to-refresh functionality to scrollable lists.                                   |                                          |
| TouchableHighlight | Wraps its children in a touchable highlight container that changes the background color. | Creating buttons with visual feedback when pressed.                                        |


## Non-layout Components:

Purpose: Non-layout components are used to display content or provide interactive elements within the layout defined by layout components. 
They include components like Text, Image, TouchableOpacity, TextInput, Modal, etc.
Functionality: 
1. Non-layout components focus on rendering specific types of content 
2. providing user interaction elements such as text, images, buttons, input fields, modals, etc.
Example Use Cases: 
- Displaying text content, 
- showing images, 
- creating buttons, 
- handling touch interactions, 
- receiving user input, 
- displaying overlays or pop-ups, 

| Non-Layout Component          | Description                                                                              | Example Use Cases                                                     |
|--------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Text               | Renders text content.                                                                    | Displaying text content, labels, titles, paragraphs, etc.            |
| Image              | Displays images.                                                                         | Showing icons, logos, user avatars, product images, etc.             |
| TouchableOpacity   | Wraps its children in a touchable opacity container that can respond to touch events.    | Creating buttons, clickable elements, navigation links, etc.         |
| TouchableHighlight | Wraps its children in a touchable highlight container that changes the background color. | Creating buttons with visual feedback when pressed.                  |
| TouchableWithoutFeedback | Wraps its children in a touchable container without feedback.                       | Used when no visual feedback is needed for touch interactions.       |
| TextInput          | Allows users to enter text.                                                              | Creating input fields, forms, search bars, etc.                      |
| Modal              | Renders content over the rest of the app's content.                                       | Displaying overlays, dialogs, pop-ups, modals, etc.                  |
| ActivityIndicator  | Displays a spinning indicator to indicate loading or processing.                           | Showing loading state, processing state, or indicating progress.     |
| WebView            | Embeds web content in the app.                                                           | Displaying web pages, web content, interactive web elements, etc.     |
| Keyboard           | Not a UI component, but a module to control keyboard visibility and behavior.            | Showing or hiding the keyboard programmatically, controlling keyboard behavior, etc.        |
