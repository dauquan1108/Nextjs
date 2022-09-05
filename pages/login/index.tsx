/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 9/5/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';

// component
import InputShared from "../../src/component/base/inputShared";

function Login() {
    return(
        <div className="h-50 bg-red-200 flex items-center justify-center p-20">
            <InputShared
                type='userName'
                valueInputs='Quandx'
                placeholders='UserName'
            />
        </div>
    );
}

export default Login;
