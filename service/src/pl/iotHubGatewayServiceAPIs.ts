/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models/index";
import * as Mappers from "./models/mappers";
import * as operations from "./operations/index";
import { IotHubGatewayServiceAPIsContext } from "./iotHubGatewayServiceAPIsContext";

class IotHubGatewayServiceAPIs extends IotHubGatewayServiceAPIsContext {
  // Operation groups
  configuration: operations.ConfigurationOperations;
  statistics: operations.Statistics;
  devices: operations.Devices;
  bulkRegistry: operations.BulkRegistry;
  query: operations.Query;
  jobs: operations.Jobs;
  cloudToDeviceMessages: operations.CloudToDeviceMessages;
  modules: operations.Modules;
  digitalTwin: operations.DigitalTwin;

  /**
   * Initializes a new instance of the IotHubGatewayServiceAPIs class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.IotHubGatewayServiceAPIsOptions) {
    super(credentials, options);
    this.configuration = new operations.ConfigurationOperations(this);
    this.statistics = new operations.Statistics(this);
    this.devices = new operations.Devices(this);
    this.bulkRegistry = new operations.BulkRegistry(this);
    this.query = new operations.Query(this);
    this.jobs = new operations.Jobs(this);
    this.cloudToDeviceMessages = new operations.CloudToDeviceMessages(this);
    this.modules = new operations.Modules(this);
    this.digitalTwin = new operations.DigitalTwin(this);
  }
}

// Operation Specifications

export {
  IotHubGatewayServiceAPIs,
  IotHubGatewayServiceAPIsContext,
  Models as IotHubGatewayServiceAPIsModels,
  Mappers as IotHubGatewayServiceAPIsMappers
};
export * from "./operations";
