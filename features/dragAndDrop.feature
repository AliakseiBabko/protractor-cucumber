@footer
Feature: 

  Background:
    Given Select Samsung in filter as producer

  @smoke
  Scenario: Verify that user item's url is copied when its image is dragged and dropped into the Search field
    When I drag and drop image of the first item in the grid into the "Search" field
    Then Item's url should be copied 


