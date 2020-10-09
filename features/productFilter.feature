@header
Feature: product filter

    Background:
        Given Select Samsung in filter as producer

    @smoke
    Scenario: Verify that the name of product group is "Телевизоры"
        When I catalog page for TVs is loaded
        Then Title of the items grid is "Телевизоры"

    @smoke
    Scenario: Verify that user is able to see all necessary elements at the Footer on Home Page
        When I switch to "Объявления"
        Then There should be the following switchers in the grid's header:
        | Разместить объявление |
        | Каталог               |
        | Объявления            |

    @smoke
    Scenario Outline: Verify that user is able to see all categories of the left panel     
        Then Left Panel should be visible
        And Count of <Left Panel Categories> elements should be equal <Number of Checkboxes>  
        Examples:
        | Left Panel Categories | Number of Checkboxes |
        | Производитель         | 10                   |
        | Магазины              | 6                    |
        | Дата выхода на рынок  | 4                    |
        | Диагональ             | 10                   |
        | Разрешение            | 7                    |
        | Технология матрицы    | 3                    |