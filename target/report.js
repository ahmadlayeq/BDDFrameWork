$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.before({
  "duration": 3880160221,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5182207602,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1745470397,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_see_test_environment_page()"
});
formatter.result({
  "duration": 543058858,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 6323401,
  "status": "passed"
});
formatter.after({
  "duration": 736272910,
  "status": "passed"
});
formatter.before({
  "duration": 3366626673,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4196534339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1251273059,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 81568323,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 731776978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 370693368,
  "status": "passed"
});
formatter.after({
  "duration": 727402877,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 30,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "khalid123@yahoo.com",
        "654321"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    },
    {
      "cells": [
        "test002@test.com",
        "test002"
      ],
      "line": 32,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;3"
    },
    {
      "cells": [
        "test003@test.com",
        "test003"
      ],
      "line": 33,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3281531928,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4078933786,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1172582421,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username khalid123@yahoo.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password 654321",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 276897200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 979845928,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 373616804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "khalid123@yahoo.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 89069939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "654321",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 82212948,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 487738226,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 380276911,
  "status": "passed"
});
formatter.after({
  "duration": 726990605,
  "status": "passed"
});
formatter.before({
  "duration": 3359710052,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 8998239873,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1709433028,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test002@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test002",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 85259758,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 949429244,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 370161321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 76784005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 60258652,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 684137883,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 374029077,
  "status": "passed"
});
formatter.after({
  "duration": 722694640,
  "status": "passed"
});
formatter.before({
  "duration": 3322604988,
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
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5297903063,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 2261564971,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test003@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test003",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 84659341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 881185248,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 389729884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 87396174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(String)"
});
formatter.result({
  "duration": 53768697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "duration": 532802931,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 346430447,
  "status": "passed"
});
formatter.after({
  "duration": 742868246,
  "status": "passed"
});
});