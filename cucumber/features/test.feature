Feature: Movie rating

  Scenario: 1. A movie can be retrieved by ID
    Given the "597433" is added to the GET request

    When the response is received
    Then response should have a status "200"

  Scenario: 2. The retrieved movie has proper schema
    Given the "597433" is added to the GET request

    When the response is received
    Then response should contain the movie title: "Beckett"
    And the response should have proper schema

  Scenario: 3. A rating can be added to a movie
    Given the "597433" is added to the POST request
    And the "8.0" rating is added to the POST request's body

    When the response is received
    Then response should have a status "201"
    And the response should contain the "Success." status message

  Scenario: 4. Invalid rating cannot be added to a movie
    Given the "597433" is added to the POST request
    And the "10.1" rating is added to the POST request's body

    When the response is received
    Then response should have a status "400"
    And the response should contain the "Value too high: Value must be less than, or equal to 10.0." status message

  Scenario: 5. Movie rating can be deleted
    Given the "597433" is added to the DELETE request

    When the response is received
    Then response should have a status "200"

  Scenario: 6. Proper status message should be returns when rating is deleted
    Given the "597433" is added to the DELETE request

    When the response is received
    Then the response should contain the "The item/record was deleted successfully." status message

  Scenario: 7. Missing ID should be handled properly
    Given the "null" is added to the GET request

    When the response is received
    Then response should have a status "404"