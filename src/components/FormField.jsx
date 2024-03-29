import classNames from "classnames";
import { Field } from "formik";

const FormField = (props) => {
  const { name, className, label, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const isInError = meta.touched && meta.error;

        return (
          <label className={classNames("flex flex-col ", className)}>
            <span className="font-bold text-lg pl-3 ">{label}</span>
            <input
              {...field}
              {...otherProps}
              className={classNames(
                "px-3 py-1.5 my-0 rounded-[24px]",
                isInError ? "border-solid border-2 border-red-600" : undefined
              )}
            />
            <div className="flex flex-row min-h-[20px] justify-center">
              {isInError ? (
                <span className="text-red-600 text-sm">{meta.error}</span>
              ) : null}
            </div>
          </label>
        );
      }}
    </Field>
  );
};

export default FormField;
