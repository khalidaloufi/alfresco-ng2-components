/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ApiService } from './apiservice';

export class Tasks {

    api: ApiService = new ApiService();

    constructor() {
    }

    async init(username, password) {
        await this.api.login(username, password);
    }

    async createStandaloneTask(taskName, appName) {
        const path = '/' + appName + '-rb/v1/tasks';//trebuie rb?
        const method = 'POST';
        const queryParams = {}, postBody = {
            'name': taskName,
            "payloadType":"CreateTaskPayload"
        };
        let data;

        try {
            data = await this.api.performBpmOperation(path, method, queryParams, postBody);
        } catch (e) {
            console.log("Errorrrrr: ", e);
        }
        return data;
    }

}
