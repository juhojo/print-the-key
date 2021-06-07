Feature: Print the button pressed

    The user will press keyboard button(s), expecting to
    see the pressed button(s) displayed on the screen.

    Background: User is on page
      Given that an user is on index page

    Scenario: User can see how to use the app
      Then Press a key should be printed

    Scenario Outline: User presses a button
      When the user presses a <key>
      Then <key> should be printed periodically
      When the user releases <key>
      Then Press a key should be printed
    Examples:
        | key |
        | b   |
        | 1   |
        | <   |

    Scenario Outline: User presses multiple buttons
      When the user presses keys <key1> and <key2>
      Then <key1><key2> should be printed periodically
      When the user releases <key2>
      Then <key1> should be printed periodically
      When the user releases <key1>
      Then Press a key should be printed
    Examples:
        | key1  | key2 |
        | 1     | <    |
        | shift | b    |
        