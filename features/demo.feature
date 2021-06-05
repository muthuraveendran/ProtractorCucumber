Feature: Basic Operation Calculator Page

@aaa
Scenario: Calaculate Add Functionality
Given I will navigate to Calc site
When Add two number '8' and '5'
Then The output is displayed '13'


@bbb
Scenario Outline: Scenario Outline name: Welecome To Learn Cucumber
Given Beginner in cucumber Frame work
When  Learning with protractor
Then the output is "<key>" displayed

Examples:
| key |
| Hi | 
| Hey | 


# Scenario: Calaculate Add Functionality
# Given I will navigate to Calc site11
# When Add two number '5' and '5'
# Then The output is displayed '10'

# Scenario: Welecome To Learn Cucumber
# Given Beginner in cucumber Frame work
# When  Learning with protractor
# And will subtract two number
# Then the output is displayed




