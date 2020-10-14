@footer
Feature: User can copy item's url by drag and drop its image to text fields

  @smoke
  Scenario: Item's url is copied when its image is dragged and dropped into the Search field
    When I drag and drop image of the first item in the grid into the Search field
    Then Item's url should be copied


