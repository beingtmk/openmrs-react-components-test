import React from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;

const NewInput = ({
  label,
  labelCol,
  wrapperCol,
  help,
  extra,
  validateStatus,
  hasFeedback = true,
  colon,
  ...rest
}) => {
return (<FormItem
label={label}
wrapperCol={wrapperCol}
labelCol={labelCol}
help={help}
hasFeedback={hasFeedback}
extra={extra}
validateStatus={validateStatus}
colon={colon}
>
<Input {...rest.input} />
</FormItem>);
};

export default NewInput;