import classNames from "classnames";
import { Field } from "formik";

const FormField = (props) => {
  const { name, className, label = props.placeholder, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label className={classNames("flex flex-col gap-2", className)}>
          <span className="font-bold text-lg pl-3">{label}</span>
          <input {...field} {...otherProps} className="px-3 py-1.5 border-2" />
          {meta.touched && meta.error ? (
            <span className="text-red-600 text-sm">{meta.error}</span>
          ) : null}
        </label>
      )}
    </Field>
  );
};

export default FormField;
