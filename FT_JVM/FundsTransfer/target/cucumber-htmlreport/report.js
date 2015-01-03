$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('fundstransfer\test\fundstransfer.feature');
formatter.feature({
  "line": 2,
  "name": "Customer Transfer\u0027s Fund",
  "description": "As a customer,\r\nI want to transfer funds\r\nso that I can send money to my friends and family",
  "id": "customer-transfer\u0027s-fund",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Valid Payee",
  "description": "",
  "id": "customer-transfer\u0027s-fund;valid-payee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "he enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "ensure the fund transfer is complete with \"$100 transferred successfully to Jim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundsTransferStepDefs.The_user_is_on_fund_transfer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_payee_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_amount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FundsTransferStepDefs.He_submits_request_for_fund_transfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$100 transferred successfully to Jim!!",
      "offset": 43
    }
  ],
  "location": "FundsTransferStepDefs.Ensure_the_fund_transfer_is_complete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Invalid Payee",
  "description": "",
  "id": "customer-transfer\u0027s-fund;invalid-payee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "he enters \"Jack\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027Jack\u0027 is not registered in your List of Payees\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundsTransferStepDefs.The_user_is_on_fund_transfer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_payee_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_amount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FundsTransferStepDefs.He_submits_request_for_fund_transfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! \u0027Jack\u0027 is not registered in your List of Payees",
      "offset": 38
    }
  ],
  "location": "FundsTransferStepDefs.Ensure_a_transaction_failure_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Account is overdrawn past the overdraft limit",
  "description": "",
  "id": "customer-transfer\u0027s-fund;account-is-overdrawn-past-the-overdraft-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "he enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "he enters \"1000000\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundsTransferStepDefs.The_user_is_on_fund_transfer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_payee_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000000",
      "offset": 11
    }
  ],
  "location": "FundsTransferStepDefs.He_enters_amount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FundsTransferStepDefs.He_submits_request_for_fund_transfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! account cannot be overdrawn",
      "offset": 38
    }
  ],
  "location": "FundsTransferStepDefs.Ensure_a_transaction_failure_message(String)"
});
formatter.result({
  "status": "skipped"
});
});