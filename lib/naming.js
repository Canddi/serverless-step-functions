'use strict';

module.exports = {
  getStateMachineLogicalId(stateMachineName, Name) {
    if (Name) {
      return `${this.provider.naming.getNormalizedFunctionName(Name)}`;
    }
    return `${this.provider.naming
      .getNormalizedFunctionName(stateMachineName)}StepFunctionsStateMachine`;
  },

  getStateMachineOutputLogicalId(stateMachineName, Name) {
    if (Name) {
      return `${this.provider.naming.getNormalizedFunctionName(Name)}Arn`;
    }
    return `${this.provider.naming
      .getNormalizedFunctionName(stateMachineName)}StepFunctionsStateMachineArn`;
  },

  getActivityLogicalId(activityName) {
    return `${this.provider.naming
      .getNormalizedFunctionName(activityName)}StepFunctionsActivity`;
  },

  getActivityOutputLogicalId(activityName) {
    return `${this.provider.naming
      .getNormalizedFunctionName(activityName)}StepFunctionsActivityArn`;
  },

  getStateMachinePolicyName() {
    return [
      this.provider.getStage(),
      this.provider.getRegion(),
      this.provider.serverless.service.service,
      'statemachine',
    ].join('-');
  },

  getiamRoleStateMachineLogicalId() {
    return 'IamRoleStateMachineExecution';
  },

  getRestApiLogicalId() {
    return 'ApiGatewayRestApiStepFunctions';
  },

  getApiGatewayName() {
    return `${this.provider.getStage()}-${this.provider.serverless.service.service}-stepfunctions`;
  },

  getApiToStepFunctionsIamRoleLogicalId() {
    return 'ApigatewayToStepFunctionsRole';
  },
};