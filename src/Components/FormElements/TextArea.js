const TextArea = ({
	questionId,
	questionText,
	formik,
	rows = 6,
	cols = 100,
}) => {
	return (
		<label className="flex flex-col mb-7">
			<span className="font-semibold">{questionText}</span>
			<textarea
				name={questionId}
				id={questionId}
				rows={rows}
				cols={cols}
				className="rounded-md text-slate-900 bg-slate-100 focus-visible:ring-fuchsia-500 focus:ring-2"
				onChange={formik.handleChange}
				value={formik.values[questionId]}
				onBlur={formik.handleBlur}
			/>
			{formik.touched[questionId] && formik.errors[questionId] ? (
				<span className="text-red-400">{formik.errors[questionId]}</span>
			) : null}
		</label>
	);
};

export default TextArea;
