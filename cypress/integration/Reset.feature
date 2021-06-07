Feature: Reseting when stuck

    Difficult letter combinations can make the app stuck.
    Pressing the reset button should restore the application
    to its initial state.

    Scenario: Reset application to its initial state
      Given that an user is on index page
      And the application prints some letters
      When the user presses reset
      Then Press a key should be printed
