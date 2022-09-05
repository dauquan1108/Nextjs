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

import React, {FC}  from 'react';

interface PropTypes {
    names: string;
    types: string;
    typeLabels: string;
    className: string;
    valueInputs: string;
    placeholders: string;
    messageErrors: object;
    onChangeInputs: any;
    onBlurInputs: any;
}

const InputShared:FC<PropTypes> = ({names, types, typeLabels, className, valueInputs, placeholders,messageErrors,  onChangeInputs, onBlurInputs }) => {

    return(
        <div>
            <input
                // onChange={onChangeInput}
                // onBlur={onBlurInput}
                name={names}
                type={types}
                value={valueInputs}
                placeholder={placeholders}
                // className={classNames(styles['form-control'], messageErrors?.[names] && styles.invalid)}
            />
            {/*{*/}
            {/*    messageErrors?.[names] && (*/}
            {/*        <span className={classNames(styles['form-message'], styles['invalid-message'])}>*/}
            {/*                    {messageErrors?.[names]}*/}
            {/*                </span>*/}
            {/*    )*/}
            {/*}*/}
        </div>
    );
}

export default InputShared;
