import classNames from "classnames";
import { Field } from "formik";

const TextAreaField = (props) => {
  const { name, className, label, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const isInError = meta.touched && meta.error;

        return (
          <label className={classNames("flex flex-col gap-1", className)}>
            <span className="font-bold text-lg pl-3">{label}</span>
            <textarea
              rows="5"
              {...field}
              {...otherProps}
              className={classNames(
                "px-3 py-1.5 my-0 border-2 rounded-[24px] resize-none",
                isInError ? "border-solid border-2 border-red-600" : undefined
              )}
            />
            <div className="flex flex-row justify-center">
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

export default TextAreaField;
