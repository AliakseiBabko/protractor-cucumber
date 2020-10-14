@smoke
Feature: When choosing a product group, user can see a proper set of the title, filters, and buttons

    @smoke
    Scenario: When on the catalog page for TVs, user see title Телевизоры in the grid's header as well as Каталои and Объявления buttons
        When Catalog page for TVs is loaded
        Then The title of the grid is Телевизоры
        And There should be the following buttons in the grid's header:
        | Каталог               |
        | Объявления            |

    @smoke
    Scenario: Verify that user is able to see all categories of the left panel     
        Then Left Panel should be visible