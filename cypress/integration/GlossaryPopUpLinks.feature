Feature: Glossary pop ups

  #Scenario: When user clicks on the link
  #Given user is navigating to "/test/dictionary-link-test"
  #When user click on the link with href "/Common/PopUps/popDefinition.aspx?id=CDR0000045214&version=Patient&language=English"
  #Then the call is stub


  Scenario Outline: When user clicks on the link
    Given user is navigating to "/test/dictionary-link-test"
    When user click on the link with href "<href>" and url for popup as "<popupUrl>"
    Then the call is stub

    
    And the following values are received
      | property      | value                                                                                                                                                                                                                          |
      | termID        | 45214                                                                                                                                                                                                                          |
      | language      | en                                                                                                                                                                                                                             |
      | dictionary    | Cancer.gov                                                                                                                                                                                                                     |
      | audience      | Patient                                                                                                                                                                                                                        |
      | termName      | chemotherapy                                                                                                                                                                                                                   |
      | firstLetter   | c                                                                                                                                                                                                                              |
      | prettyUrlName | chemotherapy                                                                                                                                                                                                                   |
      | pronunciation | {key: "(KEE-moh-THAYR-uh-pee)", audio: "https://nci-media.cancer.gov/pdq/media/audio/705162.mp3"}                                                                                                                              |
      | definition    | {html: "Treatment that uses drugs to stop the growth of ca… surgery, radiation therapy, or biologic therapy.", text: "Treatment that uses drugs to stop the growth of ca… surgery, radiation therapy, or biologic therapy."} |

      Examples:
      | href                                                                                | popupUrl                                       |
      | /Common/PopUps/popDefinition.aspx?id=CDR0000045214&version=Patient&language=English | /glossary/v1/Terms/Cancer.gov/Patient/en/45214 |
    # | /Common/PopUps/popDefinition.aspx?id=46710&version=patient&language=English&dictionary=Cancer.gov | /glossary/v1/Terms/Cancer.gov/Patient/en/46710 |

