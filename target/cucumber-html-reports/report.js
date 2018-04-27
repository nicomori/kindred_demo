$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mobile/interview_mobile_web.feature");
formatter.feature({
  "line": 2,
  "name": "Tree test more popular",
  "description": "",
  "id": "tree-test-more-popular",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "verify the correct behavior of the search functionality",
  "description": "",
  "id": "tree-test-more-popular;verify-the-correct-behavior-of-the-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "make click in the icon to search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "send this text \"\u003ctextToSearch\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify if the text \"\u003ctextToSearch\u003e\" appear correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "tree-test-more-popular;verify-the-correct-behavior-of-the-search-functionality;",
  "rows": [
    {
      "cells": [
        "textToSearch"
      ],
      "line": 14,
      "id": "tree-test-more-popular;verify-the-correct-behavior-of-the-search-functionality;;1"
    },
    {
      "cells": [
        "Messi"
      ],
      "line": 15,
      "id": "tree-test-more-popular;verify-the-correct-behavior-of-the-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 13576465145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 4222015980,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify the correct behavior of the search functionality",
  "description": "",
  "id": "tree-test-more-popular;verify-the-correct-behavior-of-the-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "make click in the icon to search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "send this text \"Messi\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify if the text \"Messi\" appear correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.makeClickInTheIconSearch()"
});
formatter.result({
  "duration": 8988400130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 16
    }
  ],
  "location": "Steps.sendSomeTextToSearch(String)"
});
formatter.result({
  "duration": 7912385569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 20
    }
  ],
  "location": "Steps.verifyIfATextAppearCorrectlyDisplayed(String)"
});
formatter.result({
  "duration": 4233401489,
  "error_message": "java.lang.AssertionError: Appear a problem, is not possible to find some text in the paragraph expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\n\tat org.testng.Assert.assertTrue(Assert.java:42)\n\tat com.kindred.steps.Steps.verifyIfATextAppearCorrectlyDisplayed(Steps.java:26)\n\tat ✽.Then verify if the text \"Messi\" appear correctly(mobile/interview_mobile_web.feature:11)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1064586557,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "make click in the link with the text \"\u003ctextInTheLink\u003e\", and with this index \"\u003cindex\u003e\" in the footer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the URL \"\u003curl\u003e\" and the Title \"\u003ctitle\u003e\" of the new web",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;",
  "rows": [
    {
      "cells": [
        "textInTheLink",
        "url",
        "title",
        "index"
      ],
      "line": 22,
      "id": "tree-test-more-popular;verify-the-footer-links;;1"
    },
    {
      "cells": [
        "Responsible Gaming",
        "whentostop",
        "Responsible",
        "2"
      ],
      "line": 23,
      "id": "tree-test-more-popular;verify-the-footer-links;;2"
    },
    {
      "cells": [
        "Terms and Conditions",
        "terms",
        "Terms",
        "2"
      ],
      "line": 24,
      "id": "tree-test-more-popular;verify-the-footer-links;;3"
    },
    {
      "cells": [
        "Security Information",
        "security",
        "official",
        "2"
      ],
      "line": 25,
      "id": "tree-test-more-popular;verify-the-footer-links;;4"
    },
    {
      "cells": [
        "Cookies",
        "cookies",
        "Cookies",
        "2"
      ],
      "line": 26,
      "id": "tree-test-more-popular;verify-the-footer-links;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12112159447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 3917880329,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "make click in the link with the text \"Responsible Gaming\", and with this index \"2\" in the footer",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the URL \"whentostop\" and the Title \"Responsible\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Responsible Gaming",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 80
    }
  ],
  "location": "Steps.makeClickInATextPerText(String,String)"
});
formatter.result({
  "duration": 3897917024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "whentostop",
      "offset": 16
    },
    {
      "val": "Responsible",
      "offset": 43
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4175412804,
  "status": "passed"
});
formatter.after({
  "duration": 984553174,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12123606640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 9920829601,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "make click in the link with the text \"Terms and Conditions\", and with this index \"2\" in the footer",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the URL \"terms\" and the Title \"Terms\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Terms and Conditions",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 82
    }
  ],
  "location": "Steps.makeClickInATextPerText(String,String)"
});
formatter.result({
  "duration": 3779056324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "terms",
      "offset": 16
    },
    {
      "val": "Terms",
      "offset": 38
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4157103756,
  "status": "passed"
});
formatter.after({
  "duration": 953968582,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12237507092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 8366197765,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "make click in the link with the text \"Security Information\", and with this index \"2\" in the footer",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the URL \"security\" and the Title \"official\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Security Information",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 82
    }
  ],
  "location": "Steps.makeClickInATextPerText(String,String)"
});
formatter.result({
  "duration": 2909356836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "security",
      "offset": 16
    },
    {
      "val": "official",
      "offset": 41
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4201986372,
  "status": "passed"
});
formatter.after({
  "duration": 1094971674,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12457562234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 9280761363,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "make click in the link with the text \"Cookies\", and with this index \"2\" in the footer",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify the URL \"cookies\" and the Title \"Cookies\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cookies",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "Steps.makeClickInATextPerText(String,String)"
});
formatter.result({
  "duration": 3233923617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cookies",
      "offset": 16
    },
    {
      "val": "Cookies",
      "offset": 40
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4220491912,
  "status": "passed"
});
formatter.after({
  "duration": 1172396502,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"\u003ctextInTheLink\u003e\", and with this index \"\u003cindex\u003e\" in the body carrousel",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"\u003curl\u003e\" and the Title \"\u003ctitle\u003e\" of the new web",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;",
  "rows": [
    {
      "cells": [
        "textInTheLink",
        "url",
        "title",
        "index"
      ],
      "line": 33,
      "id": "tree-test-more-popular;verify-the-footer-links;;1"
    },
    {
      "cells": [
        "Sports",
        "betting",
        "Sports",
        "1"
      ],
      "line": 34,
      "id": "tree-test-more-popular;verify-the-footer-links;;2"
    },
    {
      "cells": [
        "Casino",
        "casino",
        "Casino",
        "1"
      ],
      "line": 35,
      "id": "tree-test-more-popular;verify-the-footer-links;;3"
    },
    {
      "cells": [
        "Live Casino",
        "casino",
        "Casino",
        "1"
      ],
      "line": 36,
      "id": "tree-test-more-popular;verify-the-footer-links;;4"
    },
    {
      "cells": [
        "Bingo",
        "bingo",
        "Bingo",
        "1"
      ],
      "line": 37,
      "id": "tree-test-more-popular;verify-the-footer-links;;5"
    },
    {
      "cells": [
        "Lottery Betting",
        "lotto",
        "Lottery",
        "1"
      ],
      "line": 38,
      "id": "tree-test-more-popular;verify-the-footer-links;;6"
    },
    {
      "cells": [
        "Poker",
        "poker",
        "Poker",
        "1"
      ],
      "line": 39,
      "id": "tree-test-more-popular;verify-the-footer-links;;7"
    },
    {
      "cells": [
        "Blog",
        "blog",
        "Blog",
        "1"
      ],
      "line": 40,
      "id": "tree-test-more-popular;verify-the-footer-links;;8"
    },
    {
      "cells": [
        "Apps",
        "apps",
        "Apps",
        "1"
      ],
      "line": 41,
      "id": "tree-test-more-popular;verify-the-footer-links;;9"
    },
    {
      "cells": [
        "Special Offers",
        "promotions",
        "Special",
        "1"
      ],
      "line": 42,
      "id": "tree-test-more-popular;verify-the-footer-links;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12957316602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 4117742000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Sports\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"betting\" and the Title \"Sports\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sports",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 13457105617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "betting",
      "offset": 16
    },
    {
      "val": "Sports",
      "offset": 40
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4274434401,
  "status": "passed"
});
formatter.after({
  "duration": 1068688965,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 13145001692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 4151342020,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Casino\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"casino\" and the Title \"Casino\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Casino",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 6425371738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "casino",
      "offset": 16
    },
    {
      "val": "Casino",
      "offset": 39
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4207041221,
  "status": "passed"
});
formatter.after({
  "duration": 1052616289,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12609807948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 8929719763,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Live Casino\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"casino\" and the Title \"Casino\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Live Casino",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 4264929727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "casino",
      "offset": 16
    },
    {
      "val": "Casino",
      "offset": 39
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4600250080,
  "status": "passed"
});
formatter.after({
  "duration": 1105380583,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12550775990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 9581487603,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Bingo\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"bingo\" and the Title \"Bingo\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bingo",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 5142948318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bingo",
      "offset": 16
    },
    {
      "val": "Bingo",
      "offset": 38
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4154223542,
  "status": "passed"
});
formatter.after({
  "duration": 1129120072,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12413815771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 3738190282,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Lottery Betting\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"lotto\" and the Title \"Lottery\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Lottery Betting",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 77
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 6403181831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lotto",
      "offset": 16
    },
    {
      "val": "Lottery",
      "offset": 38
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4179604925,
  "status": "passed"
});
formatter.after({
  "duration": 1067754449,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12610606831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 9060004851,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Poker\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"poker\" and the Title \"Poker\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Poker",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 3143132263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poker",
      "offset": 16
    },
    {
      "val": "Poker",
      "offset": 38
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4231622299,
  "status": "passed"
});
formatter.after({
  "duration": 1063681941,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12613658217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 10912214904,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Blog\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"blog\" and the Title \"Blog\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 8731740,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: A session is either terminated or not started (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Nicolass-MacBook-Pro.local\u0027, ip: \u0027169.254.100.148\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d1440x2960, networkConnectionEnabled\u003dtrue, noReset\u003dfalse, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dce07171735a7641d017e, platform\u003dLINUX, deviceUDID\u003dce07171735a7641d017e, desired\u003d{noReset\u003dfalse, browserName\u003dChrome, platformName\u003dAndroid, deviceName\u003dAndroid}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dChrome, javascriptEnabled\u003dtrue, deviceModel\u003dSM-N950F, platformName\u003dAndroid, deviceManufacturer\u003dsamsung}]\nSession ID: 4ecd56ca-9b7d-44e8-a9e8-fe7224d8db47\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(text(),\u0027Blog\u0027)])[\u00271\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:132)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:52)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.kindred.framework.DSL.clickJSx2(DSL.java:291)\n\tat com.kindred.framework.DSL.genericClickByContainsSomeTextAndWithSomeSpecificIndex(DSL.java:51)\n\tat com.kindred.pageobject.web.GenericPage.genericMakeClickInALinkWithSomeText(GenericPage.java:30)\n\tat com.kindred.steps.Steps.makeClickInATextPerT3ext(Steps.java:37)\n\tat ✽.And make click in the link with the text \"Blog\", and with this index \"1\" in the body carrousel(mobile/interview_mobile_web.feature:29)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "blog",
      "offset": 16
    },
    {
      "val": "Blog",
      "offset": 37
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5667950,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: A session is either terminated or not started (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Nicolass-MacBook-Pro.local\u0027, ip: \u0027169.254.100.148\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d1440x2960, networkConnectionEnabled\u003dtrue, noReset\u003dfalse, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dce07171735a7641d017e, platform\u003dLINUX, deviceUDID\u003dce07171735a7641d017e, desired\u003d{noReset\u003dfalse, browserName\u003dChrome, platformName\u003dAndroid, deviceName\u003dAndroid}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dChrome, javascriptEnabled\u003dtrue, deviceModel\u003dSM-N950F, platformName\u003dAndroid, deviceManufacturer\u003dsamsung}]\nSession ID: 4ecd56ca-9b7d-44e8-a9e8-fe7224d8db47\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:189)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:526)\n\tat com.kindred.steps.common.CommonSteps.afterMethod(CommonSteps.java:58)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:200)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:212)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:689)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:882)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1189)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:124)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\n\tat org.testng.TestRunner.run(TestRunner.java:617)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:38)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:382)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12262100817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 4175454277,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Apps\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"apps\" and the Title \"Apps\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Apps",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 5995639659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apps",
      "offset": 16
    },
    {
      "val": "Apps",
      "offset": 37
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4218703971,
  "status": "passed"
});
formatter.after({
  "duration": 1102276866,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I detect the enviroment to execute the test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on \"Blog\" landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.startingEnv()"
});
formatter.result({
  "duration": 12676801455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "CommonSteps.accesingToLandingPage(String)"
});
formatter.result({
  "duration": 10016772458,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "verify the footer links",
  "description": "",
  "id": "tree-test-more-popular;verify-the-footer-links;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestForMobileWeb"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "make click in the link with the text \"Special Offers\", and with this index \"1\" in the body carrousel",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify the URL \"promotions\" and the Title \"Special\" of the new web",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Special Offers",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 76
    }
  ],
  "location": "Steps.makeClickInATextPerT3ext(String,String)"
});
formatter.result({
  "duration": 3991761464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promotions",
      "offset": 16
    },
    {
      "val": "Special",
      "offset": 43
    }
  ],
  "location": "Steps.verifyTheUrlAndTheTitle(String,String)"
});
formatter.result({
  "duration": 4210237893,
  "status": "passed"
});
formatter.after({
  "duration": 1044431899,
  "status": "passed"
});
});