const Dropdown = ({ questionId, questionText, answers, formik }) => {
	return (
		<>
			<label htmlFor={questionId} className="block font-semibold">
				{questionText}
			</label>
			<span className="mb-7 block">
				<select
					name={questionId}
					id={questionId}
					className="w-full bg-inherit"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.timing}
				>
					<option value="" className="bg-slate-600"></option>
					{answers.map((answer, index) => {
						return (
							<option value={answer} className="bg-slate-600" key={index}>
								{answer}
							</option>
						);
					})}
				</select>
				{formik.touched[questionId] && formik.errors[questionId] ? (
					<span className="text-red-400 block">{formik.errors.timing}</span>
				) : null}
			</span>
		</>
	);
};

export default Dropdown;
